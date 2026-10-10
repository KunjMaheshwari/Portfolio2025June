import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiGithub, FiLinkedin, FiMail, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { FaJava } from 'react-icons/fa';
import { SiSelenium } from 'react-icons/si';
import { experience, profile } from './data/portfolio';
import { projectCatalogue } from './data/projectCatalogue';
import { MagneticButton } from './components/MagneticButton';
import { ProjectShowcase } from './components/ProjectShowcase';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function ThemeToggle({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="theme-button"
    >
      {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );
}

function Header({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#home" className="wordmark" onClick={close}>
          <span className="wordmark-mark">KM</span>
          <span>{profile.name}</span>
        </a>
        <div className="desktop-links">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <div className="nav-actions">
          <ThemeToggle isDark={isDark} onToggle={onToggle} />
          <button type="button" className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => <a key={link.href} href={link.href} onClick={close}>{link.label}<FiArrowUpRight /></a>)}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function SystemVisual() {
  return (
    <div className="system-visual" aria-label="Abstract diagram of an AI application system" role="img">
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-core"><span>AI</span><small>MODEL LAYER</small></div>
      <div className="visual-node node-api"><span>API</span><small>ROUTES</small></div>
      <div className="visual-node node-data"><span>DATA</span><small>STORAGE</small></div>
      <div className="visual-node node-test"><FiCheck /><small>TESTED</small></div>
      <div className="visual-label label-top">INPUT → REASONING → OUTPUT</div>
      <div className="visual-label label-bottom">OBSERVABLE · REPEATABLE · HUMAN</div>
    </div>
  );
}

function SectionIntro({ eyebrow, title, copy, dark = false }: { eyebrow: string; title: string; copy?: string; dark?: boolean }) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className={`section-intro ${dark ? 'section-intro-dark' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </motion.div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => window.localStorage.getItem('theme') === 'dark');
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="portfolio-page">
      <Header isDark={isDark} onToggle={() => setIsDark((value) => !value)} />
      <main>
        <section id="home" className="hero-section">
          <div className="hero-inner">
            <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="hero-copy">
              <p className="eyebrow">AI ENGINEERING · BACKEND SYSTEMS · SOFTWARE QUALITY</p>
              <h1>Build intelligent systems.<br /><em>Engineer them to last.</em></h1>
              <p className="hero-description">I’m Kunj Maheshwari, a software engineer focused on AI-powered applications, backend development, and reliable software systems. I build practical solutions with modern AI technologies, robust APIs, and automated testing.</p>
              <div className="hero-actions">
                <MagneticButton href="#work">Explore My Work <FiArrowUpRight /></MagneticButton>
                <MagneticButton href="#contact" variant="secondary">Get in Touch <FiArrowUpRight /></MagneticButton>
              </div>
            </motion.div>
            <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }}><SystemVisual /></motion.div>
          </div>
          <div className="hero-meta"><span>Based in {profile.location}</span><span>Available for thoughtful work <i /></span></div>
        </section>

        <section id="work" className="work-section page-section">
          <div className="content-width">
            <SectionIntro eyebrow="Selected work" title="Products built with a point of view." copy="A few projects where engineering decisions, useful interfaces, and real-world constraints meet." />
            <div className="project-list">{projectCatalogue.map((project, index) => <ProjectShowcase key={project.title} project={project} index={index} />)}</div>
          </div>
        </section>

        <section id="engineering" className="engineering-section page-section">
          <div className="content-width">
            <SectionIntro eyebrow="Engineering capabilities" title="The work behind the interface." copy="I move comfortably from a model-powered workflow to the API beneath it, then make sure the whole system can be trusted." />
            <div className="capability-grid">
              {[
                { number: '01', title: 'AI Engineering', text: 'Building practical AI applications around real user workflows, with attention to useful outputs, persistence, and product quality.' },
                { number: '02', title: 'Backend Development', text: 'Designing clear APIs and full-stack systems with Java, Node.js, Express, databases, and an eye for maintainable boundaries.' },
                { number: '03', title: 'Automation & Quality', text: 'Creating repeatable quality systems with Selenium, TestNG, Playwright, Page Object Model, and readable reporting.' },
              ].map((item, index) => (
                <motion.article
                  className="capability"
                  key={item.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><div className="capability-line" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="philosophy-section page-section">
          <div className="content-width philosophy-layout">
            <SectionIntro eyebrow="Engineering philosophy" title="Good software is a sequence of good decisions." copy="The process stays simple: understand the problem, make the system legible, build deliberately, and validate what matters." dark />
            <div className="philosophy-steps">
              {['Understand', 'Architect', 'Build', 'Validate'].map((step, index) => (
                <motion.div
                  className="philosophy-step"
                  key={step}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <span>0{index + 1}</span><h3>{step}</h3><p>{['Start with the people, constraints, and outcomes.', 'Choose boundaries that make change safer.', 'Turn the model into useful, maintainable software.', 'Use automation and feedback to earn confidence.'][index]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section page-section">
          <div className="content-width experience-layout">
            <SectionIntro eyebrow="Experience" title="Enterprise discipline, applied every day." copy="My current role is grounded in application testing and automation engineering—not a title inflated beyond the work." />
            <article className="experience-card">
              <div className="experience-heading"><div><p className="eyebrow">Aug 2025 — Present · Pune, Maharashtra</p><h3>{experience[0].title}</h3><p className="company">{experience[0].company}</p></div><div className="experience-icon"><FaJava /></div></div>
              <ul>{experience[0].bullets.map((bullet) => <li key={bullet}><FiCheck />{bullet}</li>)}</ul>
              <div className="experience-tools"><span><FaJava /> Java</span><span><SiSelenium /> Selenium</span><span>TestNG</span><span>Playwright</span><span>JDBC</span></div>
            </article>
          </div>
        </section>

        <section id="about" className="about-section page-section">
          <div className="content-width about-layout"><SectionIntro eyebrow="About" title="Curious about systems, serious about craft." /><div><p className="about-lede">{profile.summary}</p><a className="text-link" href={profile.resume} download>Download résumé <FiArrowUpRight /></a></div></div>
        </section>

        <section id="contact" className="contact-section page-section">
          <div className="content-width contact-inner"><p className="eyebrow">Start a conversation</p><h2>Have a useful problem<br /><em>worth solving?</em></h2><p>Whether you are building an AI product, improving a backend system, or making quality repeatable, I’d like to hear about it.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <FiArrowUpRight /></a><div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a><a href={profile.resume} download><FiMail /> Résumé</a></div></div>
        </section>
      </main>
      <footer className="site-footer"><span>© 2026 Kunj Maheshwari</span><span>AI systems · backend engineering · software quality</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
