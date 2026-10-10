import { lazy, Suspense, useEffect, useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { EngineeringImpactSection } from './components/sections/EngineeringImpactSection';
import { useGsapReveals } from './hooks/useGsapReveals';
import { useLenis } from './hooks/useLenis';

const AboutSection = lazy(() => import('./components/sections/AboutSection').then((module) => ({ default: module.AboutSection })));
const ExperienceSection = lazy(() => import('./components/sections/ExperienceSection').then((module) => ({ default: module.ExperienceSection })));
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection').then((module) => ({ default: module.ProjectsSection })));
const SkillsSection = lazy(() => import('./components/sections/SkillsSection').then((module) => ({ default: module.SkillsSection })));
const CertificationsSection = lazy(() => import('./components/sections/CertificationsSection').then((module) => ({ default: module.CertificationsSection })));
const ActivitySection = lazy(() => import('./components/sections/ActivitySection').then((module) => ({ default: module.ActivitySection })));
const ContactSection = lazy(() => import('./components/sections/ContactSection').then((module) => ({ default: module.ContactSection })));

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const stored = window.localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return false;
  });

  useLenis();
  useGsapReveals();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-ink antialiased transition-colors duration-500 dark:bg-black dark:text-white">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <CustomCursor />
      <Navbar isDark={isDark} onThemeToggle={() => setIsDark((value) => !value)} />
      <main className="pb-28 lg:pb-0">
        <HeroSection />
        <EngineeringImpactSection />
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <ActivitySection />
          <ContactSection />
        </Suspense>
      </main>
      <footer className="px-4 pb-10 text-center text-sm text-muted dark:text-white/48">
        <p>© 2026 Kunj Maheshwari. Built with React, TypeScript, TailwindCSS, Framer Motion, GSAP, Lenis, and Three.js.</p>
      </footer>
    </div>
  );
}

export default App;
