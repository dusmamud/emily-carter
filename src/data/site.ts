// Single mock-data file for the whole site. Swap this file for real
// content once the design is approved — nothing else needs to change.
export const site = {
  name: 'Emily Carter',
  role: 'English Teacher',
  url: 'https://emily-carter.pages.dev',
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
  { href: '/testimonials/', label: 'Testimonials' },
  { href: '/contact/', label: 'Contact' },
];

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
];

export const gbp = (n: number) => `£${n.toLocaleString('en-GB')}`;
