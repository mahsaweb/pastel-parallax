'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBanner() {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.6, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.9, 1]);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] bg-[url('/paralax-index1.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-[radial-gradient(#rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[16px_16px] opacity-30" />

      {/* کارت شیشه‌ای شناور  */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 mx-4 max-w-3xl p-8 md:p-12 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-center text-white flex flex-col items-center gap-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 text-white/90 border border-white/20"
        >
          Unleash Your Potential
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-md"
        >
          Looking For Exclusive Digital Services?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm md:text-base font-light text-gray-300 max-w-lg"
        >
          Unleash your creative potential with our cutting-edge solutions tailored specifically for your brand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-[#EB8153] text-white font-bold rounded-xl transition-all duration-300 hover:bg-white hover:text-[#EB8153] hover:shadow-[0_0_25px_rgba(235,129,83,0.6)]"
          >
            <span>Let's Talk</span>
            <span className="w-2 h-2 rounded-full bg-white group-hover:bg-[#EB8153] transition-colors" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}