// Single mock-data file for the whole site. Swap this file for real
// content once the design is approved — nothing else needs to change.
export const site = {
  name: 'Emily Carter',
  role: 'English Teacher',
  url: 'https://emilycarter-english.pages.dev',
  description:
    'Professional English lessons with Emily Carter, a TESOL-certified teacher. General, Business, Conversation and Exam Preparation courses — personalised for your goals. Book a free trial lesson.',
  year: 2026,
};

export const contact = {
  email: 'hello@emilycarter.co.uk',
  location: 'London, United Kingdom — teaching online worldwide',
  hours: 'Monday to Saturday, 8:00–20:00 (UK time)',
};

export const socials = [
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
] as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/courses/', label: 'Courses' },
  { href: '/level-test/', label: 'Level Test' },
  { href: '/testimonials/', label: 'Testimonials' },
  { href: '/contact/', label: 'Contact' },
];

export const availability = {
  spaces: 3,
  term: 'December 2026',
  note: 'Only 3 lesson spaces left for December 2026 — when they are gone, new students join the January waiting list.',
};

export const stats = [
  { value: 1000, suffix: '+', label: 'Students taught' },
  { value: 5, suffix: '+', label: 'Years of experience' },
  { value: 32, suffix: '', label: 'Countries reached' },
  { value: 96, suffix: '%', label: 'Students who reach their goal' },
];

export const marqueeItems = [
  'Students from Germany', 'IELTS Band 7.5', 'Students from Japan', 'Business English for teams',
  'Students from Brazil', 'A1 → B2 journeys', 'Students from South Korea', 'Conversation confidence',
  'Students from Poland', 'Exam success stories', 'Students from Spain', 'Kids & teens welcome',
];

export const introVideo = {
  poster: '/images/hero-800.jpg',
  src: '/video/intro.mp4',
  captions: '/video/intro.vtt',
  duration: '0:32',
  transcript: [
    "Hello! I'm Emily Carter, a TESOL-certified English teacher from London.",
    'For over five years I have helped more than a thousand students — adults, teenagers and young learners — speak English with confidence.',
    'In my lessons we talk, we laugh, and we practise the English you actually need: for work, for exams, for travel, for life.',
    'Book a free trial lesson and let us make your personal plan together. I look forward to meeting you!',
  ],
};

export const credentials = [
  { icon: 'award', title: 'Qualified Teacher', text: 'TESOL Certified' },
  { icon: 'users', title: '1000+ Students', text: 'Worldwide' },
  { icon: 'star', title: '5+ Years', text: 'of Experience' },
];

export interface Course {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  tint: 'blue' | 'cream';
  level: string;
  duration: string;
  priceFrom: number;
  outcomes: string[];
  curriculum: { title: string; text: string }[];
  whoFor: string[];
}

