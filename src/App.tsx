import { useState } from 'react';
import { ContactButton, ContactDialog, FadeIn, Magnet, MobileNavigation } from './components';
import { AboutSection, MarqueeSection, ProjectsSection, ServicesSection } from './sections';
import { LanguageToggle, useLanguage } from './i18n';

const portrait = `${import.meta.env.BASE_URL}images/kirill-portrait.png`;

export function HeroSection({ onContact }: { onContact: () => void }) {
  const { t } = useLanguage();
  return <section className="hero-section relative flex h-screen min-h-[600px] flex-col bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
    <FadeIn delay={0} y={-20} className="relative z-20 hidden md:block"><nav aria-label={t.navLabel} className="flex justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]">{[[t.navAbout, '#about'], [t.services, '#services'], [t.navProjects, '#projects']].map(([label, href]) => <a key={href} href={href} className="transition-opacity duration-200 hover:opacity-70">{label}</a>)}<button onClick={onContact} className="uppercase tracking-wider transition-opacity duration-200 hover:opacity-70">{t.navContact}</button><LanguageToggle /></nav></FadeIn>
    <MobileNavigation onContact={onContact} />
    <div className="hero-heading-wrap relative z-0 mt-6 overflow-hidden sm:mt-4 md:-mt-5"><FadeIn delay={0.15} y={40}><h1 aria-label={t.heroHeading} className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"><span className="hero-heading-intro">{t.heroHeading.slice(0, t.heroHeading.lastIndexOf(' '))}</span>{' '}<span className="hero-heading-name">{t.heroHeading.slice(t.heroHeading.lastIndexOf(' ') + 1)}</span></h1></FadeIn></div>
    <div className="hero-footer relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10"><FadeIn delay={0.35} y={20}><p className="hero-subtitle font-light uppercase leading-snug tracking-wide text-[#D7E2EA]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>{t.heroSubtitle}</p></FadeIn><FadeIn delay={0.5} y={20}><ContactButton onClick={onContact} /></FadeIn></div>
    <div className="hero-portrait absolute left-1/2 z-10 -translate-x-1/2"><FadeIn delay={0.6} y={30}><Magnet followAnywhere padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out"><div className="hero-portrait-frame"><img src={portrait} alt={t.portraitAlt} loading="eager" /></div></Magnet></FadeIn></div>
  </section>;
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return <><main id="top" className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}><HeroSection onContact={() => setContactOpen(true)} /><MarqueeSection /><AboutSection onContact={() => setContactOpen(true)} /><ServicesSection /><ProjectsSection /><ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} /></main><SiteFooter onContact={() => setContactOpen(true)} /></>;
}

function SiteFooter({ onContact }: { onContact: () => void }) {
  const { t } = useLanguage();
  return <footer className="site-footer border-t border-[#D7E2EA]/10 bg-[#0C0C0C] px-5 pt-12 text-sm text-[#D7E2EA]/55 sm:px-8 md:px-10 md:pt-16">
    <div className="mx-auto max-w-[1600px]">
      <div className="grid gap-10 pb-10 sm:grid-cols-3 sm:gap-8 md:pb-14">
        <div><a href="#top" className="inline-flex min-h-11 items-center text-2xl font-semibold tracking-tight text-[#D7E2EA]">wxoao<span className="text-[#A66AD4]">.</span></a><p className="mt-2 max-w-[240px] text-xs leading-relaxed tracking-wide">Product Creator &amp;<br />Full-Stack Developer</p></div>
        <div><h2 className="mb-3 text-xs uppercase tracking-[.15em] text-[#D7E2EA]/40">{t.contact}</h2><div className="flex flex-col items-start"><a href="mailto:thekarchicyt@gmail.com" className="footer-link">thekarchicyt@gmail.com</a><a href="https://t.me/wxoao" target="_blank" rel="noreferrer" className="footer-link">Telegram · @wxoao</a></div></div>
        <nav aria-label={t.footerNavigation}><h2 className="mb-3 text-xs uppercase tracking-[.15em] text-[#D7E2EA]/40">{t.footerNavigation}</h2><div className="flex flex-col items-start">{[[t.navAbout, '#about'], [t.services, '#services'], [t.navProjects, '#projects']].map(([label, href]) => <a key={href} href={href} className="footer-link">{label}</a>)}<button type="button" onClick={onContact} className="footer-link">{t.navContact}</button></div></nav>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-[#D7E2EA]/10 py-6 text-xs"><p>Powered by <a href="#top" className="text-[#D7E2EA]/75 transition-colors hover:text-[#D7E2EA]">wxoao</a></p><LanguageToggle /></div>
    </div>
  </footer>;
}
