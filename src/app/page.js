import Hero from '@/components/Hero';
import Feature from '@/components/Feature';
import ParallaxBanner from '@/components/ParallaxBanner';
import ModernWeb from '@/components/ModernWeb';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#0a0a0f]">
      <Hero />
      <Feature />
      <ParallaxBanner />
      <ModernWeb />
      <Projects />
    </main>
  );
}