export const courses: Course[] = [
  {
    slug: 'general-english',
    title: 'General English',
    short: 'Improve your everyday English skills.',
    description:
      'Build a strong foundation in grammar, vocabulary, listening and speaking for everyday life — travel, work, study and conversation with confidence.',
    icon: 'chat',
    tint: 'blue',
    level: 'A1–C1 (Beginner to Advanced)',
    duration: '50-minute lessons',
    priceFrom: 24,
    outcomes: [
      'Speak about everyday topics without long pauses',
      'Understand native speakers in films, podcasts and real life',
      'Use grammar accurately in speaking and writing',
      'Grow a practical vocabulary of 2,000+ useful words and phrases',
    ],
    curriculum: [
      { title: 'Foundations', text: 'Core grammar, sentence building and the 1,000 most useful words.' },
      { title: 'Everyday speaking', text: 'Shopping, travel, small talk, appointments and phone calls.' },
      { title: 'Listening & pronunciation', text: 'Real accents, connected speech and clear, natural pronunciation.' },
      { title: 'Reading & writing', text: 'Messages, emails and short texts you actually need to write.' },
    ],
    whoFor: ['Beginners starting from zero', 'Learners who studied at school but cannot speak yet', 'Anyone moving to or travelling in an English-speaking country'],
  },
  {
    slug: 'business-english',
    title: 'Business English',
    short: 'Communicate confidently in a professional setting.',
    description:
      'English for meetings, presentations, interviews, emails and negotiations — so you sound as capable in English as you are in your own language.',
    icon: 'briefcase',
    tint: 'cream',
    level: 'B1–C1 (Intermediate to Advanced)',
    duration: '50-minute lessons',
    priceFrom: 28,
    outcomes: [
      'Lead and join meetings with clear, polite, professional English',
      'Give presentations and handle questions confidently',
      'Write emails that are concise, correct and persuasive',
      'Prepare for interviews and salary negotiations in English',
    ],
    curriculum: [
      { title: 'Meetings & calls', text: 'Agreeing, disagreeing politely, clarifying and summarising.' },
      { title: 'Presentations', text: 'Structure, signposting language and handling Q&A.' },
      { title: 'Professional writing', text: 'Emails, reports and messages with the right tone.' },
      { title: 'Interviews & careers', text: 'Talking about experience, strengths and ambitions.' },
    ],
    whoFor: ['Professionals working with international teams', 'Job seekers preparing for English interviews', 'Managers who present or negotiate in English'],
  },
  {
    slug: 'conversation-skills',
    title: 'Conversation Skills',
    short: 'Speak naturally and fluently.',
    description:
      'Speaking-first lessons that train fluency, pronunciation and natural expression — so conversations feel easy instead of stressful.',
    icon: 'headphones',
    tint: 'blue',
    level: 'A2–C1 (Elementary to Advanced)',
    duration: '50-minute lessons',
    priceFrom: 24,
    outcomes: [
      'Speak for minutes at a time without freezing or translating',
      'Sound natural with phrasal verbs, idioms and linking words',
      'Improve pronunciation so people understand you first time',
      'Think in English instead of translating word by word',
    ],
    curriculum: [
      { title: 'Fluency training', text: 'Timed speaking, storytelling and opinion practice every lesson.' },
      { title: 'Natural expression', text: 'Phrasal verbs, collocations and everyday idioms in context.' },
      { title: 'Pronunciation clinic', text: 'Sounds, stress and intonation, corrected kindly in real time.' },
      { title: 'Real-life topics', text: 'News, culture, work and life — topics you actually talk about.' },
    ],
    whoFor: ['Learners who understand a lot but speak little', 'Students preparing to live or study abroad', 'Anyone who feels nervous speaking English'],
  },
  {
    slug: 'exam-preparation',
    title: 'Exam Preparation',
    short: 'Prepare for IELTS & TOEFL exams.',
    description:
      'Focused, strategy-based preparation for IELTS and TOEFL — with mock tests, band-score feedback and a study plan built around your target score and date.',
    icon: 'doc',
    tint: 'cream',
    level: 'B1–C1 (Intermediate to Advanced)',
    duration: '50-minute lessons',
    priceFrom: 30,
    outcomes: [
      'Know exactly what examiners reward in every section',
      'Raise your writing score with structured, corrected practice essays',
      'Practise speaking under real exam conditions with detailed feedback',
      'Walk in with a timing strategy for every task type',
    ],
    curriculum: [
      { title: 'Diagnostic & plan', text: 'A full mock test first, then a plan aimed at your target band.' },
      { title: 'Writing mastery', text: 'Task 1 and Task 2 structures, with every essay corrected in detail.' },
      { title: 'Speaking practice', text: 'Parts 1–3 mock interviews with band-descriptor feedback.' },
      { title: 'Listening & reading strategy', text: 'Question types, timing and the traps that cost easy marks.' },
    ],
    whoFor: ['IELTS candidates targeting Band 6.5–8.0', 'TOEFL students applying to universities abroad', 'Anyone retaking an exam after a disappointing score'],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  result: string;
  avatar: string;
  avatarAlt: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    role: 'General English student, Germany',
    quote: "Emily's lessons are engaging and super helpful. My English has improved so much!",
    result: 'A2 → B2 in 8 months',
    avatar: 'avatar-sarah',
    avatarAlt: 'Portrait of Sarah M.',
  },
  {
    name: 'David K.',
    role: 'Business English student, South Korea',
    quote: 'Professional, patient and truly inspiring. Highly recommended!',
    result: 'Now leads weekly meetings in English',
    avatar: 'avatar-david',
    avatarAlt: 'Portrait of David K.',
  },
  {
    name: 'Anna L.',
    role: 'Conversation Skills student, Poland',
    quote: 'I finally feel confident speaking English. Thank you!',
    result: 'Speaks fluently without translating',
    avatar: 'avatar-anna',
    avatarAlt: 'Portrait of Anna L.',
  },
  {
    name: 'Marco P.',
    role: 'Exam Preparation student, Italy',
    quote: 'Emily showed me exactly what the IELTS examiners want. My writing finally makes sense — and my score proves it.',
    result: 'IELTS 6.0 → 7.5 in 10 weeks',
    avatar: 'avatar-sarah',
    avatarAlt: 'Portrait of Marco P.',
  },
  {
    name: 'Yuki T.',
    role: 'Conversation Skills student, Japan',
    quote: 'Every lesson feels like talking to a friend, but I leave with pages of new phrases. I stopped being afraid of making mistakes.',
    result: 'First English presentation at work',
    avatar: 'avatar-anna',
    avatarAlt: 'Portrait of Yuki T.',
  },
  {
    name: 'Elena R.',
    role: 'Business English student, Spain',
    quote: 'We practised my real presentations and emails. Two months later I interviewed in English — and got the job.',
    result: 'Landed an international role',
    avatar: 'avatar-david',
    avatarAlt: 'Portrait of Elena R.',
  },
];

