// CEFR Level Finder — 12 questions graded A1→C1.
// Scoring: each question is worth points by its band weight (A1=1 … C1=5).
// The result band is the highest band where the learner answered at least
// half of that band's questions correctly, with total-score fallbacks so a
// complete beginner lands on A1 and a perfect paper lands on C1.
export interface LevelQuestion {
  id: string;
  band: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  prompt: string;
  options: string[];
  answer: number; // index of correct option
}

export const levelQuestions: LevelQuestion[] = [
  { id: 'q1', band: 'A1', prompt: 'Choose the correct sentence:', options: ['She have a dog.', 'She has a dog.', 'She haves a dog.', 'She is have a dog.'], answer: 1 },
  { id: 'q2', band: 'A1', prompt: '“___ you speak English?” — “Yes, a little.”', options: ['Does', 'Is', 'Do', 'Are'], answer: 2 },
  { id: 'q3', band: 'A2', prompt: 'Yesterday we ___ to the cinema and watched a great film.', options: ['go', 'goes', 'went', 'gone'], answer: 2 },
  { id: 'q4', band: 'A2', prompt: 'This book is ___ than the one I read last week.', options: ['more interesting', 'most interesting', 'interesting', 'interestinger'], answer: 0 },
  { id: 'q5', band: 'B1', prompt: 'If it ___ tomorrow, we will stay at home.', options: ['will rain', 'rains', 'would rain', 'rained'], answer: 1 },
  { id: 'q6', band: 'B1', prompt: 'I have lived in this city ___ 2019.', options: ['for', 'from', 'since', 'until'], answer: 2 },
  { id: 'q7', band: 'B2', prompt: 'The report ___ by the team before the meeting started.', options: ['has finished', 'was finished', 'finishes', 'is finish'], answer: 1 },
  { id: 'q8', band: 'B2', prompt: 'Choose the sentence closest in meaning to: “He rarely complains.”', options: ['He complains all the time.', 'He almost never complains.', 'He complains rarely and loudly.', 'He never stops complaining.'], answer: 1 },
  { id: 'q9', band: 'B2', prompt: 'Despite ___ tired, she finished the whole report.', options: ['be', 'was', 'being', 'been'], answer: 2 },
  { id: 'q10', band: 'C1', prompt: 'The committee’s decision was ___ by everyone as a fair compromise.', options: ['widely regarded', 'wide regarded', 'widely regard', 'regard widely'], answer: 0 },
  { id: 'q11', band: 'C1', prompt: 'Choose the most natural sentence:', options: ['Scarcely had we arrived when the meeting began.', 'Scarcely we had arrived when the meeting began.', 'Scarcely had we arrive when the meeting began.', 'We scarcely had arrived when began the meeting.'], answer: 0 },
  { id: 'q12', band: 'C1', prompt: '“The negotiations broke down” means the negotiations…', options: ['were delayed for lunch', 'failed and ended without agreement', 'became cheaper', 'moved to another room'], answer: 1 },
];

export type CefrBand = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
const BANDS: CefrBand[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

export interface LevelResult {
  band: CefrBand;
  correct: number;
  total: number;
  courseSlug: string;
  courseTitle: string;
  summary: string;
}

const RECOMMENDATIONS: Record<CefrBand, { courseSlug: string; courseTitle: string; summary: string }> = {
  A1: { courseSlug: 'general-english', courseTitle: 'General English', summary: 'You are at the start of your English journey — perfect. We will build strong foundations: everyday words, simple sentences and the confidence to use them.' },
  A2: { courseSlug: 'general-english', courseTitle: 'General English', summary: 'You can handle the basics. Now we grow your vocabulary and grammar so simple conversations become easy, natural ones.' },
  B1: { courseSlug: 'conversation-skills', courseTitle: 'Conversation Skills', summary: 'You understand a lot — now it is time to speak. Fluency training will help you talk without translating or freezing.' },
  B2: { courseSlug: 'business-english', courseTitle: 'Business English', summary: 'You are independent in English. Polish your professional communication, or aim at an exam target — we will plan it in your free trial.' },
  C1: { courseSlug: 'exam-preparation', courseTitle: 'Exam Preparation', summary: 'You are advanced. Focused exam strategy or fine-tuning for work will take you to full, natural mastery.' },
};

/** answers: array of chosen option indexes, same order as levelQuestions (-1 = skipped). */
export function scoreLevelTest(answers: number[]): LevelResult {
  const total = levelQuestions.length;
  let correct = 0;
  const perBand = new Map<CefrBand, { right: number; count: number }>();
  levelQuestions.forEach((q, i) => {
    const entry = perBand.get(q.band) ?? { right: 0, count: 0 };
    entry.count += 1;
    if (answers[i] === q.answer) { correct += 1; entry.right += 1; }
    perBand.set(q.band, entry);
  });
  // Highest band with >= half of its questions right, but the learner must
  // also have passed every lower band at >= half — no skipping levels.
  let band: CefrBand = 'A1';
  for (const b of BANDS) {
    const e = perBand.get(b);
    if (e && e.right / e.count >= 0.5) band = b; else break;
  }
  // Perfect or near-perfect papers should not be held back by one slip.
  if (correct >= total - 1) band = 'C1';
  else if (correct >= 9 && band < 'B2') band = 'B2';
  const rec = RECOMMENDATIONS[band];
  return { band, correct, total, ...rec };
}

export function levelLabel(band: CefrBand): string {
  return { A1: 'A1 — Beginner', A2: 'A2 — Elementary', B1: 'B1 — Intermediate', B2: 'B2 — Upper Intermediate', C1: 'C1 — Advanced' }[band];
}
