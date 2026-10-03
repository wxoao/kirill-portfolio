import { useState } from 'react';
import { ContactButton, ContactDialog, FadeIn, Magnet } from './components';
import { AboutSection, MarqueeSection, ProjectsSection, ServicesSection } from './sections';

const portrait = 'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export function HeroSection({ onContact }: { onContact: () => void }) {
  return <section className="relative flex h-screen min-h-[600px] flex-col bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
    <FadeIn delay={0} y={-20} className="relative z-20"><nav aria-label="Main navigation" className="flex justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]">{[['About', '#about'], ['Price', '#services'], ['Projects', '#projects']].map(([label, href]) => <a key={label} href={href} className="transition-opacity duration-200 hover:opacity-70">{label}</a>)}<button onClick={onContact} className="uppercase tracking-wider transition-opacity duration-200 hover:opacity-70">Contact</button></nav></FadeIn>
    <div className="relative z-0 mt-6 overflow-hidden sm:mt-4 md:-mt-5"><FadeIn delay={0.15} y={40}><h1 className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">Hi, i&apos;m jack</h1></FadeIn></div>
    <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10"><FadeIn delay={0.35} y={20}><p className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>a 3d creator driven by crafting striking and unforgettable projects</p></FadeIn><FadeIn delay={0.5} y={20}><ContactButton onClick={onContact} /></FadeIn></div>
    <div className="hero-portrait absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"><FadeIn delay={0.6} y={30}><Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out"><img src={portrait} alt="Jack's stylized 3D portrait with dark sculptural hair" loading="eager" /></Magnet></FadeIn></div>
  </section>;
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return <main className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}><HeroSection onContact={() => setContactOpen(true)} /><MarqueeSection /><AboutSection onContact={() => setContactOpen(true)} /><ServicesSection /><ProjectsSection /><ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} /></main>;
}