export const steps = [
  { title: 'Book a free trial', text: 'Choose a time that suits you. We meet online, talk about your goals and check your current level — no pressure, no payment.' },
  { title: 'Get your personal plan', text: 'You receive a clear learning plan: what we will study, in what order, and how we will measure your progress.' },
  { title: 'Speak with confidence', text: 'Learn in friendly 50-minute lessons, practise between them with simple homework, and watch your English grow week by week.' },
];

export const pricing = {
  trial: { title: 'Free Trial Lesson', price: 0, note: '25 minutes · meet Emily, check your level, get a personal plan' },
  single: { title: 'Single Lesson', price: 30, per: 'per 50-minute lesson', note: 'Flexible — book whenever you need one' },
  packs: [
    { lessons: 5, price: 140, perLesson: 28, saving: 'Save 7%' },
    { lessons: 10, price: 260, perLesson: 26, saving: 'Save 13%', popular: true },
    { lessons: 20, price: 480, perLesson: 24, saving: 'Save 20%' },
  ],
  note: 'Exam Preparation lessons are £2 more per lesson. Packs are valid for 6 months and can be shared between courses. No contracts — pause or stop any time.',
};

export const faqs = [
  { q: 'How does the free trial lesson work?', a: 'Book a time on the booking page and we meet on video call for 25 minutes. We chat in English, I check your level, and I explain exactly how I would help you reach your goal. There is no payment and no obligation to continue.' },
  { q: 'Where do lessons take place?', a: 'All lessons are online by video call, so you can learn from anywhere in the world. You just need a phone, tablet or computer and an internet connection.' },
  { q: 'How long is each lesson?', a: 'Standard lessons are 50 minutes — long enough to make real progress, short enough to fit into a busy day. The free trial is 25 minutes.' },
  { q: 'What level do I need to start?', a: 'Any level, from complete beginner (A1) to advanced (C1). Your plan is built around your current level, which we check together in the free trial.' },
  { q: 'How many lessons a week do you recommend?', a: 'Most students take 1–2 lessons a week and practise a little between them. For an exam with a fixed date, 2–3 lessons a week works better. We will agree a pace that fits your life.' },
  { q: 'Do you give homework?', a: 'Yes — short, practical tasks that take 10–20 minutes, like listening to a podcast, writing a few sentences or learning phrases from your last lesson. It is always useful, never busywork.' },
  { q: 'What if I need to reschedule?', a: 'Life happens. You can reschedule any lesson free of charge with at least 12 hours notice — just send me a message.' },
  { q: 'How do I pay?', a: 'After your free trial, you choose a single lesson or a lesson pack and pay securely online before lessons begin. Packs are valid for 6 months.' },
];

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: 'how-to-speak-english-fluently',
    title: 'How to Speak English Fluently: 7 Habits That Actually Work',
    excerpt: 'Fluency is not a talent — it is a set of small daily habits. Here are the seven that help my students most.',
    date: '2026-10-28',
    readTime: '5 min read',
    image: 'blog-speaking',
    imageAlt: 'Two people having a friendly conversation in English in a cafe',
    body: [
      'Every student asks me the same question: "Emily, how do I become fluent?" They expect a secret. The honest answer is less exciting and much more useful — fluency comes from small habits repeated daily, not from one big effort once a week.',
      'Start with speaking a little every day, even if it is only five minutes talking to yourself while you cook. Describe what you are doing out loud. It feels strange for two days, then it starts to retrain your brain to think in English instead of translating.',
      'Second, learn phrases, not single words. Nobody speaks in single words. When you learn "make a decision" as one chunk, you can use it instantly. Third, listen to English you enjoy — a series, a podcast, football commentary — because you will only repeat what you actually like.',
      'Fourth, stop fearing mistakes. Every mistake you make in a lesson is one you will not make in real life. My students who improve fastest are not the most talented; they are the ones willing to sound imperfect today so they can sound fluent next year.',
      'Finally, get feedback. Practising alone builds habits, but a teacher shows you which habits to build. If you would like a plan built around your level and your goals, book a free trial lesson and we will make one together.',
    ],
  },
  {
    slug: 'ielts-writing-band-7-tips',
    title: 'IELTS Writing: 5 Fixes That Move You Towards Band 7',
    excerpt: 'Most IELTS writing scores stall at 6.0–6.5 for the same five reasons. Fix these and your band can jump.',
    date: '2026-10-14',
    readTime: '6 min read',
    image: 'blog-ielts',
    imageAlt: 'A student studying for the IELTS exam with practice papers and flashcards',
    body: [
      'In ten weeks of exam lessons, I see the same pattern: students know plenty of English, but their writing loses marks for fixable reasons. The examiners are not mysterious — they mark Task Response, Coherence, Vocabulary and Grammar, and each has a quick win.',
      'Fix one: answer the actual question. If the essay asks for your opinion, give it clearly in the introduction and conclusion. Half of the Band 6 essays I mark wander politely around the topic without ever landing.',
      'Fix two: one idea per paragraph, developed properly. Three well-explained ideas beat seven rushed ones. Fix three: vary your sentences on purpose — one short, one long, one starting with a linking phrase. Fix four: learn ten flexible academic phrases instead of fifty memorised ones; examiners spot memorised essays instantly.',
      'Fix five: leave five minutes to check. Subject-verb agreement and missing articles are the cheapest marks in the whole test. In my Exam Preparation course we practise exactly this — timed essays, corrected in detail, until the fixes become automatic.',
    ],
  },
  {
    slug: 'business-english-phrases-meetings',
    title: '12 Business English Phrases That Make Meetings Easier',
    excerpt: 'You do not need perfect English for meetings — you need the right phrases at the right moment. Start with these twelve.',
    date: '2026-09-30',
    readTime: '4 min read',
    image: 'blog-business',
    imageAlt: 'Professionals speaking English confidently in a business meeting',
    body: [
      'My Business English students rarely struggle with grammar. They struggle with moments: interrupting politely, disagreeing without sounding rude, buying ten seconds to think. Those moments are solved by phrases, not grammar rules.',
      'To join a discussion, try "If I could add something here…" or "Building on what Sarah said…". To disagree safely: "I see your point, but I wonder if…" and "That could work — my only concern is…". Both are firm and polite at the same time.',
      'When you do not understand, never just smile. Say "Could you rephrase that?" or "Just to make sure I have understood — you mean…?" Native speakers respect this; it signals care, not weakness. And to close any topic: "So, to sum up, we have agreed to…" — the person who summarises sounds like the person in charge.',
      'Practise two phrases per meeting until they feel automatic, then add two more. Within a month you will have a full toolkit. In my Business English lessons we rehearse your real meetings, so the phrases are ready before you need them.',
    ],
  },
  {
    slug: 'english-for-kids-without-pressure',
    title: 'Helping Your Child Love English (Without Pressure)',
    excerpt: 'Children learn languages best when it feels like play. Three gentle ideas for parents — and one thing to avoid.',
    date: '2026-11-18',
    readTime: '4 min read',
    image: 'blog-speaking',
    imageAlt: 'A parent and child reading an English story together',
    body: [
      'Parents often ask me how to help their child with English at home without turning it into another school subject. The good news: children are built for language. They learn through play, songs and stories — pressure is the only thing that slows them down.',
      'Start with five happy minutes a day: an English song in the car, one page of a picture book at bedtime, or a silly game of "I spy" with colours. Short and joyful beats long and forced, every single time.',
      'Second, praise effort, not accuracy. When your child says "I goed to school", they have just used a real English rule — celebrate the try, then gently repeat the correct form: "You went to school — great!" They will copy you without ever feeling corrected.',
      'And the one thing to avoid: testing. "What is this in English?" quizzes make children perform instead of play. If you would like structured, friendly lessons where learning feels like a game, my kids and teens lessons are built exactly that way — parents are welcome in every lesson.',
    ],
  },
  {
    slug: 'a1-to-b2-how-long-does-it-take',
    title: 'From A1 to B2: How Long Does It Really Take?',
    excerpt: 'Honest timelines for each CEFR level — how many hours, how many lessons, and how to speed things up without burning out.',
    date: '2026-11-04',
    readTime: '5 min read',
    image: 'blog-ielts',
    imageAlt: 'A study planner showing English learning goals and progress',
    body: [
      '"How long until I am fluent?" is the hardest question in language teaching, because the honest answer is: it depends on hours, not months. Research and classroom experience agree on rough guided-learning hours for each CEFR step.',
      'From zero to A1 takes most learners 60–80 hours of study. A1 to A2 another 80–100, A2 to B1 around 100–120, and B1 to B2 — the big one — roughly 120–150 hours of focused learning. Add lessons and daily practice together and you can plan backwards from any goal.',
      'With two lessons a week plus twenty minutes of daily practice, most of my students move one level in four to six months. The students who progress fastest are not studying more hours — they are studying more days. Five short sessions beat one long Sunday cram.',
      'Not sure where you are starting from? Take my free 3-minute level test on this site, then book a free trial and we will turn your result into a realistic timeline together.',
    ],
  },
  {
    slug: 'think-in-english-stop-translating',
    title: 'How to Think in English and Stop Translating',
    excerpt: 'Translating word by word is why speaking feels slow. These three drills retrain your brain to think in English directly.',
    date: '2026-09-16',
    readTime: '4 min read',
    image: 'blog-business',
    imageAlt: 'A student practising English speaking with confidence',
    body: [
      'If speaking English feels slow and tiring, you are probably translating: building the sentence in your language first, then converting it. Everyone starts this way — and everyone can train out of it.',
      'Drill one: narrate your day. While you cook, clean or walk, describe what you are doing in English, out loud, in simple present tense. "I am cutting the onions. Now I add the oil." It feels silly for two days; then your brain starts skipping the translation step for everyday actions.',
      'Drill two: learn chunks, not words. Your brain cannot translate what it never stored as single words. Learn "make a decision", "it depends on", "by the way" as single units and they come out instantly, with no conversion needed.',
      'Drill three: shrink your sentences. Short, direct sentences in English beat long, translated ones. Fluency is not complexity — it is flow. In Conversation Skills lessons we train exactly this, with timed speaking drills that make thinking in English automatic.',
    ],
  },
];

