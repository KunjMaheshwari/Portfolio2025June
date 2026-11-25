import { lazy, Suspense } from 'react';
import { FloatingDock } from './components/layout/FloatingDock';
import { Footer } from './components/layout/Footer';
import { ScrollProgressBar } from './components/layout/ScrollProgressBar';
import { SmoothScrollProvider } from './components/layout/SmoothScrollProvider';
import { CredibilityStrip } from './components/sections/CredibilityStrip';
import { Hero } from './components/sections/Hero';
import { DesktopCursor } from './components/ui/DesktopCursor';

const FeaturedProjects = lazy(() =>
  import('./components/sections/FeaturedProjects').then((m) => ({ default: m.FeaturedProjects })),
);
const About = lazy(() =>
  import('./components/sections/About').then((m) => ({ default: m.About })),
);
const SkillsSection = lazy(() =>
  import('./components/sections/SkillsSection').then((m) => ({ default: m.SkillsSection })),
);
const Experience = lazy(() =>
  import('./components/sections/Experience').then((m) => ({ default: m.Experience })),
);
const OpenSource = lazy(() =>
  import('./components/sections/OpenSource').then((m) => ({ default: m.OpenSource })),
);
const AchievementsAndCredentials = lazy(() =>
  import('./components/sections/AchievementsAndCredentials').then((m) => ({
    default: m.AchievementsAndCredentials,
  })),
);
const RecommendationsAndWriting = lazy(() =>
  import('./components/sections/RecommendationsAndWriting').then((m) => ({
    default: m.RecommendationsAndWriting,
  })),
);
const CodingProfiles = lazy(() =>
  import('./components/sections/CodingProfiles').then((m) => ({ default: m.CodingProfiles })),
);
const Contact = lazy(() =>
  import('./components/sections/Contact').then((m) => ({ default: m.Contact })),
);

function SectionFallback() {
  return <div className="min-h-[40vh] bg-canvas" aria-hidden="true" />;
}

function App() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-canvas text-ink-primary">
        {/* Top GPU-scaled scroll progress indicator */}
        <ScrollProgressBar />

        {/* Subtle desktop-only ambient cursor halo */}
        <DesktopCursor />

        {/* Subtle film-grain noise overlay */}
        <div
          aria-hidden="true"
          className="bg-noise pointer-events-none fixed inset-0 z-40 opacity-[0.028]"
        />

        {/* Skip link for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>

        <FloatingDock />

        <main id="main-content">
          <Hero />
          <CredibilityStrip />
          <Suspense fallback={<SectionFallback />}>
            <FeaturedProjects />
            <About />
            <SkillsSection />
            <Experience />
            <OpenSource />
            <AchievementsAndCredentials />
            <RecommendationsAndWriting />
            <CodingProfiles />
            <Contact />
          </Suspense>
        </main>

        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
