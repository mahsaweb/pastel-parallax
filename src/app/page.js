import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Feature from '@/components/Feature';
import ParallaxBanner from '@/components/ParallaxBanner';
import ModernWeb from '@/components/ModernWeb';
import Projects from '@/components/Projects';
import Marquee from '@/components/Marquee';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <Feature />
      </section>
      <section id="services">
        <ParallaxBanner />
      </section>
      <section id="resume">
        <ModernWeb />
      </section>
       <Marquee />
      <section id="work">
        <Projects />
      </section>
      
    </main>
  );
}