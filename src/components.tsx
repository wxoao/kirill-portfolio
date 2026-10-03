import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { X, Mail, Check, Copy, Send, Menu } from 'lucide-react';
import { LanguageToggle, useLanguage } from './i18n';

const MotionDiv = motion.create('div');

export function MobileNavigation({ onContact }: { onContact: () => void }) {
  const { t } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const close = (immediate = false) => {
    if (immediate) dialog.current?.close();
    setOpen(false);
  };

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open) {
      element.classList.remove('is-closing');
      if (!element.open) element.showModal();
      return;
    }
    if (!element.open) return;
    if (reduced) { element.close(); return; }
    element.classList.add('is-closing');
    const timer = window.setTimeout(() => element.close(), 220);
    return () => window.clearTimeout(timer);
  }, [open, reduced]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)');
    const handleResize = () => {
      if (desktop.matches) { dialog.current?.close(); setOpen(false); }
    };
    desktop.addEventListener('change', handleResize);
    return () => desktop.removeEventListener('change', handleResize);
  }, []);

  return <>
    <div className="mobile-navigation relative z-20 flex justify-end px-5 pt-4 md:hidden">
      <button type="button" className="mobile-menu-trigger" aria-label={t.openMenu} aria-haspopup="dialog" aria-controls="mobile-menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu size={28} /></button>
    </div>
    <dialog ref={dialog} id="mobile-menu" className="mobile-menu" aria-labelledby="mobile-menu-title" onCancel={event => { event.preventDefault(); close(); }} onClick={event => { if (event.target === event.currentTarget) close(); }}>
      <div className="mobile-menu-header"><h2 id="mobile-menu-title">{t.menuTitle}</h2><button type="button" aria-label={t.closeMenu} onClick={() => close()}><X size={28} /></button></div>
      <nav aria-label={t.navLabel}>
        {[[t.navAbout, '#about'], [t.services, '#services'], [t.navProjects, '#projects']].map(([label, href]) => <a key={href} href={href} onClick={() => close(true)}>{label}</a>)}
        <button type="button" onClick={() => { close(true); onContact(); }}>{t.navContact}</button>
        <LanguageToggle />
      </nav>
    </dialog>
  </>;
}

export function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, className = '' }: { children: ReactNode; delay?: number; duration?: number; x?: number; y?: number; className?: string }) {
  const reduced = useReducedMotion();
  return <MotionDiv className={className} initial={reduced ? false : { opacity: 0, x, y }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: '50px', amount: 0 }} transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}>{children}</MotionDiv>;
}

export function Magnet({ children, padding = 150, strength = 3, followAnywhere = false, activeTransition = 'transform 0.3s ease-out', inactiveTransition = 'transform 0.6s ease-in-out' }: { children: ReactNode; padding?: number; strength?: number; followAnywhere?: boolean; activeTransition?: string; inactiveTransition?: string }) {
  const container = useRef<HTMLDivElement>(null);
  const moving = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const reset = () => { if (moving.current) { moving.current.style.transition = inactiveTransition; moving.current.style.transform = 'translate3d(0,0,0)'; } };
    const move = (event: MouseEvent) => {
      if (!container.current || !moving.current) return;
      const bounds = container.current.getBoundingClientRect();
      const dx = event.clientX - bounds.left - bounds.width / 2;
      const dy = event.clientY - bounds.top - bounds.height / 2;
      const active = followAnywhere || Math.abs(dx) < bounds.width / 2 + padding && Math.abs(dy) < bounds.height / 2 + padding;
      if (!active) { reset(); return; }
      moving.current.style.transition = activeTransition;
      const x = followAnywhere ? Math.max(-80, Math.min(80, dx / strength)) : dx / strength;
      const y = followAnywhere ? Math.max(-80, Math.min(80, dy / strength)) : dy / strength;
      moving.current.style.transform = `translate3d(${x}px,${y}px,0)`;
    };
    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', reset);
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseleave', reset); };
  }, [padding, strength, followAnywhere, activeTransition, inactiveTransition, reduced]);
  return <div ref={container}><div ref={moving} style={{ willChange: 'transform' }}>{children}</div></div>;
}

function Character({ character, index, total, progress }: { character: string; index: number; total: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.2, 1]);
  return <span className="relative"><span aria-hidden="true" className="invisible">{character}</span><motion.span aria-hidden="true" className="absolute left-0 top-0" style={{ opacity }}>{character}</motion.span></span>;
}

export function AnimatedText({ text }: { text: string }) {
  const paragraph = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: paragraph, offset: ['start 0.8', 'end 0.2'] });
  const reduced = useReducedMotion();
  let characterIndex = 0;
  return <p ref={paragraph} aria-label={text} className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>{reduced ? text : text.split(' ').map((word, index) => <span key={index}><span className="inline-block">{[...word].map((character) => <Character key={characterIndex} character={character} index={characterIndex++} total={text.length} progress={scrollYProgress} />)}</span>{index < text.split(' ').length - 1 && <Character character=" " index={characterIndex++} total={text.length} progress={scrollYProgress} />}</span>)}</p>;
}

export function ContactButton({ onClick }: { onClick: () => void }) {
  const { t } = useLanguage();
  return <button onClick={onClick} className="contact-button action-hover shrink-0 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition duration-200 hover:brightness-125 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base">{t.contactButton}</button>;
}

export function LiveProjectButton({ onClick }: { onClick: () => void }) {
  const { t } = useLanguage();
  return <button onClick={onClick} className="action-hover shrink-0 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base">{t.liveProjectButton}</button>;
}

export function ContactDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);
  const reduced = useReducedMotion();
  const email = 'thekarchicyt@gmail.com';
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open) {
      element.classList.remove('is-closing');
      if (!element.open) element.showModal();
      return;
    }
    if (!element.open) return;
    if (reduced) { element.close(); return; }
    element.classList.add('is-closing');
    const timer = window.setTimeout(() => {
      element.close();
      element.classList.remove('is-closing');
    }, 220);
    return () => window.clearTimeout(timer);
  }, [open, reduced]);
  const copy = async () => { await navigator.clipboard.writeText(email!); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return <dialog ref={dialog} className="dialog contact-dialog" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }} aria-labelledby="contact-title"><div className="mb-8 flex items-center justify-between gap-8"><h2 id="contact-title" className="text-3xl font-semibold uppercase">{t.contactTitle}</h2><button aria-label={t.closeContact} onClick={onClose} className="rounded-full p-2 transition-colors hover:bg-white/10"><X /></button></div><p className="mb-8 text-lg font-light">{t.contactDescription}</p><a href={`mailto:${email}`} className="contact-button inline-flex items-center gap-3 rounded-full px-5 py-4 text-sm font-medium sm:px-8 sm:text-base"><Mail size={20} />{email}</a><a href="https://t.me/wxoao" target="_blank" rel="noreferrer" className="mt-4 flex w-fit items-center gap-3 rounded-full border border-[#D7E2EA]/50 px-8 py-4 transition-colors hover:bg-white/10"><Send size={20} />Telegram · @wxoao</a><button onClick={copy} className="mt-6 flex items-center gap-2 text-sm text-[#D7E2EA]/70">{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? t.emailCopied : t.copyEmail}</button></dialog>;
}