export interface CefrLevel {
  code: string;
  name: string;
  canDo: string[];
  hours: string;
  course: string;
  courseSlug: string;
}

export const cefrLevels: CefrLevel[] = [
  { code: 'A1', name: 'Beginner', canDo: ['Introduce yourself and ask simple questions', 'Understand slow, clear speech about everyday topics', 'Use basic phrases for shopping, travel and daily life'], hours: '60–80 hours from zero', course: 'General English', courseSlug: 'general-english' },
  { code: 'A2', name: 'Elementary', canDo: ['Handle simple conversations and routine tasks', 'Talk about family, work, shopping and local geography', 'Write short notes, messages and simple emails'], hours: '80–100 hours from A1', course: 'General English or Conversation Skills', courseSlug: 'general-english' },
  { code: 'B1', name: 'Intermediate', canDo: ['Travel independently in English-speaking countries', 'Describe experiences, events, hopes and ambitions', 'Follow the main points of films, shows and meetings'], hours: '100–120 hours from A2', course: 'Conversation Skills', courseSlug: 'conversation-skills' },
  { code: 'B2', name: 'Upper Intermediate', canDo: ['Argue a viewpoint and interact fluently with native speakers', 'Work or study in English with confidence', 'Write clear, detailed text on a wide range of subjects'], hours: '120–150 hours from B1', course: 'Business English or Exam Preparation', courseSlug: 'business-english' },
  { code: 'C1', name: 'Advanced', canDo: ['Express ideas fluently without searching for words', 'Use English flexibly for academic and professional purposes', 'Understand demanding texts and subtle shades of meaning'], hours: '150–200 hours from B2', course: 'Exam Preparation or Business English', courseSlug: 'exam-preparation' },
];

