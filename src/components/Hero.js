'use client';
import React from 'react'
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className=" relative w-full h-screen bg-[url('/banner.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center">

      <div className="absolute top-2/4 left-1/4 flex flex-col items-center justify-center gap-4 text-center text-white">
        <motion.h3 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-lg font-medium tracking-wide">
          Welcome to Our Website
        </motion.h3>
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-3xl md:text-6xl font-bold tracking-tight">
          Your success is our priority
        </motion.h1>
        <motion.h3 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-sm md:text-lg text-gray-200">
          We are here to help you achieve your goals
        </motion.h3>
        <motion.button 
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7}}
          className="mt-2 px-8 py-3 bg-[#fe80c0] hover:bg-[#e06bab] text-white font-bold rounded-lg transition-all duration-300 cursor-pointer shadow-lg hover:scale-105"
        >
          Read More
        </motion.button>
      </div>

    </section>


  )
}
