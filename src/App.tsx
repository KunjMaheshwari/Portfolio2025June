import React, { useState, useEffect } from 'react';
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
  Award
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
    { name: 'React', level: 70, category: 'Frontend' },
    { name: 'MySQL', level: 90, category: 'Database' },
    { name: 'AWS', level: 50, category: 'Cloud' },
    { name: 'Node.js', level: 70, category: 'Backend' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'Selenium', level: 60, category: 'Testing' }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'Vellore Institute of Technology Bhopal',
      year: '2021-2025',
      gpa: '8.11/10.0',
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
      period: '2025 - Present',
      location: 'Chennai, Tamil Nadu',
      responsibilities: [
        'Mastered Core Java and JDBC fundamentals as demonstrated by top performance in assessments scoring 100% in qualifiers during Cognizant’s training program.',
        'Leveraged Java 8 features as reflected in code quality evaluations by implementing lambda expressions, functional interfaces, and stream operations in real-world scenarios.',
        'Collaborated in agile teams as evidenced by successful project deliveries by participating in sprints, code reviews, and technical discussions throughout the training.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'education', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 ${activeSection === section
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/40 backdrop-blur-md rounded-lg mb-4 p-4">
              {['home', 'about', 'skills', 'education', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 px-4 text-gray-300 hover:text-white capitalize transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Kunj Maheshwari
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Programmer Analyst Trainee @Cognizant || AWS Certified Cloud Practitioner || Java and MERN Stack Developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-emerald-500/20 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I’m a passionate full-stack developer with a strong foundation in web technologies and a hunger to build meaningful digital solutions. My journey started with a love for solving problems and quickly grew into a commitment to creating clean, efficient, and user-friendly web applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Outside of coding, I enjoy exploring new tech trends, contributing to open-source projects, and helping peers in their learning journey. I believe technology is a powerful tool to create real-world impact, and I’m driven to keep learning, building, and growing every day.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <Code className="text-blue-400 mb-3" size={32} />
                  <h3 className="text-white font-semibold mb-2">Clean Code</h3>
                  <p className="text-gray-400 text-sm">Writing maintainable, scalable, and efficient code that stands the test of time.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <Award className="text-purple-400 mb-3" size={32} />
                  <h3 className="text-white font-semibold mb-2">Problem Solver</h3>
                  <p className="text-gray-400 text-sm">Tackling complex challenges with creative solutions and innovative thinking.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-1">
                <div className="bg-slate-900 rounded-2xl p-8">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                      <User size={64} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Kunj Maheshwari</h3>
                    <p className="text-blue-400 font-semibold">Programmer Analyst Trainee</p>
                    <div className="flex justify-center space-x-4 pt-4">
                      <a href="https://github.com/KunjMaheshwari" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={24} />
                      </a>
                      <a href="https://www.linkedin.com/in/kunjm" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={24} />
                      </a>
                      <a href="mailto:kunjm@outlook.com" className="text-gray-400 hover:text-white transition-colors">
                        <Mail size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                  <span className="text-blue-400 text-sm font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-wide">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-blue-400 font-semibold">{edu.school}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        {edu.year}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <GraduationCap size={16} className="mr-2" />
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>

                  {edu && edu.achievements && edu.achievements.length > 0 && (
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start text-gray-300">
                          <Award size={16} className="text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                          <p>{achievement}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <div className="flex items-center text-gray-400 mb-2">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <div key={respIndex} className="flex items-start text-gray-300">
                        <Briefcase size={16} className="text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                        {responsibility}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="text-blue-400 mr-4" size={24} />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-400">kunjm@outlook.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="text-blue-400 mr-4" size={24} />
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-400">+91 623 208 4444</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="text-blue-400 mr-4" size={24} />
                    <div>
                      <p className="text-white font-semibold">Location</p>
                      <p className="text-gray-400">Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex space-x-4">
                    <a href="https://github.com/KunjMaheshwari" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition-colors">
                      <Github size={20} className="text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/kunjm" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition-colors">
                      <Linkedin size={20} className="text-white" />
                    </a>
                    <a href="mailto:kunjm@outlook.com" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition-colors">
                      <Mail size={20} className="text-white" />
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="https://drive.google.com/file/d/1lj_DBbAYMtJ5ayQW86aJrEd0NH-sIwIU/view?usp=sharing"
                    className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Download size={20} className="mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Portfolio Website
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed and developed by Kunj Maheshwari
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;