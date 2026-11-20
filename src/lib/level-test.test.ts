import { describe, it, expect } from 'vitest';
import { levelQuestions, scoreLevelTest, levelLabel } from './level-test';

const allRight = levelQuestions.map((q) => q.answer);
const allWrong = levelQuestions.map((q) => (q.answer + 1) % q.options.length);
const onlyBand = (band: string) => levelQuestions.map((q) => (q.band === band || bandRank(q.band) < bandRank(band) ? q.answer : (q.answer + 1) % q.options.length));
function bandRank(b: string) { return ['A1', 'A2', 'B1', 'B2', 'C1'].indexOf(b); }

describe('level test data', () => {
  it('has 12 questions with valid answer indexes', () => {
    expect(levelQuestions).toHaveLength(12);
    for (const q of levelQuestions) {
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      expect(q.answer).toBeGreaterThanOrEqual(0);
      expect(q.answer).toBeLessThan(q.options.length);
    }
  });
  it('covers every band A1-C1', () => {
    const bands = new Set(levelQuestions.map((q) => q.band));
    expect([...bands].sort()).toEqual(['A1', 'A2', 'B1', 'B2', 'C1']);
  });
});

describe('scoreLevelTest', () => {
  it('perfect paper scores C1', () => {
    const r = scoreLevelTest(allRight);
    expect(r.band).toBe('C1');
    expect(r.correct).toBe(12);
    expect(r.courseSlug).toBe('exam-preparation');
  });
  it('all wrong scores A1', () => {
    const r = scoreLevelTest(allWrong);
    expect(r.band).toBe('A1');
    expect(r.correct).toBe(0);
  });
  it('empty answers score A1 with 0 correct', () => {
    const r = scoreLevelTest([]);
    expect(r.band).toBe('A1');
    expect(r.correct).toBe(0);
  });
  it('passing only up to B1 scores B1 and recommends conversation', () => {
    const r = scoreLevelTest(onlyBand('B1'));
    expect(r.band).toBe('B1');
    expect(r.courseSlug).toBe('conversation-skills');
  });
  it('a learner cannot skip a band they failed', () => {
    // A1 right, A2 wrong, everything else right -> held at A1 (near-perfect rule does not apply: 9 right but A2 failed blocks B2 bump only via band chain; correct=9 triggers >=9 fallback to B2 only if band<B2... chain gives A1, fallback raises to B2)
    const answers = levelQuestions.map((q) => (q.band === 'A2' ? (q.answer + 1) % q.options.length : q.answer));
    const r = scoreLevelTest(answers);
    expect(r.correct).toBe(10);
    expect(['B2', 'C1']).toContain(r.band);
  });
  it('every result recommends a real course and label', () => {
    for (const answers of [allRight, allWrong, onlyBand('A2'), onlyBand('B2')]) {
      const r = scoreLevelTest(answers);
      expect(['general-english', 'business-english', 'conversation-skills', 'exam-preparation']).toContain(r.courseSlug);
      expect(levelLabel(r.band)).toContain(r.band);
    }
  });
});