export const schedule = {
  timezoneNote: 'All times are UK time (London). Emily teaches students in 32 countries — tell her your timezone when you book and she will confirm your exact local lesson time.',
  days: [
    { day: 'Monday', slots: ['08:00', '10:00', '12:00', '16:00', '18:00'] },
    { day: 'Tuesday', slots: ['08:00', '10:00', '14:00', '16:00', '19:30'] },
    { day: 'Wednesday', slots: ['10:00', '12:00', '14:00', '18:00'] },
    { day: 'Thursday', slots: ['08:00', '10:00', '16:00', '18:00', '19:30'] },
    { day: 'Friday', slots: ['08:00', '12:00', '14:00', '16:00'] },
    { day: 'Saturday', slots: ['09:00', '11:00'] },
    { day: 'Sunday', slots: [] as string[] },
  ],
};

export interface ResourceSheet {
  slug: string;
  title: string;
  level: string;
  description: string;
  sections: { heading: string; lines: string[] }[];
}

export const resources: ResourceSheet[] = [
  {
    slug: 'daily-phrases-cheat-sheet',
    title: '20 Daily Phrases Cheat Sheet',
    level: 'A2–B1',
    description: 'Twenty natural phrases native speakers use every day — with examples you can copy straight into your conversations.',
    sections: [
      { heading: 'Starting a conversation', lines: ['How is it going? — friendly greeting', 'Long time no see! — meeting someone again', 'What have you been up to? — asking about recent life'] },
      { heading: 'Agreeing & reacting', lines: ['That sounds great!', 'Exactly!', 'No way! — surprise', 'Fair enough. — accepting a point'] },
      { heading: 'Buying time to think', lines: ['Let me think…', 'Good question.', 'Well, it depends.', 'Give me a second.'] },
      { heading: 'Ending politely', lines: ['I should get going.', 'It was lovely talking to you.', "Let's catch up soon!", 'Take care!'] },
    ],
  },
  {
    slug: 'ielts-writing-structure',
    title: 'IELTS Writing Task 2 Structure Sheet',
    level: 'B2–C1',
    description: 'The four-paragraph structure Emily teaches for Band 7+ essays, with sentence starters for every part.',
    sections: [
      { heading: 'Paragraph 1 — Introduction', lines: ['Paraphrase the question in your own words.', 'Give your opinion clearly: "In my opinion…"', 'Roadmap: "This essay will discuss…"'] },
      { heading: 'Paragraphs 2 & 3 — Main ideas', lines: ['Topic sentence first, one idea only.', 'Explain, then give a real example.', 'Starters: "The main reason is…", "For instance…"'] },
      { heading: 'Paragraph 4 — Conclusion', lines: ['Restate your opinion with different words.', 'Summarise your two main points in one sentence.', 'Never add a new idea in the conclusion.'] },
      { heading: 'Five-minute check', lines: ['Articles (a / the) in place?', 'Every verb agrees with its subject?', 'At least three different sentence types?'] },
    ],
  },
  {
    slug: 'meeting-phrases-practice',
    title: 'Meeting Phrases Practice Sheet',
    level: 'B1–C1',
    description: 'The phrases for joining, disagreeing, clarifying and closing — the same toolkit from Emily’s Business English lessons.',
    sections: [
      { heading: 'Joining in', lines: ['If I could add something here…', 'Building on what was just said…', 'Can I come in here?'] },
      { heading: 'Disagreeing politely', lines: ['I see your point, but I wonder if…', 'That could work — my only concern is…', 'I am not sure I agree, because…'] },
      { heading: 'Clarifying', lines: ['Could you rephrase that?', 'Just to make sure I have understood…', 'Do you mean that…?'] },
      { heading: 'Closing', lines: ['So, to sum up, we have agreed to…', 'Let us come back to this next week.', 'Thanks, everyone — good meeting.'] },
    ],
  },
  {
    slug: 'kids-word-fun-sheet',
    title: 'Kids’ Word Fun Sheet',
    level: 'A1 (ages 7–12)',
    description: 'A colourful first-words sheet for young learners: animals, colours and feelings — made for printing and colouring.',
    sections: [
      { heading: 'Animals — say and colour', lines: ['a cat', 'a dog', 'a bird', 'a fish', 'a horse', 'an elephant'] },
      { heading: 'Colours', lines: ['red', 'blue', 'green', 'yellow', 'pink', 'purple'] },
      { heading: 'Feelings', lines: ['happy', 'sad', 'tired', 'hungry', 'excited', 'funny'] },
      { heading: 'Game for parents', lines: ['Point at something and ask: "What colour is it?"', 'Act out an animal — your child guesses in English!', 'Praise every try: effort first, accuracy later.'] },
    ],
  },
];

