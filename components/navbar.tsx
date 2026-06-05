'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Download, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#journey' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          {/* Premium AI Brand Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.08,
              rotate: 3,
            }}
            className="flex items-center gap-3 cursor-pointer"
          >

            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0,217,255,0.4)",
                  "0 0 35px rgba(159,122,234,0.7)",
                  "0 0 20px rgba(0,217,255,0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                relative
                w-12
                h-12
                rounded-xl
                bg-gradient-to-br
                from-[#00d9ff]
                via-[#6366f1]
                to-[#9f7aea]
                p-[2px]
              "
            >

              <div
                className="
                w-full
                h-full
                rounded-xl
                bg-[#080b20]
                flex
                items-center
                justify-center
                "
              >

                <span
                  className="
                  text-xl
                  font-black
                  bg-gradient-to-r
                  from-[#00d9ff]
                  to-[#9f7aea]
                  bg-clip-text
                  text-transparent
                  "
                >
                  &lt;/∞
                </span>

              </div>

            </motion.div>


            <span
              className="
              hidden
              md:block
              tracking-[5px]
              text-sm
              font-bold
              bg-gradient-to-r
              from-[#00d9ff]
              via-white
              to-[#9f7aea]
              bg-clip-text
              text-transparent
              "
            >
              
            </span>


          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => handleScroll(item.href)}
                className="text-sm font-medium text-foreground hover:text-[#9f7aea] transition-colors duration-300"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Right Side Icons & Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-[#9f7aea] transition-colors"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-[#00d9ff] transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume/Anjana_Unni_P_Resume.pdf"
              download="Anjana_Unni_P_Resume.pdf"
              className="px-6 py-2 bg-gradient-to-r from-[#9f7aea] to-[#00d9ff] text-background rounded-full font-semibold text-sm flex items-center space-x-2 hover:shadow-lg hover:shadow-[#9f7aea]/50 transition-all cursor-pointer"
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScroll(item.href)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:text-[#9f7aea] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex space-x-4 px-4 py-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="text-foreground" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="text-foreground" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
