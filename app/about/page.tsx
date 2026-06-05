'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Download, Sparkles, Code2, Brain, Users } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const birthDate = new Date('2003-12-15');
  const age = new Date().getFullYear() - birthDate.getFullYear();

  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'ODIN Technologies',
      period: 'Dec 2025 - Mar 2026',
      type: 'Professional',
      highlights: [
        'Full-stack development with React.js, Next.js, FastAPI, NestJS',
        'AI/LLM integration for chatbot and automation systems',
        'WhatsApp integration and agent backend systems',
        'Agile team collaboration and code reviews'
      ]
    },
    {
      title: 'Cybersecurity Virtual Internship',
      company: 'Cisco Networking Academy',
      period: 'Jun 2025 - Aug 2025',
      type: 'Virtual',
      highlights: [
        'Network security and threat detection',
        'Defense strategy implementation',
        'Practical cybersecurity skills',
        'Industry-standard best practices'
      ]
    }
  ];

  const journey = [
    { year: '2026', title: 'MCA Graduate', detail: 'CGPA: 9.14/10.0 - Vidya Academy of Science and Technology' },
    { year: '2024', title: 'Bachelor of Computer Application', detail: 'CGPA: 8.29/10.0 - St. Mary\'s College, Thrissur' },
    { year: '2023', title: 'AI & ML Integration Journey Begins', detail: 'Started exploring ML, YOLOv8, OpenCV, and LLM technologies' },
    { year: '2021', title: 'Programming Foundation', detail: 'Built strong fundamentals in Java, C, Python, and databases' },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-70 transition-opacity group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Portfolio</span>
          </Link>
          <div className="text-2xl font-bold gradient-text">ANJANA</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-10 right-0 w-96 h-96 bg-[#9f7aea]/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center mb-16"
          >
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9f7aea] to-[#00d9ff] rounded-2xl blur-3xl opacity-30"></div>
                <img
                  src="/anjana-portrait.jpg"
                  alt="Anjana Unni P"
                  className="relative w-full rounded-2xl border-2 border-[#9f7aea]/30"
                />
              </div>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 space-y-6"
            >
              <div>
                <p className="text-sm text-[#00d9ff] font-semibold uppercase tracking-wider mb-2">Developer Profile</p>
                <h1 className="text-5xl md:text-6xl font-bold mb-2">Anjana Unni P</h1>
                <p className="text-2xl gradient-text font-bold">AI-Augmented Full Stack Developer</p>
              </div>

              <div className="space-y-3 text-foreground/80">
                <p className="flex items-center space-x-2">
                  <span className="text-[#9f7aea]">📅</span>
                  <span>Born: December 15, 2003 ({age} years old)</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[#00d9ff]">📍</span>
                  <span>Thrissur, Kerala, India</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Sparkles className="text-[#9f7aea]" size={20} />
                  <span>Using AI tools to accelerate development and build smarter solutions</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <motion.a

                  whileHover={{ scale: 1.05 }}

                  href="/resume/ANJANAUNNIP.pdf"

                  target="_blank"

                  className="
px-6 py-2 
bg-gradient-to-r 
from-[#9f7aea] 
to-[#00d9ff] 
text-background 
rounded-lg 
font-semibold 
flex 
items-center 
space-x-2 
hover:shadow-lg 
hover:shadow-[#9f7aea]/50 
transition-all
"

                >


                  <Download size={18} />


                  <span>
                    Download Resume
                  </span>


                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Origin File / Bio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glassmorphism-dark p-12 rounded-2xl border border-border/40"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-px w-8 bg-[#9f7aea]"></div>
              <span className="text-[#9f7aea] font-bold uppercase tracking-wider text-sm">Origin File</span>
              <div className="h-px flex-grow bg-gradient-to-r from-[#9f7aea] to-transparent"></div>
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                I am a 22-year-old full-stack software developer and <span className="text-[#00d9ff] font-semibold">AI-augmented developer</span> passionate about building scalable, intelligent applications that solve real-world problems. My journey in technology began with a strong foundation in programming and databases, which I built during my Bachelor of Computer Application degree at St. Mary's College, Thrissur (CGPA: 8.29/10.0).
              </p>

              <p>
                During my Master of Computer Application at Vidya Academy of Science and Technology (CGPA: 9.14/10.0), I transitioned into modern full-stack development and AI integration. I've developed expertise in React.js, Next.js, Django, FastAPI, NestJS, and have successfully implemented AI/LLM features in production applications. My projects showcase my ability to combine cutting-edge technology with practical problem-solving.
              </p>

              <p>
                As an <span className="text-[#9f7aea] font-semibold">AI-augmented developer</span>, I leverage AI tools to accelerate development cycles, enhance code quality, and build smarter solutions. I'm currently working as a Software Development Intern at ODIN Technologies, where I deliver full-stack applications, integrate AI capabilities, and implement WhatsApp automation systems.
              </p>

              <p>
                I am committed to continuous learning and staying updated with the latest technologies. My experience spans full-stack web development, machine learning integration (YOLOv8, OpenCV), geospatial analysis, and cybersecurity. I thrive in Agile environments and believe in writing clean, maintainable code with a focus on reliability and performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 gradient-text text-center"
          >
            Professional Journey
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glassmorphism-dark p-8 rounded-xl border-l-4 border-[#9f7aea] hover:border-[#00d9ff] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-[#9f7aea] font-semibold">{exp.company}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${exp.type === 'Professional' ? 'bg-[#9f7aea]/20 text-[#9f7aea]' : 'bg-[#00d9ff]/20 text-[#00d9ff]'}`}>
                    {exp.type}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start space-x-3 text-foreground/80">
                      <span className="text-[#00d9ff] mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9f7aea]/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 gradient-text text-center"
          >
            Educational Background
          </motion.h2>

          <div className="space-y-6">
            {journey.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start group"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9f7aea] to-[#00d9ff] flex items-center justify-center font-bold text-background flex-shrink-0"
                  >
                    {item.year.slice(-1)}
                  </motion.div>
                  {idx !== journey.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-[#9f7aea] to-[#00d9ff] mt-2"></div>
                  )}
                </div>
                <div className="pt-2 pb-6 flex-grow">
                  <p className="text-[#9f7aea] font-semibold text-sm uppercase">{item.year}</p>
                  <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-foreground/70">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 gradient-text text-center"
          >
            Core Competencies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: 'Full Stack Development',
                skills: ['React.js', 'Next.js', 'Django', 'FastAPI', 'NestJS', 'REST APIs']
              },
              {
                icon: Brain,
                title: 'AI & Machine Learning',
                skills: ['YOLOv8', 'OpenCV', 'LLM Integration', 'OpenAI API', 'NLP', 'Data Analysis']
              },
              {
                icon: Users,
                title: 'Professional Skills',
                skills: ['Agile Development', 'Team Collaboration', 'Problem Solving', 'Git & GitHub', 'Testing & Debugging']
              }
            ].map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glassmorphism-dark p-8 rounded-xl border border-border/40 hover:border-[#9f7aea]/50 transition-colors"
                >
                  <Icon className="text-[#9f7aea] mb-4" size={32} />
                  <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-[#9f7aea]/20 to-[#00d9ff]/20 text-foreground/80 border border-[#9f7aea]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glassmorphism-dark p-12 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Build Something Amazing?</h2>
            <p className="text-foreground/70 mb-8">Let's collaborate and create intelligent solutions that make a difference.</p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#9f7aea] to-[#00d9ff] text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-[#9f7aea]/50 transition-all"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
        
      </section>
    </main>
  );
}
