import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { X } from 'lucide-react';
import { AnimatedText, ContactButton, FadeIn, LiveProjectButton } from './components';
import { marqueeImages, projects, services, type Project } from './data';
import { useLanguage } from './i18n';

export function MarqueeSection() {
  const { t } = useLanguage();
  const section = useRef<HTMLElement>(null);
  const row1 = useRef<HTMLDivElement>(null);
  const row2 = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!section.current || !row1.current || !row2.current) return;
      const sectionTop = section.current.getBoundingClientRect().top + window.scrollY;
      const offset = reduced ? 0 : (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      row1.current.style.transform = `translateX(${offset - 200}px)`;
      row2.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [reduced]);
  return <section ref={section} aria-label={t.marqueeLabel} className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"><div className="flex flex-col gap-3">{[marqueeImages.slice(0, 11), marqueeImages.slice(11)].map((images, row) => <div key={row} ref={row === 0 ? row1 : row2} className="relative flex w-max gap-3" style={{ left: -(images.length * 432), willChange: 'transform' }}>{[...images, ...images, ...images].map((src, index) => <img key={`${row}-${index}`} src={src} alt={index < images.length ? `${t.showcase} ${row === 0 ? index + 1 : index + 12}` : ''} aria-hidden={index >= images.length ? true : undefined} onError={event => { if (event.currentTarget.src !== marqueeImages[0]) event.currentTarget.src = marqueeImages[0]; }} loading="lazy" width={420} height={270} className="h-[270px] w-[420px] shrink-0 rounded-2xl bg-[#161616] object-cover" />)}</div>)}</div></section>;
}

const decorativeBase = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/';
const sectionHeading = 'hero-heading text-center font-black uppercase leading-none tracking-tight';

export function AboutSection({ onContact }: { onContact: () => void }) {
  const { t } = useLanguage();
  return <section id="about" className="relative flex min-h-screen items-center justify-center px-5 py-20 sm:px-8 md:px-10">
    <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="pointer-events-none absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"><img src={`${decorativeBase}moon_icon.11395d36.png`} alt="" loading="lazy" className="w-full" /></FadeIn>
    <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="pointer-events-none absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"><img src={`${decorativeBase}p59_1.4659672e.png`} alt="" loading="lazy" className="w-full" /></FadeIn>
    <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="pointer-events-none absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"><img src={`${decorativeBase}lego_icon-1.703bb594.png`} alt="" loading="lazy" className="w-full" /></FadeIn>
    <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="pointer-events-none absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"><img src={`${decorativeBase}Group_134-1.2e04f3ce.png`} alt="" loading="lazy" className="w-full" /></FadeIn>
    <div className="relative z-10 flex flex-col items-center gap-16 py-24 sm:gap-20 md:gap-24"><div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16"><FadeIn delay={0} y={40}><h2 className={sectionHeading} style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>{t.about}</h2></FadeIn><AnimatedText text={t.aboutText} /></div><FadeIn><ContactButton onClick={onContact} /></FadeIn></div>
  </section>;
}

export function ServicesSection() {
  const { t, localize } = useLanguage();
  return <section id="services" className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"><FadeIn><h2 className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>{t.services}</h2></FadeIn><div className="mx-auto max-w-5xl pb-10">{services.map((service, index) => <FadeIn key={service.name} delay={index * 0.1}><article className={`flex items-center gap-7 border-b border-[#0C0C0C]/15 py-8 sm:gap-12 sm:py-10 md:gap-20 md:py-12 ${index === 0 ? 'border-t' : ''}`}><span aria-hidden="true" className="w-[20%] shrink-0 font-black leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>{String(index + 1).padStart(2, '0')}</span><div><h3 className="mb-3 font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>{service.name}</h3><p className="max-w-2xl font-light leading-relaxed opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>{localize(service.description)}</p></div></article></FadeIn>)}</div></section>;
}

function ProjectCard({ project, index, totalCards, progress, onOpen }: { project: Project; index: number; totalCards: number; progress: MotionValue<number>; onOpen: (project: Project) => void }) {
  const { t, localize } = useLanguage();
  const name = localize(project.name);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);
  const reduced = useReducedMotion();
  return <div className="project-stage sticky top-24 h-[85vh] md:top-32"><motion.article className="project-card relative rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8" style={{ top: index * 28, scale: reduced ? 1 : scale }} aria-labelledby={`project-${index}`}>
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4 sm:mb-8"><div className="flex items-center gap-5 md:gap-8"><span aria-hidden="true" className="font-black leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>{String(index + 1).padStart(2, '0')}</span><div><p className="mb-1 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">{project.category}</p><h3 id={`project-${index}`} className="font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1.05rem, 2.2vw, 2.1rem)' }}>{name}</h3></div></div><LiveProjectButton onClick={() => onOpen(project)} /></div>
    <p className="mb-6 max-w-2xl font-light leading-relaxed opacity-60 sm:mb-8" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>{localize(project.summary)}</p>
    <div className="grid grid-cols-[2fr_3fr] gap-3 sm:gap-4"><div className="flex min-w-0 flex-col gap-3 sm:gap-4"><img src={project.images[0]} alt={`${name} — ${t.firstDetail}`} loading="lazy" className="project-image project-image-top w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]" style={{ height: 'clamp(130px, 16vw, 230px)' }} /><img src={project.images[1]} alt={`${name} — ${t.secondDetail}`} loading="lazy" className="project-image project-image-bottom w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]" style={{ height: 'clamp(160px, 22vw, 340px)' }} /></div><img src={project.images[2]} alt={`${name} — ${t.mainVisual}`} loading="lazy" className="project-image h-full min-h-0 w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]" /></div>
  </motion.article></div>;
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { t, localize } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (project) dialog.current?.showModal(); else dialog.current?.close(); }, [project]);
  return <dialog ref={dialog} className="dialog project-dialog" aria-labelledby="project-dialog-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>{project && <><div className="mb-6 flex items-center justify-between gap-4"><div><p className="text-xs uppercase tracking-widest opacity-60">{project.category}</p><h2 id="project-dialog-title" className="text-2xl font-medium uppercase sm:text-3xl">{localize(project.name)}</h2></div><button aria-label={t.closeProject} onClick={onClose} className="rounded-full p-2 hover:bg-white/10"><X /></button></div><p className="mb-8 text-lg font-light">{localize(project.description)}</p><p className="mb-8 text-lg font-light"><span className="font-medium">{t.techStack}: </span>{project.stack}</p><div className="grid gap-4">{project.images.map((src, index) => <img key={src} src={src} alt={`${localize(project.name)} — ${t.visual} ${index + 1}`} className="w-full rounded-2xl" />)}</div><p className="mt-5 text-sm font-light opacity-60">{t.projectPreview}</p></>}</dialog>;
}

export function ProjectsSection() {
  const { t } = useLanguage();
  const section = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return <><section ref={section} id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"><FadeIn><h2 className={`${sectionHeading} mb-16 sm:mb-20 md:mb-28`} style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>{t.projects}</h2></FadeIn><div className="mx-auto max-w-[1600px]">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} totalCards={projects.length} progress={scrollYProgress} onOpen={setSelectedProject} />)}</div></section><ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} /></>;
}
