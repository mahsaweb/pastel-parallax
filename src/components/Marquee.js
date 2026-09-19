'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee() {
  const words = [
    'REACT & NEXT.JS',
    '•',
    'ZUSTAND',
    '•',
    'TAILWIND CSS',
    '•',
    'PARALLAX EXPERIENCES',
    '•',
  ];

  // تکرار ۴ برابری برای جلوگیری از خالی شدن انتهای نوار در مانیتورهای عریض
  const repeatedWords = [...words, ...words, ...words, ...words];

  return (
    <div className="w-full bg-[#16c3b0] py-5 overflow-hidden flex whitespace-nowrap border-y border-black/10 select-none">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 15, 
        }}
        className="flex items-center gap-10 font-black tracking-widest text-xl md:text-2xl uppercase text-black w-max"
      >
        {repeatedWords.map((item, index) => (
          <span
            key={index}
            className={item === '•' ? 'text-black/40 font-normal' : 'shrink-0'}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}