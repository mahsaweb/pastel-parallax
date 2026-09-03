import Hero from '@/components/Hero';
import Feature from '@/components/Feature';
import CtaParallax from '@/components/CtaParallax';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#0a0a0f]">
      <Hero />
      <Feature />
      <CtaParallax />
    </main>
  );
}