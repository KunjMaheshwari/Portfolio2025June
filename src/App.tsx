import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Code,
  GraduationCap,
  Briefcase,
  User,
  Send,
  Phone,
  Calendar,
  Award,
  Cloud,
  Palette
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Navbar effects on scroll
      setScrolled(window.scrollY > 30);

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Java', level: 100, category: 'Programming Language' },
    { name: 'JavaScript', level: 80, category: 'Frontend' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'MySQL', level: 90, category: 'Database' },
    { name: 'AWS', level: 50, category: 'Cloud' },
    { name: 'Node.js', level: 70, category: 'Backend' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'Selenium', level: 100, category: 'Testing' }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'Vellore Institute of Technology Bhopal',
      year: '2021-2025',
      gpa: '8.19/10.0',
      achievements: ['Ranked Top 5% in NPTEL', 'Core Member of TEDx VIT Bhopal', 'Research Paper on Finetuning of LLM Models using LoRA and QLoRA']
    },
    {
      degree: 'Higher Secondary Certificate',
      school: 'Mansarovar Academy',
      year: '2019-2021',
      gpa: '91%'
    },
    {
      degree: 'Senior Secondary Certificate',
      school: 'Vatsalya Senior Secondary School',
      year: '2018-2019',
      gpa: '92%'
    }
  ];

  const experience = [
    {
      title: 'Programmer Analyst Trainee',
      company: 'Cognizant Technology Solutions Corporation',
      period: 'August 2025 – Onwards',
      location: 'Pune, Maharashtra',
      responsibilities: [
        'Received hands-on training in Core Java, JDBC, and advanced Java concepts, consistently achieving top assessment scores.',
        'Developed and optimized enterprise-level Java applications, utilizing Java 8 features such as lambda expressions, functional interfaces, and stream APIs.',
        'Collaborated in agile teams to deliver high-quality software solutions, participating in daily stand-ups, sprint planning, and code reviews.',
        'Demonstrated strong problem-solving skills by debugging complex issues and implementing innovative solutions to improve system performance.',
        'Engaged in continuous learning and upskilling through workshops and technical sessions, ensuring alignment with the latest industry standards.'
      ]
    },
    {
      title: 'Analyst Trainee',
      company: 'Cognizant Technology Solutions Corporation',
      period: 'April 2025 – July 2025',
      location: 'Chennai, Tamil Nadu',
      responsibilities: [
        'Completed foundational training in software engineering principles, Java programming, and database management systems.',
        'Worked on mini-projects simulating real-world business scenarios, applying object-oriented design and database concepts.',
        'Participated in knowledge-sharing sessions and group discussions, enhancing communication and teamwork skills.',
        'Built RESTful APIs and integrated backend services using Java and MySQL as part of training assignments.',
        'Received recognition for adaptability and quick learning during the intensive onboarding program.'
      ]
    }
  ];

  // Animated warm brown/gold gradient background
  return (
    <div
      className={`min-h-screen relative overflow-x-hidden transition-colors duration-700 ${darkMode ? 'dark-mode' : 'light-mode'
        }`}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="fixed inset-0 -z-10"
        style={{ pointerEvents: 'none' }}
        animate={{
          background: darkMode
            ? [
              'linear-gradient(120deg, #2C1B15 0%, #4E342E 50%, #3E2723 100%)',
              'linear-gradient(120deg, #3E2723 0%, #8B5A2B 50%, #2C1B15 100%)',
              'linear-gradient(120deg, #4E342E 0%, #C19A6B 50%, #3E2723 100%)',
              'linear-gradient(120deg, #2C1B15 0%, #4E342E 50%, #3E2723 100%)'
            ]
            : [
              'linear-gradient(120deg, #F5F0E6 0%, #D2B48C 50%, #C19A6B 100%)',
              'linear-gradient(120deg, #F5F0E6 0%, #C19A6B 50%, #F5F0E6 100%)',
              'linear-gradient(120deg, #F5F0E6 0%, #8B5A2B 50%, #D2B48C 100%)',
              'linear-gradient(120deg, #F5F0E6 0%, #D2B48C 50%, #C19A6B 100%)'
            ]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 border-b border-brown-200/20 transition-all duration-500 ${scrolled
          ? (darkMode
            ? 'bg-[#2C1B15]/90 backdrop-blur-lg shadow-lg'
            : 'bg-[#F5F0E6]/90 backdrop-blur-lg shadow-lg')
          : (darkMode
            ? 'bg-[#2C1B15]/80 backdrop-blur-md'
            : 'bg-[#F5F0E6]/80 backdrop-blur-md')
          }`}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold font-serif drop-shadow-lg transition-colors duration-500"
              style={{ color: darkMode ? '#F5F0E6' : '#5C4033' }}>
              Portfolio
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'education', 'experience', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize px-2 transition-all duration-300 relative font-medium ${activeSection === section
                    ? (darkMode
                      ? 'text-[#D2B48C] border-b-2 border-[#D2B48C]'
                      : 'text-[#7B5E57] border-b-2 border-[#7B5E57]')
                    : (darkMode
                      ? 'text-[#F5F0E6]/80 hover:text-[#D2B48C]'
                      : 'text-[#5C4033]/80 hover:text-[#7B5E57]')
                    }`}
                  whileHover={{
                    scale: 1.08,
                    textShadow: darkMode
                      ? '0 0 8px #D2B48C, 0 0 16px #C19A6B'
                      : '0 0 8px #C19A6B, 0 0 16px #8B5A2B',
                    transition: { type: 'spring', stiffness: 300 }
                  }}
                >
                  {section}
                </motion.button>
              ))}
            </div>
            {/* Dark Mode Toggle */}
            <button
              className="ml-4 px-3 py-2 rounded-lg border font-medium transition-all duration-300 hover:shadow-lg hidden md:inline-block"
              style={{
                background: darkMode ? '#3E2723' : '#F5F0E6',
                color: darkMode ? '#F5F0E6' : '#5C4033',
                borderColor: darkMode ? '#8B5A2B' : '#D2B48C'
              }}
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              style={{ color: darkMode ? '#F5F0E6' : '#5C4033' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className={`md:hidden rounded-lg mb-4 p-4 transition-colors duration-500 ${darkMode
                  ? 'bg-[#3E2723]/90'
                  : 'bg-[#F5F0E6]/90'
                  }`}
              >
                {['home', 'about', 'skills', 'education', 'experience', 'contact'].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left py-2 px-4 capitalize transition-colors font-medium ${activeSection === section
                      ? (darkMode
                        ? 'text-[#D2B48C]'
                        : 'text-[#7B5E57]')
                      : (darkMode
                        ? 'text-[#F5F0E6]/80 hover:text-[#D2B48C]'
                        : 'text-[#5C4033]/80 hover:text-[#7B5E57]')
                      }`}
                    whileHover={{
                      scale: 1.06,
                      color: darkMode ? '#D2B48C' : '#C19A6B'
                    }}
                  >
                    {section}
                  </motion.button>
                ))}
                {/* Dark Mode Toggle Mobile */}
                <button
                  className="mt-4 w-full px-3 py-2 rounded-lg border font-medium transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: darkMode ? '#4E342E' : '#F5F0E6',
                    color: darkMode ? '#F5F0E6' : '#5C4033',
                    borderColor: darkMode ? '#8B5A2B' : '#D2B48C'
                  }}
                  onClick={() => setDarkMode((prev) => !prev)}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-700"
        style={{ touchAction: 'none' }}
      >
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{ zIndex: 1 }}
          animate={{
            background: darkMode
              ? [
                'linear-gradient(120deg, rgba(44,27,21,0.85) 0%, rgba(139,90,43,0.18) 100%)',
                'linear-gradient(120deg, rgba(62,39,35,0.88) 0%, rgba(209,186,140,0.16) 100%)',
                'linear-gradient(120deg, rgba(49,34,25,0.87) 0%, rgba(193,154,107,0.15) 100%)',
                'linear-gradient(120deg, rgba(44,27,21,0.85) 0%, rgba(139,90,43,0.18) 100%)'
              ]
              : [
                'linear-gradient(120deg, rgba(245,240,230,0.91) 0%, rgba(210,180,140,0.18) 100%)',
                'linear-gradient(120deg, rgba(245,240,230,0.93) 0%, rgba(193,154,107,0.16) 100%)',
                'linear-gradient(120deg, rgba(245,240,230,0.92) 0%, rgba(139,90,43,0.13) 100%)',
                'linear-gradient(120deg, rgba(245,240,230,0.91) 0%, rgba(210,180,140,0.18) 100%)'
              ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear'
          }}
        ></motion.div>
        {/* Flowing Gold Particles */}
        <HeroParticles darkMode={darkMode} />
        {/* Subtle Animated Waves */}
        <HeroWaves darkMode={darkMode} />
        {/* Softly Moving Decorative Lines/Circuits */}
        <HeroDecorativeLines darkMode={darkMode} />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1
              className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#5C4033]'
                }`}
            >
              Hi, I'm{' '}
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent animate-gradient-x"
                style={{
                  backgroundImage: darkMode
                    ? 'linear-gradient(90deg, #D2B48C, #C19A6B, #8B5A2B)'
                    : 'linear-gradient(90deg, #7B5E57, #D2B48C, #C19A6B)'
                }}
              >
                Kunj Maheshwari
              </span>
            </h1>
            {/* Tagline */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <p
                className={`text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide transition-colors duration-700 ${darkMode
                  ? 'text-[#FFD700]/90'
                  : 'text-[#8B5A2B]/90'
                  }`}
              >
                Turning Code into Impact &nbsp;
                <span className="inline-block mx-2 text-[#C19A6B]">|</span>
                Java &nbsp;
                <span className="inline-block mx-2 text-[#C19A6B]">|</span>
                MERN &nbsp;
                <span className="inline-block mx-2 text-[#C19A6B]">|</span>
                Automation
              </p>
            </motion.div>
            <motion.p
              className={`text-base sm:text-lg mb-8 max-w-3xl mx-auto transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/90' : 'text-[#7B5E57]/90'
                }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Programmer Analyst Trainee @Cognizant &nbsp;|&nbsp; AWS Certified Cloud Practitioner &nbsp;|&nbsp; Java and MERN Stack Developer
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#D2B48C] to-[#8B5A2B] text-[#5C4033] dark:text-[#F5F0E6] px-8 py-4 rounded-full font-semibold shadow-lg border-2 border-transparent transition-colors duration-300"
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 0 18px #D2B48C, 0 0 32px #C19A6B',
                  textShadow: '0 0 8px #C19A6B'
                }}
                transition={{ type: 'spring', stiffness: 280 }}
              >
                Get In Touch
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('about')}
                className="border-2 border-[#8B5A2B]/40 text-[#5C4033] dark:text-[#F5F0E6] px-8 py-4 rounded-full font-semibold hover:bg-[#D2B48C]/20 dark:hover:bg-[#3E2723]/30 transition-all duration-300"
                whileHover={{
                  scale: 1.06,
                  rotate: 3,
                  boxShadow: '0 0 8px #D2B48C'
                }}
                transition={{ type: 'spring', stiffness: 260 }}
              >
                Learn More
              </motion.button>
            </div>
            {/* Animated Scroll Hint */}
            <motion.div
              className="mt-12 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <motion.div
                animate={{
                  y: [0, 10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut'
                }}
                className="flex items-center justify-center"
              >
                <span
                  className={`text-3xl sm:text-4xl font-bold tracking-widest ${darkMode ? 'text-[#FFD700]/90' : 'text-[#8B5A2B]/90'
                    }`}
                >
                  ↓
                </span>
              </motion.div>
              <span
                className={`mt-1 text-base sm:text-lg tracking-wide font-medium ${darkMode ? 'text-[#FFD700]/80' : 'text-[#C19A6B]/80'
                  }`}
              >
                Explore My Work
              </span>
              <motion.div
                animate={{
                  y: [0, 10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                  delay: 1
                }}
                className="flex items-center justify-center"
              >
                <span
                  className={`text-3xl sm:text-4xl font-bold tracking-widest ${darkMode ? 'text-[#FFD700]/90' : 'text-[#8B5A2B]/90'
                    }`}
                >
                  ↓
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* 3D-like Floating Interactive Elements */}
          <HeroFloatingIcons darkMode={darkMode} />
        </div>
        {/* Parallax Floating Elements */}
        <ParallaxBubbles darkMode={darkMode} />
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
        variants={{
          hidden: {},
          visible: {}
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl font-bold mb-4 transition-colors duration-700 cursor-pointer"
              style={{
                color: darkMode ? '#F5F0E6' : '#3B2F2F'
              }}
              tabIndex={0}
            >
              <motion.span
                whileHover={{
                  scale: 1.05,
                  textShadow: darkMode
                    ? '0 0 8px #D2B48C, 0 0 16px #C19A6B'
                    : '0 0 8px #C19A6B, 0 0 16px #8B5A2B',
                  transition: { type: 'spring', stiffness: 250 }
                }}
              >
                About Me
              </motion.span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D2B48C] via-[#C19A6B] to-[#8B5A2B] mx-auto"></div>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className={`text-lg leading-relaxed transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/90' : 'text-[#3B2F2F]/90'}`}>
                I’m a passionate full-stack developer with a strong foundation in web technologies and a hunger to build meaningful digital solutions. My journey started with a love for solving problems and quickly grew into a commitment to creating clean, efficient, and user-friendly web applications.
              </p>
              <p className={`text-lg leading-relaxed transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/90' : 'text-[#3B2F2F]/90'}`}>
                Outside of coding, I enjoy exploring new tech trends, contributing to open-source projects, and helping peers in their learning journey. I believe technology is a powerful tool to create real-world impact, and I’m driven to keep learning, building, and growing every day.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-xl transition-all duration-300 group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 16px #C19A6B, 0 0 24px #8B5A2B'
                  }}
                >
                  <Code className="text-[#C19A6B] mb-3 drop-shadow-glow" size={32} />
                  <h3 className={`font-semibold mb-2 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>Clean Code</h3>
                  <p className={`text-sm transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/70' : 'text-[#7B5E57]/80'}`}>Writing maintainable, scalable, and efficient code that stands the test of time.</p>
                </motion.div>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-xl transition-all duration-300 group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 16px #D2B48C, 0 0 24px #C19A6B'
                  }}
                >
                  <Award className="text-[#D2B48C] mb-3 drop-shadow-glow" size={32} />
                  <h3 className={`font-semibold mb-2 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>Problem Solver</h3>
                  <p className={`text-sm transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/70' : 'text-[#7B5E57]/80'}`}>Tackling complex challenges with creative solutions and innovative thinking.</p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-[#C19A6B] to-[#8B5A2B] rounded-2xl p-1 glow-border">
                <div className="bg-slate-900 rounded-2xl p-8">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#D2B48C] to-[#8B5A2B] rounded-full mx-auto flex items-center justify-center glow-border">
                      <User size={64} className="text-[#F5F0E6]" />
                    </div>
                    <h3 className={`text-2xl font-bold transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>Kunj Maheshwari</h3>
                    <p className="text-[#C19A6B] font-semibold">Programmer Analyst Trainee</p>
                    <div className="flex justify-center space-x-4 pt-4">
                      <motion.a
                        href="https://github.com/KunjMaheshwari"
                        className={`transition-colors ${darkMode ? 'text-[#C19A6B]/70 hover:text-[#FFD700]' : 'text-[#8B5A2B]/70 hover:text-[#C19A6B]'}`}
                        whileHover={{ scale: 1.2, rotate: 8, color: '#FFD700' }}
                      >
                        <Github size={24} />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/kunjm"
                        className={`transition-colors ${darkMode ? 'text-[#C19A6B]/70 hover:text-[#FFD700]' : 'text-[#8B5A2B]/70 hover:text-[#C19A6B]'}`}
                        whileHover={{ scale: 1.2, rotate: -8, color: '#FFD700' }}
                      >
                        <Linkedin size={24} />
                      </motion.a>
                      <motion.a
                        href="mailto:kunjm@outlook.com"
                        className={`transition-colors ${darkMode ? 'text-[#C19A6B]/70 hover:text-[#FFD700]' : 'text-[#8B5A2B]/70 hover:text-[#C19A6B]'}`}
                        whileHover={{ scale: 1.2, color: '#FFD700' }}
                      >
                        <Mail size={24} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={{
          hidden: {},
          visible: {}
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl font-bold mb-4 transition-colors duration-700 cursor-pointer"
              style={{
                color: darkMode ? '#F5F0E6' : '#3B2F2F'
              }}
              tabIndex={0}
            >
              <motion.span
                whileHover={{
                  scale: 1.05,
                  textShadow: darkMode
                    ? '0 0 8px #D2B48C, 0 0 16px #C19A6B'
                    : '0 0 8px #C19A6B, 0 0 16px #8B5A2B',
                  transition: { type: 'spring', stiffness: 250 }
                }}
              >
                Skills & Technologies
              </motion.span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D2B48C] via-[#C19A6B] to-[#8B5A2B] mx-auto mb-6"></div>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/90' : 'text-[#3B2F2F]/90'}`}>
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                whileHover={{
                  scale: 1.06,
                  boxShadow: '0 0 16px #C19A6B, 0 0 32px #8B5A2B',
                  rotate: [0, 2, -2, 0]
                }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`font-semibold transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>{skill.name}</h3>
                  <span className="text-[#C19A6B] text-sm font-medium">{skill.level}%</span>
                </div>
                <div className={`w-full rounded-full h-2 mb-2 ${darkMode ? 'bg-[#4E342E]' : 'bg-[#C19A6B]/40'}`}>
                  <motion.div
                    className="bg-gradient-to-r from-[#D2B48C] via-[#C19A6B] to-[#8B5A2B] h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.1, delay: 0.12 * index }}
                  ></motion.div>
                </div>
                <p className={`text-xs uppercase tracking-wide transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/70' : 'text-[#7B5E57]/80'}`}>{skill.category}</p>
                {/* Glowing border effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    boxShadow: '0 0 0 0 #D2B48C, 0 0 0 0 #C19A6B'
                  }}
                  whileHover={{
                    boxShadow: '0 0 12px 2px #D2B48C, 0 0 24px 4px #C19A6B'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, visible: {} }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl font-bold mb-4 transition-colors duration-700 cursor-pointer"
              style={{
                color: darkMode ? '#F5F0E6' : '#3B2F2F'
              }}
              tabIndex={0}
            >
              <motion.span
                whileHover={{
                  scale: 1.05,
                  textShadow: darkMode
                    ? '0 0 8px #D2B48C, 0 0 16px #C19A6B'
                    : '0 0 8px #C19A6B, 0 0 16px #8B5A2B',
                  transition: { type: 'spring', stiffness: 250 }
                }}
              >
                Projects
              </motion.span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D2B48C] via-[#C19A6B] to-[#8B5A2B] mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "The Utopia Resort Restaurant Website",
                description: "A full-stack food delivery prototype built to modernize restaurant operations with dual UIs — customer ordering and admin management.",
                technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
                github: "https://github.com/KunjMaheshwari/The-Utopia-Resort",
                demo: "https://the-utopia-resort-restaurant.vercel.app/"
              },
              {
                title: "Medicare – Government Healthcare Schemes Portal",
                description: "A full-stack web platform designed to simplify access to Indian government healthcare schemes by improving accuracy and user experience.",
                technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
                github: "https://github.com/KunjMaheshwari/Medicare",
                demo: "https://medicare-five-rouge.vercel.app/"
              },
            ].map((proj, idx) => (
              <motion.div
                key={proj.title}
                className="relative group perspective-1000"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
              >
                {/* Card flip effect */}
                <motion.div
                  className="relative w-full h-full"
                  style={{ minHeight: '320px' }}
                >
                  <motion.div
                    className="absolute w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                  >
                    {/* Front */}
                    <div
                      className={`absolute w-full h-full rounded-xl bg-white/10 border border-white/10 shadow-lg p-8 flex flex-col justify-between transition-all duration-300
                        ${darkMode ? 'backdrop-blur-md' : 'backdrop-blur-sm'}
                        group-hover:scale-105 group-hover:shadow-[0_0_32px_#FFD700,0_0_32px_#C19A6B]`}
                      style={{
                        backfaceVisibility: 'hidden',
                        boxShadow: '0 0 0 0 #D2B48C'
                      }}
                    >
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>{proj.title}</h3>
                        <p className={`text-base mb-4 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/80' : 'text-[#3B2F2F]/80'}`}>{proj.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {proj.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-[#D2B48C]/20 text-xs font-semibold rounded transition-colors duration-300"
                              style={{ color: darkMode ? '#FFD700' : '#8B5A2B' }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-4 pt-4">
                        <motion.a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 rounded-lg border border-[#C19A6B] text-[#C19A6B] hover:bg-[#C19A6B]/10 transition-all"
                          whileHover={{
                            scale: 1.10,
                            boxShadow: '0 0 10px #C19A6B'
                          }}
                        >
                          <Github size={18} className="mr-2" />
                          GitHub
                        </motion.a>
                        <motion.a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 rounded-lg border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 transition-all"
                          whileHover={{
                            scale: 1.10,
                            boxShadow: '0 0 10px #FFD700'
                          }}
                        >
                          <ExternalLink size={18} className="mr-2" />
                          Live Demo
                        </motion.a>
                      </div>
                    </div>
                    {/* Back */}
                    <div
                      className={`absolute w-full h-full rounded-xl bg-gradient-to-br from-[#C19A6B] to-[#8B5A2B] flex items-center justify-center text-center p-8 [transform:rotateY(180deg)] transition-all duration-300`}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div>
                        <h3 className={`text-2xl font-bold mb-4 text-[#F5F0E6]`}>{proj.title}</h3>
                        <p className="text-lg text-[#F5F0E6]/90 mb-4">{proj.description}</p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                          {proj.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-[#F5F0E6]/20 text-xs font-semibold rounded text-[#FFD700]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-center space-x-4">
                          <a href={proj.github} target="_blank" rel="noopener noreferrer" className="underline text-[#F5F0E6] font-medium hover:text-[#FFD700] transition">
                            GitHub
                          </a>
                          <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="underline text-[#FFD700] font-medium hover:text-[#F5F0E6] transition">
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        id="certifications"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, visible: {} }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl font-bold mb-4 transition-colors duration-700 cursor-pointer"
              style={{
                color: darkMode ? '#F5F0E6' : '#3B2F2F'
              }}
              tabIndex={0}
            >
              <motion.span
                whileHover={{
                  scale: 1.05,
                  textShadow: darkMode
                    ? '0 0 8px #D2B48C, 0 0 16px #C19A6B'
                    : '0 0 8px #C19A6B, 0 0 16px #8B5A2B',
                  transition: { type: 'spring', stiffness: 250 }
                }}
              >
                Certifications
              </motion.span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D2B48C] via-[#C19A6B] to-[#8B5A2B] mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "AWS Certified Cloud Practitioner",
                org: "Amazon Web Services",
                iconColor: "#FFD700",
                link: "https://drive.google.com/file/d/1VHI9H8izuWi6Du2K7tm89QFF_ekC13vy/view"
              },
              {
                title: "Google IT Support Professional",
                org: "Coursera",
                iconColor: "#C19A6B",
                link: "https://www.coursera.org/account/accomplishments/professional-cert/MP6T6Y6ZC2CE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
              }
            ].map((cert, idx) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
              >
                <motion.div
                  className="flex items-center bg-white/10 rounded-xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg"
                  whileHover={{
                    scale: 1.06,
                    boxShadow: `0 0 24px ${cert.iconColor}, 0 0 36px #FFD700`
                  }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 12, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 2.4, delay: idx * 0.3 }}
                    className="mr-6"
                  >
                    <Award size={54} className="drop-shadow-glow" style={{ color: cert.iconColor, filter: "drop-shadow(0 0 12px #FFD700)" }} />
                  </motion.div>
                  <div>
                    <h3 className={`text-xl font-bold mb-1 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>{cert.title}</h3>
                    <p className={`text-base font-medium transition-colors duration-700 ${darkMode ? 'text-[#FFD700]/80' : 'text-[#8B5A2B]/80'}`}>{cert.org}</p>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Section */}
      <motion.section
        id="blog"
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={{ hidden: {}, visible: {} }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl font-bold mb-4 transition-colors duration-700 cursor-pointer"
              style={{
                color: darkMode ? '#F5F0E6' : '#3B2F2F'
              }}
              tabIndex={0}
            >
              <motion.span
                whileHover={{
                  scale: 1.05,
                  textShadow: darkMode
                    ? '0 0 8px #D2B48C, 0 0 16px #C19A6B'
                    : '0 0 8px #C19A6B, 0 0 16px #8B5A2B',
                  transition: { type: 'spring', stiffness: 250 }
                }}
              >
                Blog
              </motion.span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D2B48C] via-[#C19A6B] to-[#8B5A2B] mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "CRAFT Framework Explained: From Folder Structure to Test Execution",
                preview: "Understand the business components, datasheet, page objects, and execution flow of CRAFT with real examples and visuals.",
                link: "https://medium.com/@KunjMaheshwari/craft-framework-explained-from-folder-structure-to-test-execution-8704a71a7187"
              },
              {
                title: "My Cognizant Gen C Interview Experience: A Journey of Growth and Achievement",
                preview: "Securing the Cognizant Gen C role was an exciting and rewarding journey that tested my skills, determination, and preparation.",
                link: "https://medium.com/@KunjMaheshwari/my-cognizant-gen-c-interview-experience-a-journey-of-growth-and-achievement-f59b7abef35b"
              }
            ].map((blog, idx) => (
              <motion.a
                key={blog.title}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group perspective-1000"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ minHeight: '220px' }}
                >
                  <motion.div
                    className="absolute w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                  >
                    {/* Blog Card Front */}
                    <div
                      className={`absolute w-full h-full rounded-xl bg-white/10 border border-white/10 shadow-lg p-6 flex flex-col justify-between transition-all duration-300
                        ${darkMode ? 'backdrop-blur-md' : 'backdrop-blur-sm'}
                        group-hover:scale-105 group-hover:shadow-[0_0_24px_#FFD700,0_0_24px_#C19A6B]`}
                      style={{
                        backfaceVisibility: 'hidden'
                      }}
                    >
                      <h3 className={`text-lg font-bold mb-2 transition-colors duration-700 ${darkMode ? 'text-[#FFD700]' : 'text-[#8B5A2B]'}`}>{blog.title}</h3>
                      <p className={`text-base transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/80' : 'text-[#3B2F2F]/80'}`}>{blog.preview.slice(0, 70)}...</p>
                    </div>
                    {/* Blog Card Back */}
                    <div
                      className={`absolute w-full h-full rounded-xl bg-gradient-to-br from-[#C19A6B] to-[#8B5A2B] flex items-center justify-center text-center p-6 [transform:rotateY(180deg)] transition-all duration-300`}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div>
                        <h3 className={`text-lg font-bold mb-2 text-[#F5F0E6]`}>{blog.title}</h3>
                        <p className="text-base text-[#F5F0E6]/90 mb-3">{blog.preview}</p>
                        <span className="underline text-[#FFD700] font-medium">Read on Medium</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        id="testimonial"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl font-bold mb-4 transition-colors duration-700 cursor-pointer"
              style={{
                color: darkMode ? '#F5F0E6' : '#3B2F2F'
              }}
              tabIndex={0}
            >
              <motion.span
                whileHover={{
                  scale: 1.05,
                  textShadow: darkMode
                    ? '0 0 8px #D2B48C, 0 0 16px #C19A6B'
                    : '0 0 8px #C19A6B, 0 0 16px #8B5A2B',
                  transition: { type: 'spring', stiffness: 250 }
                }}
              >
                Testimonial
              </motion.span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D2B48C] via-[#C19A6B] to-[#8B5A2B] mx-auto mb-10"></div>
          </motion.div>
          <motion.div
            className="bg-white/10 rounded-xl p-10 border border-white/10 mx-auto max-w-xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className={`text-xl italic font-serif mb-6 transition-colors duration-700 ${darkMode ? 'text-[#FFD700]/90' : 'text-[#8B5A2B]/90'}`}>
              "Kunj quickly learn, work proactively with sincerity in both functional and automation testing. He possess a keen eye for detail, ensuring thorough functional test coverage, and a strong ability to develop and execute automation scripts efficiently. His contributions significantly enhanced our team's testing capabilities and product quality."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D2B48C] to-[#8B5A2B] flex items-center justify-center mb-2">
                <User size={32} className="text-[#F5F0E6]" />
              </div>
              <div>
                <div className={`font-bold text-lg transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>Sayan Ghosh</div>
                <div className="font-medium text-[#C19A6B]">Test Lead and Senior Associate, Cognizant</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* GitHub Stats Section */}
      <motion.section
        id="github-stats"
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={{ hidden: {}, visible: {} }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl font-bold mb-4 transition-colors duration-700 cursor-pointer"
              style={{
                color: darkMode ? '#F5F0E6' : '#3B2F2F'
              }}
              tabIndex={0}
            >
              <motion.span
                whileHover={{
                  scale: 1.05,
                  textShadow: darkMode
                    ? '0 0 8px #D2B48C, 0 0 16px #C19A6B'
                    : '0 0 8px #C19A6B, 0 0 16px #8B5A2B',
                  transition: { type: 'spring', stiffness: 250 }
                }}
              >
                GitHub Stats
              </motion.span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D2B48C] via-[#C19A6B] to-[#8B5A2B] mx-auto"></div>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.14 }}
              className="overflow-x-auto"
            >
              <img
                src="https://github-readme-stats.vercel.app/api?username=KunjMaheshwari&show_icons=true&theme=default&bg_color=00000000&title_color=D2B48C&icon_color=FFD700&text_color=8B5A2B"
                alt="GitHub Stats"
                className="rounded-lg shadow-lg border border-[#D2B48C]/30"
                style={{ maxWidth: 400 }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="overflow-x-auto"
            >
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=KunjMaheshwari&layout=compact&theme=default&bg_color=00000000&title_color=D2B48C&text_color=8B5A2B"
                alt="Top Languages"
                className="rounded-lg shadow-lg border border-[#C19A6B]/30"
                style={{ maxWidth: 400 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="education"
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {}
        }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl font-bold mb-4 transition-colors duration-700 cursor-pointer"
              style={{
                color: darkMode ? '#F5F0E6' : '#3B2F2F'
              }}
              tabIndex={0}
            >
              <motion.span
                whileHover={{
                  scale: 1.05,
                  textShadow: darkMode
                    ? '0 0 8px #D2B48C, 0 0 16px #C19A6B'
                    : '0 0 8px #C19A6B, 0 0 16px #8B5A2B',
                  transition: { type: 'spring', stiffness: 250 }
                }}
              >
                Education
              </motion.span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D2B48C] via-[#C19A6B] to-[#8B5A2B] mx-auto"></div>
          </motion.div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.13 * index }}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 glow-border"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 0 16px #C19A6B, 0 0 32px #8B5A2B'
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>{edu.degree}</h3>
                      <p className="text-[#C19A6B] font-semibold">{edu.school}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className={`flex items-center mb-1 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/70' : 'text-[#7B5E57]/80'}`}>
                        <Calendar size={16} className="mr-2" />
                        {edu.year}
                      </div>
                      <div className={`flex items-center transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/70' : 'text-[#7B5E57]/80'}`}>
                        <GraduationCap size={16} className="mr-2" />
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                  {edu && edu.achievements && edu.achievements.length > 0 && (
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className={`flex items-start transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/90' : 'text-[#3B2F2F]/90'}`}>
                          <Award size={16} className="text-[#FFD700] mr-3 mt-1 flex-shrink-0" />
                          <p>{achievement}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {}
        }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl font-bold mb-4 transition-colors duration-700 cursor-pointer"
              style={{
                color: darkMode ? '#F5F0E6' : '#3B2F2F'
              }}
              tabIndex={0}
            >
              <motion.span
                whileHover={{
                  scale: 1.05,
                  textShadow: darkMode
                    ? '0 0 8px #D2B48C, 0 0 16px #C19A6B'
                    : '0 0 8px #C19A6B, 0 0 16px #8B5A2B',
                  transition: { type: 'spring', stiffness: 250 }
                }}
              >
                Work Experience
              </motion.span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D2B48C] via-[#C19A6B] to-[#8B5A2B] mx-auto"></div>
          </motion.div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.13 * index }}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 glow-border"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 0 16px #C19A6B, 0 0 32px #8B5A2B'
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>{exp.title}</h3>
                      <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <div className={`flex items-center mb-2 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/70' : 'text-[#7B5E57]/80'}`}>
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className={`flex items-center transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/70' : 'text-[#7B5E57]/80'}`}>
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <motion.div
                        key={respIndex}
                        className={`flex items-start transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/90' : 'text-[#3B2F2F]/90'} cursor-pointer`}
                        whileHover={{
                          scale: 1.035,
                          x: 8,
                          textShadow: darkMode
                            ? '0 0 8px #D2B48C'
                            : '0 0 8px #8B5A2B',
                          transition: { type: 'spring', stiffness: 250 }
                        }}
                      >
                        <Briefcase size={16} className="text-[#FFD700] mr-3 mt-1 flex-shrink-0" />
                        {responsibility}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.17 }}
        variants={{
          hidden: {},
          visible: {}
        }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl font-bold mb-4 transition-colors duration-700 cursor-pointer"
              style={{
                color: darkMode ? '#F5F0E6' : '#3B2F2F'
              }}
              tabIndex={0}
            >
              <motion.span
                whileHover={{
                  scale: 1.05,
                  textShadow: darkMode
                    ? '0 0 8px #D2B48C, 0 0 16px #C19A6B'
                    : '0 0 8px #C19A6B, 0 0 16px #8B5A2B',
                  transition: { type: 'spring', stiffness: 250 }
                }}
              >
                Get In Touch
              </motion.span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D2B48C] via-[#C19A6B] to-[#8B5A2B] mx-auto mb-6"></div>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/90' : 'text-[#3B2F2F]/90'}`}>
              Ready to bring your ideas to life? Let's discuss how we can work together.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 glow-border"
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 16px #C19A6B, 0 0 32px #8B5A2B'
                }}
              >
                <h3 className={`text-2xl font-bold mb-6 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="text-[#C19A6B] mr-4" size={24} />
                    <div>
                      <p className={`font-semibold transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>Email</p>
                      <p className={`transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/70' : 'text-[#7B5E57]/80'}`}>kunjm@outlook.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-[#C19A6B] mr-4" size={24} />
                    <div>
                      <p className={`font-semibold transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>Phone</p>
                      <p className={`transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/70' : 'text-[#7B5E57]/80'}`}>+91 623 208 4444</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-[#C19A6B] mr-4" size={24} />
                    <div>
                      <p className={`font-semibold transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>Location</p>
                      <p className={`transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/70' : 'text-[#7B5E57]/80'}`}>Pune, Maharashtra</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://github.com/KunjMaheshwari"
                      className="bg-white/10 p-3 rounded-full hover:bg-[#C19A6B]/80 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 8, backgroundColor: '#FFD700' }}
                    >
                      <Github size={20} className="text-[#8B5A2B]" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/kunjm"
                      className="bg-white/10 p-3 rounded-full hover:bg-[#C19A6B]/80 transition-colors"
                      whileHover={{ scale: 1.2, rotate: -8, backgroundColor: '#FFD700' }}
                    >
                      <Linkedin size={20} className="text-[#8B5A2B]" />
                    </motion.a>
                    <motion.a
                      href="mailto:kunjm@outlook.com"
                      className="bg-white/10 p-3 rounded-full hover:bg-[#C19A6B]/80 transition-colors"
                      whileHover={{ scale: 1.2, backgroundColor: '#FFD700' }}
                    >
                      <Mail size={20} className="text-[#8B5A2B]" />
                    </motion.a>
                  </div>
                </div>
                <div className="mt-6">
                  <motion.a
                    href="https://drive.google.com/file/d/1atyik0M6DVDg3aZirO70QKOgpBhUDCsU/view?usp=sharing"
                    className="inline-flex items-center bg-gradient-to-r from-[#D2B48C] to-[#8B5A2B] text-[#5C4033] dark:text-[#F5F0E6] px-6 py-3 rounded-full font-semibold border-2 border-transparent"
                    whileHover={{
                      scale: 1.08,
                      boxShadow: '0 0 16px #FFD700, 0 0 32px #C19A6B'
                    }}
                  >
                    <Download size={20} className="mr-2" />
                    Download Resume
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'}`}>Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className={`block mb-2 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/90' : 'text-[#3B2F2F]/90'}`}>Name</label>
                  <input
                    type="text"
                    className={`w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'} placeholder:${darkMode ? '[#F5F0E6]/60' : '[#7B5E57]/60'} focus:outline-none focus:border-blue-500`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className={`block mb-2 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/90' : 'text-[#3B2F2F]/90'}`}>Email</label>
                  <input
                    type="email"
                    className={`w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'} placeholder:${darkMode ? '[#F5F0E6]/60' : '[#7B5E57]/60'} focus:outline-none focus:border-blue-500`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className={`block mb-2 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/90' : 'text-[#3B2F2F]/90'}`}>Subject</label>
                  <input
                    type="text"
                    className={`w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'} placeholder:${darkMode ? '[#F5F0E6]/60' : '[#7B5E57]/60'} focus:outline-none focus:border-blue-500`}
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className={`block mb-2 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/90' : 'text-[#3B2F2F]/90'}`}>Message</label>
                  <textarea
                    rows={5}
                    className={`w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]' : 'text-[#3B2F2F]'} placeholder:${darkMode ? '[#F5F0E6]/60' : '[#7B5E57]/60'} focus:outline-none focus:border-blue-500 resize-none`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D2B48C] to-[#8B5A2B] text-[#5C4033] dark:text-[#F5F0E6] py-3 rounded-lg font-semibold hover:from-[#FFD700] hover:to-[#C19A6B] transition-all duration-300 flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 12px #FFD700, 0 0 16px #C19A6B'
                  }}
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mx-auto w-2/3 md:w-1/2 border-b-2 border-t-2 rounded-xl border-gradient-glow-warm mb-4"></div>
          <motion.p
            className={`font-semibold text-lg shimmer-text transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/80' : 'text-[#3B2F2F]/80'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            © 2026 Portfolio Website
          </motion.p>
          <motion.p
            className={`text-sm mt-2 shimmer-text transition-colors duration-700 ${darkMode ? 'text-[#F5F0E6]/60' : 'text-[#7B5E57]/70'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Designed and developed by Kunj Maheshwari
          </motion.p>
          <div className="mx-auto w-2/3 md:w-1/2 border-b-2 border-t-2 rounded-xl border-gradient-glow-warm mt-4"></div>
        </div>
      </footer>
    </div>
  );
}

// End of App function

// Animated golden particles background for hero
function HeroParticles({ darkMode }: { darkMode?: boolean }) {
  // Simple CSS-based flowing particles animation using span elements
  // For performance, only a few particles
  const numParticles = 18;
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
      style={{ overflow: 'hidden' }}
    >
      {[...Array(numParticles)].map((_, i) => {
        // Randomize starting position, duration, and size
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = 8 + Math.random() * 16;
        const duration = 8 + Math.random() * 10;
        const delay = Math.random() * 8;
        // Golden color stops
        const color = darkMode
          ? 'rgba(255, 215, 0, 0.21)'
          : 'rgba(210, 180, 140, 0.13)';
        return (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle at 60% 40%, ${color} 0%, transparent 80%)`,
              opacity: 0.7 + Math.random() * 0.3,
              filter: 'blur(1.5px)',
              animation: `hero-particle-flow ${duration}s linear infinite`,
              animationDelay: `${delay}s`
            }}
          />
        );
      })}
      <style>
        {`
        @keyframes hero-particle-flow {
          0% {
            transform: translateY(0px) scale(1);
            opacity: 0.8;
          }
          30% {
            opacity: 1;
          }
          60% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(-80px) scale(1.1);
            opacity: 0.7;
          }
        }
        `}
      </style>
    </div>
  );
}

// Subtle animated background waves for hero
function HeroWaves({ darkMode }: { darkMode?: boolean }) {
  // Animate two layered gradients for a flowing effect
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '180px',
          opacity: darkMode ? 0.22 : 0.16,
          zIndex: 0,
          background:
            darkMode
              ? 'linear-gradient(120deg, rgba(210,180,140,0.15) 0%, rgba(193,154,107,0.15) 80%, transparent 100%)'
              : 'linear-gradient(120deg, rgba(245,240,230,0.12) 0%, rgba(210,180,140,0.18) 80%, transparent 100%)',
          maskImage: 'linear-gradient(to top, black 60%, transparent 100%)'
        }}
      >
        <motion.div
          style={{
            width: '120%',
            height: '100%',
            position: 'absolute',
            left: '-10%',
            top: 0,
            zIndex: 0
          }}
          animate={{
            x: [0, 30, -30, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 16,
            ease: 'easeInOut'
          }}
        >
          <svg width="100%" height="180" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120 Q 360 180 720 120 T 1440 120 V180 H0Z"
              fill={darkMode ? "#FFD70033" : "#D2B48C33"}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

// Floating 3D-like icons (Code, Cloud, Design) around hero text
function HeroFloatingIcons({ darkMode }: { darkMode?: boolean }) {
  // Responsive positions
  const iconConfigs = [
    {
      icon: <Code size={40} className="drop-shadow-glow" />,
      color: darkMode ? "#FFD700" : "#C19A6B",
      initial: { x: -140, y: -60, rotate: -10, scale: 0.95 },
      animate: { y: [-60, -80, -60], rotate: [-10, 14, -10] },
      delay: 0,
      label: "Code"
    },
    {
      icon: <Cloud size={38} className="drop-shadow-glow" />,
      color: darkMode ? "#C19A6B" : "#8B5A2B",
      initial: { x: 120, y: -40, rotate: 7, scale: 1.02 },
      animate: { y: [-40, -60, -40], rotate: [7, -13, 7] },
      delay: 0.7,
      label: "Cloud"
    },
    {
      icon: <Palette size={36} className="drop-shadow-glow" />,
      color: darkMode ? "#FFD700" : "#D2B48C",
      initial: { x: 0, y: 100, rotate: 0, scale: 1.1 },
      animate: { y: [100, 120, 100], rotate: [0, 12, 0] },
      delay: 1.2,
      label: "Design"
    }
  ];
  // Responsive size
  return (
    <div className="relative z-20 w-full max-w-2xl mx-auto pointer-events-none">
      {iconConfigs.map((cfg, idx) => (
        <motion.div
          key={idx}
          className="absolute hidden sm:block"
          initial={cfg.initial}
          animate={cfg.animate}
          transition={{
            repeat: Infinity,
            duration: 7 + idx,
            ease: 'easeInOut',
            delay: cfg.delay
          }}
          style={{
            left:
              idx === 0
                ? '0%'
                : idx === 1
                  ? '100%'
                  : '50%',
            top:
              idx === 0
                ? '28%'
                : idx === 1
                  ? '24%'
                  : '85%',
            transform:
              idx === 2
                ? 'translate(-50%, 0)'
                : idx === 0
                  ? 'translate(-60%, 0)'
                  : 'translate(-60%, 0)',
            zIndex: 30
          }}
          whileHover={{
            scale: 1.18,
            filter: `drop-shadow(0 0 18px ${cfg.color})`
          }}
        >
          <div
            className="rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg"
            style={{
              width: 68,
              height: 68,
              border: `2.5px solid ${cfg.color}`,
              boxShadow: `0 0 12px 2px ${cfg.color}44, 0 0 32px 8px ${cfg.color}22`
            }}
            title={cfg.label}
          >
            {React.cloneElement(cfg.icon, {
              color: cfg.color,
              size: 38 + idx * 2
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Softly moving decorative geometric lines/circuit shapes with mouse movement
function HeroDecorativeLines({ darkMode }: { darkMode?: boolean }) {
  // Track mouse movement for gentle parallax
  const [mouse, setMouse] = React.useState({ x: 0.5, y: 0.5 });
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  // Colors
  const color = darkMode ? "#FFD70088" : "#C19A6B88";
  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      {/* Top left diagonal line */}
      <motion.svg
        width="160"
        height="80"
        style={{
          position: 'absolute',
          top: '12%',
          left: '3%',
          opacity: 0.33,
          zIndex: 2
        }}
        animate={{
          x: (mouse.x - 0.5) * 18,
          y: (mouse.y - 0.5) * 12
        }}
        transition={{ type: "spring", stiffness: 24, damping: 12 }}
      >
        <polyline
          points="0,80 80,0 160,40"
          stroke={color}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>
      {/* Right vertical circuit line */}
      <motion.svg
        width="36"
        height="180"
        style={{
          position: 'absolute',
          right: '5%',
          top: '40%',
          opacity: 0.22,
          zIndex: 2
        }}
        animate={{
          y: (mouse.y - 0.5) * 32
        }}
        transition={{ type: "spring", stiffness: 18, damping: 10 }}
      >
        <polyline
          points="18,0 18,60 6,90 30,120 18,170"
          stroke={color}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="18" cy="0" r="3" fill={color} />
        <circle cx="18" cy="170" r="3.5" fill={color} />
      </motion.svg>
      {/* Bottom left geometric shape */}
      <motion.svg
        width="80"
        height="80"
        style={{
          position: 'absolute',
          left: '6%',
          bottom: '4%',
          opacity: 0.16,
          zIndex: 2
        }}
        animate={{
          x: (mouse.x - 0.5) * -20,
          y: (mouse.y - 0.5) * 14
        }}
        transition={{ type: "spring", stiffness: 22, damping: 13 }}
      >
        <rect
          x="10"
          y="10"
          width="60"
          height="60"
          rx="16"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
      </motion.svg>
    </div>
  );
}

// Parallax bubbles for hero section
function ParallaxBubbles({ darkMode }: { darkMode?: boolean }) {
  // Parallax on scroll
  const [scrollY, setScrollY] = React.useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // Parallax calculations
  const y1 = scrollY * 0.12;
  const y2 = scrollY * 0.18;
  const y3 = scrollY * 0.09;
  // Bubble colors for theme
  const bubbles = darkMode
    ? [
      { className: 'absolute top-20 left-10 w-20 h-20 rounded-full shadow-2xl', bg: 'rgba(210,180,140,0.24)', y: y1, delay: 0, opacity: [0.7, 1, 0.8, 1] },
      { className: 'absolute bottom-20 right-10 w-16 h-16 rounded-full shadow-2xl', bg: 'rgba(193,154,107,0.28)', y: -y2, delay: 1, opacity: [0.7, 1, 0.8, 1] },
      { className: 'absolute top-1/2 left-1/4 w-12 h-12 rounded-full shadow-2xl', bg: 'rgba(139,90,43,0.33)', y: y3, delay: 0.5, opacity: [0.8, 1, 0.8, 1] }
    ]
    : [
      { className: 'absolute top-20 left-10 w-20 h-20 rounded-full shadow-2xl', bg: 'rgba(210,180,140,0.17)', y: y1, delay: 0, opacity: [0.7, 1, 0.8, 1] },
      { className: 'absolute bottom-20 right-10 w-16 h-16 rounded-full shadow-2xl', bg: 'rgba(193,154,107,0.21)', y: -y2, delay: 1, opacity: [0.7, 1, 0.8, 1] },
      { className: 'absolute top-1/2 left-1/4 w-12 h-12 rounded-full shadow-2xl', bg: 'rgba(245,240,230,0.24)', y: y3, delay: 0.5, opacity: [0.8, 1, 0.8, 1] }
    ];
  return (
    <>
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          className={bubble.className}
          style={{ background: bubble.bg, y: bubble.y }}
          animate={{ opacity: bubble.opacity }}
          transition={{
            repeat: Infinity,
            duration: 8 - i,
            ease: 'easeInOut',
            delay: bubble.delay
          }}
        />
      ))}
    </>
  );
}

export default App;

// --- Extra CSS for shimmer, glowing borders, etc. ---
// Add this to your global CSS file (e.g., index.css or App.css), or use Tailwind's arbitrary values if supported.
// For demonstration, add these styles as a <style> tag in your index.html or import in your main CSS.
//
// html { font-size: 17px; }
// .glow-border {
//   border-image: linear-gradient(90deg, #D2B48C 20%, #C19A6B 80%) 1;
//   box-shadow: 0 0 0 0 #D2B48C, 0 0 0 0 #C19A6B;
// }
// .border-gradient-glow-warm {
//   border-image: linear-gradient(90deg, #D2B48C 20%, #C19A6B 80%) 1;
// }
// .shimmer-text {
//   background: linear-gradient(90deg, #D2B48C, #C19A6B, #FFD700, #8B5A2B);
//   background-size: 200% 100%;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   animation: shimmer-warm 2.5s linear infinite;
// }
// @keyframes shimmer-warm {
//   0% { background-position: 200% 0; }
//   100% { background-position: -200% 0; }
// }