export const phraseOfWeek = {
  phrase: '“Piece of cake”',
  meaning: 'Something very easy. “The speaking test? Piece of cake — I practised every week.” Try using it in your next conversation!',
};

export const policies = [
  { title: 'Rescheduling a lesson', icon: 'calendar', text: 'Life happens. Reschedule any lesson free of charge with at least 12 hours notice — just message Emily and choose a new time together. Lessons cancelled with less than 12 hours notice are counted as taken, except in genuine emergencies, where Emily always tries to be fair.' },
  { title: 'Lesson packs & validity', icon: 'book', text: 'Packs of 5, 10 or 20 lessons are valid for 6 months from purchase, so there is no rush and no pressure. Packs can be shared between courses (for example General English plus Conversation) and between siblings for kids’ lessons.' },
  { title: 'Payment', icon: 'check', text: 'Your free trial needs no card and no payment. After the trial, single lessons and packs are paid securely online before lessons begin. You will always know the full price before you pay — there are no contracts, subscriptions or hidden fees.' },
  { title: 'Refunds', icon: 'doc', text: 'If you change your mind before your first paid lesson, you receive a full refund. After lessons have started, unused lessons in a pack can be refunded pro-rata within the first 30 days. Exam-course mock tests already taken are counted as used lessons.' },
  { title: 'Lateness & no-shows', icon: 'clock', text: 'Emily waits 15 minutes in the video call. If you are running late, send a quick message — lessons usually still run for the remaining time. A lesson with no message and no attendance after 15 minutes is counted as taken.' },
  { title: 'Young learners & safeguarding', icon: 'users', text: 'For students under 16, a parent or guardian books the lessons, receives the progress reports, and is welcome to sit in on any lesson. Emily holds an enhanced background check (mock detail for this demo site) and never contacts a young learner outside scheduled lesson channels.' },
];

