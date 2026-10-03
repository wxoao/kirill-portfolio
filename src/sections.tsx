import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { X } from 'lucide-react';
import { AnimatedText, ContactButton, FadeIn, LiveProjectButton } from './components';
import { marqueeImages, projects, services, type Project } from './data';
import { useLanguage } from './i18n';

export function MarqueeSection() {
  const { t } = useLanguage();
  const split = Math.ceil(marqueeImages.length / 2);
  return <section aria-label={t.marqueeLabel} className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"><div className="flex flex-col gap-3">{[marqueeImages.slice(0, split), marqueeImages.slice(split)].map((images, row) => <div key={row} className={`marquee-track relative flex w-max gap-3 ${row === 1 ? 'marquee-track-reverse' : ''}`} style={{ animationDuration: `${images.length * 4}s` }}>{[...images, ...images, ...images].map((src, index) => <img key={`${row}-${index}`} src={src} alt={index < images.length ? `${t.showcase} ${row * split + index + 1}` : ''} aria-hidden={index >= images.length ? true : undefined} loading="lazy" width={420} height={236.25} className="aspect-video w-[420px] shrink-0 rounded-2xl bg-[#161616] object-cover" />)}</div>)}</div></section>;
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
    <div className="about-content relative z-10 flex flex-col items-center gap-16 py-24 sm:gap-20 md:gap-24"><div className="about-copy flex flex-col items-center gap-10 sm:gap-14 md:gap-16"><FadeIn delay={0} y={40}><h2 className={sectionHeading} style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>{t.about}</h2></FadeIn><AnimatedText text={t.aboutText} /></div><FadeIn><ContactButton onClick={onContact} /></FadeIn></div>
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
  return <div className="project-stage sticky top-24 h-[85vh] md:top-32"><motion.article className="project-card relative rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8" style={{ top: `calc(${index} * var(--project-stack-step, 12px))`, scale: reduced ? 1 : scale }} aria-labelledby={`project-${index}`}>
    <div className="mb-6 flex items-start justify-between gap-4 sm:mb-8"><div className="flex min-w-0 flex-1 items-center gap-5 md:gap-8"><span aria-hidden="true" className="shrink-0 font-black leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>{String(index + 1).padStart(2, '0')}</span><div className="min-w-0"><p className="mb-1 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">{project.category}</p><h3 id={`project-${index}`} className="font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1.05rem, 2.2vw, 2.1rem)' }}>{name}</h3></div></div><LiveProjectButton onClick={() => onOpen(project)} /></div>
    <p className="mb-6 max-w-2xl font-light leading-relaxed opacity-60 sm:mb-8" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>{localize(project.summary)}</p>
    <div className="project-card-gallery">
      {[1, 2, 0].map((imageIndex) => <div key={imageIndex} className={`project-card-visual ${imageIndex === 0 ? 'project-card-cover' : ''}`}><img src={project.previewImages[imageIndex]} alt={`${name} — ${imageIndex === 0 ? t.mainVisual : imageIndex === 1 ? t.firstDetail : t.secondDetail}`} loading="lazy" /></div>)}
    </div>
  </motion.article></div>;
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { t, localize } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  const [displayedProject, setDisplayedProject] = useState<Project | null>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (project) {
      setDisplayedProject(project);
      element.classList.remove('is-closing');
      if (!element.open) element.showModal();
      element.scrollTop = 0;
      return;
    }
    if (!element.open) return;
    if (reduced) { element.close(); setDisplayedProject(null); return; }
    element.classList.add('is-closing');
    const timer = window.setTimeout(() => {
      element.close();
      element.classList.remove('is-closing');
      setDisplayedProject(null);
    }, 220);
    return () => window.clearTimeout(timer);
  }, [project, reduced]);
  const visibleProject = project ?? displayedProject;
  return <dialog ref={dialog} className="dialog project-dialog" aria-labelledby="project-dialog-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>{visibleProject && <><div className="mb-6 flex items-center justify-between gap-4"><div><p className="text-xs uppercase tracking-widest opacity-60">{visibleProject.category}</p><h2 id="project-dialog-title" className="text-2xl font-medium uppercase sm:text-3xl">{localize(visibleProject.name)}</h2></div><button aria-label={t.closeProject} onClick={onClose} className="shrink-0 rounded-full p-2 hover:bg-white/10"><X /></button></div><p className="mb-8 text-lg font-light">{localize(visibleProject.description)}</p><p className="mb-8 text-lg font-light"><span className="font-medium">{t.techStack}: </span>{visibleProject.stack}</p><div className="project-gallery">{visibleProject.images.map((src, index) => <div key={src} className="project-gallery-item"><img src={src} loading="lazy" alt={`${localize(visibleProject.name)} — ${t.visual} ${index + 1}`} className="rounded-2xl" /></div>)}</div><p className="mt-5 text-sm font-light">{visibleProject.url ? <a href={visibleProject.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 transition-opacity hover:opacity-70">{t.projectLink}</a> : <span className="opacity-60">{t.projectPreview}</span>}</p></>}</dialog>;
}

export function ProjectsSection() {
  const { t } = useLanguage();
  const section = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return <><section ref={section} id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"><FadeIn><h2 className={`${sectionHeading} mb-16 sm:mb-20 md:mb-28`} style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>{t.projects}</h2></FadeIn><div className="mx-auto max-w-[1600px]">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} totalCards={projects.length} progress={scrollYProgress} onOpen={setSelectedProject} />)}</div></section><ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} /></>;
}
