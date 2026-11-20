// Motion + interactions: GSAP + Lenis reveals (transform/opacity only),
// mobile menu, FAQ accordion, counters, and mock form handling with
// per-field validation. Everything sits behind prefers-reduced-motion;
// content is visible by default if JS or GSAP fails.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const toastEl = document.getElementById('toast');
let toastTimer = 0;
function showToast(msg: string) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toastEl.classList.remove('show'), 4500);
}

if (!reduced) {
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  gsap.from('[data-hero]', { y: 18, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.07 });
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    gsap.from(el, {
      opacity: 0, y: 22, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count || 0);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target, duration: 1.4, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString('en-GB'); },
    });
  });
}

// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn?.addEventListener('click', () => {
  const open = mobileMenu?.classList.toggle('hidden') === false;
  menuBtn.setAttribute('aria-expanded', String(!!open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

// Meet Emily intro video dialog
const introDialog = document.getElementById('intro-dialog') as HTMLDialogElement | null;
const introVideo = document.getElementById('intro-video') as HTMLVideoElement | null;
if (introDialog) {
  document.querySelectorAll('[data-intro-open]').forEach((btn) => btn.addEventListener('click', () => {
    introDialog.showModal();
    introVideo?.play().catch(() => { /* user can press play manually */ });
  }));
  const closeIntro = () => { introVideo?.pause(); introDialog.close(); };
  introDialog.querySelectorAll('[data-intro-close]').forEach((btn) => btn.addEventListener('click', closeIntro));
  introDialog.addEventListener('click', (e) => { if (e.target === introDialog) closeIntro(); });
  introDialog.addEventListener('close', () => introVideo?.pause());
}

// FAQ accordion
document.querySelectorAll<HTMLElement>('[data-faq-btn]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const wrap = btn.closest('div');
    const panel = wrap?.querySelector<HTMLElement>('.faq-panel');
    if (!panel) return;
    const open = panel.dataset.open === 'true';
    panel.dataset.open = String(!open);
    btn.setAttribute('aria-expanded', String(!open));
  });
});

// ---- Forms: per-field validation + mock confirmation ----
type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
function fieldError(input: Field, msg: string) {
  const err = document.getElementById(`${input.id}-error`);
  if (err) err.textContent = msg;
  input.setAttribute('aria-invalid', 'true');
}
function fieldClear(input: Field) {
  const err = document.getElementById(`${input.id}-error`);
  if (err) err.textContent = '';
  input.removeAttribute('aria-invalid');
}
function check(input: Field | null, ok: boolean, msg: string) {
  if (!input) return false;
  if (!ok) { fieldError(input, msg); return false; }
  fieldClear(input); return true;
}
const vName = (i: Field | null) => check(i, !!i && i.value.trim().length >= 2, 'Please enter your name.');
const vEmail = (i: Field | null) => check(i, !!i && emailRe.test(i.value.trim()), 'Please enter a valid email address.');
const vSelect = (i: Field | null, msg: string) => check(i, !!i && i.value.trim() !== '', msg);
const vMsg = (i: Field | null) => check(i, !!i && i.value.trim().length >= 10, 'Please write a little more (at least 10 characters).');
const vDate = (i: Field | null) => check(i, !!i && i.value.trim() !== '', 'Please choose a preferred date.');
function wireBlur(id: string, fn: (i: Field | null) => boolean) {
  const el = document.getElementById(id) as Field | null;
  el?.addEventListener('blur', () => fn(el));
  return el;
}

// Book a free trial — mock confirmation with reference
const bf = document.getElementById('book-form') as HTMLFormElement | null;
if (bf) {
  const name = wireBlur('bk-name', vName);
  const email = wireBlur('bk-email', vEmail);
  const course = wireBlur('bk-course', (i) => vSelect(i, 'Please choose a course.'));
  const level = wireBlur('bk-level', (i) => vSelect(i, 'Please choose your current level.'));
  const date = wireBlur('bk-date', vDate);
  const time = wireBlur('bk-time', (i) => vSelect(i, 'Please choose a preferred time.'));
  bf.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = [vName(name), vEmail(email), vSelect(course, 'Please choose a course.'), vSelect(level, 'Please choose your current level.'), vDate(date), vSelect(time, 'Please choose a preferred time.')];
    if (ok.includes(false)) { (document.querySelector('[aria-invalid="true"]') as HTMLElement)?.focus(); return; }
    const ref = 'EC-' + Math.random().toString(36).slice(2, 7).toUpperCase();
    const refEl = document.getElementById('bk-ref');
    if (refEl) refEl.textContent = ref;
    const detail = document.getElementById('bk-detail');
    if (detail && name && course && date && time) {
      detail.textContent = `${name.value.trim()}, your free trial for ${course.value} is requested for ${date.value} at ${time.value}. Emily will confirm by email shortly — this is a demo booking, no real lesson has been scheduled.`;
    }
    bf.classList.add('hidden');
    document.getElementById('book-success')?.classList.remove('hidden');
    document.getElementById('book-success')?.focus();
    showToast('Free trial requested — see your confirmation below.');
  });
}

// Contact form — mock success
const cf = document.getElementById('contact-form') as HTMLFormElement | null;
if (cf) {
  const name = wireBlur('cf-name', vName);
  const email = wireBlur('cf-email', vEmail);
  const msg = wireBlur('cf-message', vMsg);
  cf.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = [vName(name), vEmail(email), vMsg(msg)];
    if (ok.includes(false)) { (document.querySelector('[aria-invalid="true"]') as HTMLElement)?.focus(); return; }
    cf.classList.add('hidden');
    document.getElementById('contact-success')?.classList.remove('hidden');
    showToast('Message sent — Emily replies within one working day.');
  });
}