export const resultsStats = [
  { value: 87, suffix: '%', label: 'of exam students hit their target band' },
  { value: 240, suffix: '+', label: 'IELTS & TOEFL candidates coached' },
  { value: 14, suffix: '', label: 'average weeks from B1 to B2' },
  { value: 1000, suffix: '+', label: 'students taught worldwide' },
];

export const segments = {
  kids: {
    title: 'English for Kids & Teens',
    script: 'Ages 7–17',
    intro: 'Friendly, game-based lessons that build real English — and real confidence — for school, exams and life. Parents are partners in every step.',
    points: [
      { title: 'Safe, always', text: 'A parent books, a parent receives progress reports, and a parent is welcome in every lesson. Emily holds an enhanced background check and lessons happen only on the agreed video platform.' },
      { title: 'Made for young learners', text: 'Shorter 25- or 40-minute options for younger children, games, songs and stories — grammar hidden inside activities kids actually enjoy.' },
      { title: 'School & exam support', text: 'Help with school English, Cambridge Young Learners and teen IELTS preparation, aligned with what your child is learning in class.' },
    ],
    faqs: [
      { q: 'How long are kids’ lessons?', a: 'Ages 7–10 learn best in 25-minute lessons; ages 11+ usually take 40 or 50 minutes. We decide together in the free trial, based on your child’s attention and goals.' },
      { q: 'Can I sit in on lessons?', a: 'Yes — parents are welcome in any lesson, and you receive a short written progress note after every 5 lessons. Many parents listen in for the first few lessons until their child feels confident.' },
      { q: 'Is it safe?', a: 'Safety comes first: parents book and pay, all communication goes through the parent, lessons run only on the agreed platform at agreed times, and Emily holds an enhanced background check (mock detail on this demo site).' },
      { q: 'What does my child need?', a: 'A tablet or computer, a quiet corner, and a notebook. Emily provides all materials digitally — no textbooks to buy.' },
    ],
  },
  adults: {
    title: 'English for Adults',
    script: 'Work, Exams & Life',
    intro: 'Efficient, grown-up lessons built around your real life: your job, your exam date, your move abroad. No children’s songs — unless you ask.',
    points: [
      { title: 'Built around your schedule', text: 'Early-morning, lunchtime and evening slots across time zones, with free rescheduling up to 12 hours before. Busy weeks happen; your pack waits for you for 6 months.' },
      { title: 'Your materials, your goals', text: 'We practise your real presentations, your real emails, your real exam. Homework is 10–20 minutes of useful practice, never busywork.' },
      { title: 'Honest progress tracking', text: 'A written progress report every 10 lessons: what improved, what is next, and how close you are to your goal — in CEFR levels, not vague praise.' },
    ],
    faqs: [
      { q: 'I am really busy — how many lessons do I need?', a: 'One 50-minute lesson a week plus short daily practice moves most adults one CEFR level in 4–6 months. For a fixed exam date we plan 2–3 lessons a week backwards from the test.' },
      { q: 'What if I miss a lesson?', a: 'Reschedule free with 12 hours notice. Your pack is valid for 6 months, so a busy month never wastes your money.' },
      { q: 'I feel embarrassed about my level. Is that normal?', a: 'Completely — most adult students say exactly that in their trial. Lessons are private, patient and judgement-free; mistakes are simply the material we work with.' },
      { q: 'Can lessons focus on my job?', a: 'Yes. Business English lessons use your real meetings, presentations and emails, so everything you learn is useful the same week.' },
    ],
  },
};

export const gbp = (n: number) => `£${n.toLocaleString('en-GB')}`;
