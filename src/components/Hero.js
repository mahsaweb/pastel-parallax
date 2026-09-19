'use client';
import React from 'react';
import { motion } from 'framer-motion';


 const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };


export default function Hero() {
  const titleText = "Your success is our priority";
 
  return (
    <section className="sticky top-0 w-full h-screen bg-[url('/banner.jpg')] bg-cover bg-center z-0 flex items-center justify-center overflow-hidden">
  
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center text-white px-4 max-w-4xl">
              
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3 overflow-hidden"
        >
          <span className="h-0.5 w-8 bg-[#fe80c0]" />
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-semibold text-gray-200">
            Welcome to Our Website
          </span>
          <span className="h-0.5 w-8 bg-[#fe80c0]" />
        </motion.div>
      
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight flex flex-wrap justify-center gap-x-4 gap-y-2 perspective-1000"
        >
          {titleText.split(" ").map((word, index) => {
            const isHighlight = word.toLowerCase().includes("priority");
            return (
              <motion.span
                key={index}
                variants={wordVariants}
                className={
                  isHighlight
                    ? "text-transparent bg-clip-text bg-linear-to-r from-[#fe80c0] via-pink-400 to-amber-300 animate-pulse inline-block"
                    : "inline-block"
                }
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>
       
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-base md:text-xl text-gray-200 font-light max-w-xl"
        >
          We are here to help you achieve your goals with modern & responsive web solutions.
        </motion.p>
     
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mt-4"
        >
          <a
            href="#services"
            className="relative group inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-300 bg-[#fe80c0] rounded-full overflow-hidden shadow-[0_0_20px_rgba(254,128,192,0.4)] hover:shadow-[0_0_35px_rgba(254,128,192,0.8)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Read More
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>

      </div>

    </section>


  )
}
