'use client';
import React from 'react'
import { motion } from 'framer-motion';

export default function CtaParallax() {
   
    return (
      
            <section className="relative z-10 w-full h-[60vh] md:h-[70vh] bg-[url('/paralax-index1.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center">
                <div className=" flex flex-col items-center justify-center gap-6 text-center text-white px-4 max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-sm md:text-lg font-light tracking-wider">
                        Unleash your creative potential with our cutting-edge solutions</motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl md:text-5xl font-light leading-tight">
                        Looking For Exclusive Digital Services?</motion.h2>
                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="px-8 py-3 bg-[#EB8153] hover:bg-white hover:text-[#EB8153] font-bold rounded-md transition-colors duration-300 cursor-pointer">
                        Let's Talk
                    </motion.button>
                </div>
            </section>

    )

}
