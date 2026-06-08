import IntroLoader from '@/components/intro-loader';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Journey from '@/components/journey';
import Certifications from '@/components/certifications';
import Contact from '@/components/contact';

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <IntroLoader/>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <Certifications />
      <Contact />
    </main>
  );
}
