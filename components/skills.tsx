'use client';

import { motion } from 'framer-motion';
import { Braces, Database, GitBranch, Palette, BarChart3, Cloud } from 'lucide-react';

const skillCategories = [
  { category: 'Web Technologies', icon: Palette, skills: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Backend & Frameworks', icon: Braces, skills: ['Python', 'Django', 'FastAPI', 'Node.js', 'NestJS', 'REST APIs'] },
  { category: 'Databases', icon: Database, skills: ['MySQL', 'MongoDB', 'SQLite', 'PostgreSQL', 'Query Optimization', 'Database Design'] },
  { category: 'AI & Machine Learning', icon: BarChart3, skills: ['Machine Learning', 'YOLOv8', 'OpenCV', 'NLP', 'OpenAI API', 'LLM Integration'] },
  { category: 'Tools & Platforms', icon: GitBranch, skills: ['Git & GitHub', 'VS Code', 'Postman', 'Docker', 'Terminal/CLI', 'Agile & SDLC'] },
  { category: 'Programming Languages', icon: Cloud, skills: ['Java', 'C', 'Python', 'OOPS', 'Problem Solving', 'Debugging & Testing'] },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Capabilities</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Technical Skills</h2>
          <p className="mx-auto max-w-2xl text-lg leading-7 text-muted-foreground">A practical toolkit for building reliable, thoughtful digital products.</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ category, icon: Icon, skills }, index) => (
            <motion.article key={category} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} viewport={{ once: true }} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
              <div className="mb-5 flex items-center gap-3"><div className="rounded-lg bg-primary/10 p-3 text-primary"><Icon size={22} /></div><h3 className="text-lg font-semibold text-foreground">{category}</h3></div>
              <div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-md border border-border bg-secondary px-3 py-2 text-sm text-secondary-foreground">{skill}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
