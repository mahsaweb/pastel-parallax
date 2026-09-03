'use client';
import React from 'react'
import { motion } from 'framer-motion';

export default function CtaParallax() {
    return (
        <>
            <section className="relative z-10 w-full h-[60vh] md:h-[70vh] bg-[url('/paralax-index1.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center">
                <div className=" flex flex-col items-center justify-center gap-6 text-center text-white px-4 max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-sm md:text-base font-light tracking-wider">
                        Unleash your creative potential with our cutting-edge solutions</motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold leading-tight">
                        Looking For Exclusive Digital Services?</motion.h2>
                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="px-8 py-3 bg-[#7db642] hover:bg-[#6ca037] text-white font-bold rounded-md transition-colors duration-300 cursor-pointer">
                        Let's Talk
                    </motion.button>
                </div>
            </section>

            <section className="relative z-20 bg-white  w-full min-h-screen shadow-2xl flex items-center justify-center">
                <div className=" w-full grid grid-cols-1 md:grid-cols-10 gap-9 items-center">

                    {/* left side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid col-span-5 items-center justify-center"
                    >
                        <img
                            src="/full-responsive.png"
                            alt="Unique Experience Devices"
                            className=" bg-cover object-contain"
                        />
                    </motion.div>

                    {/* right side*/}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid col-span-5 "
                    >
                        <div className="flex flex-col gap-7 ">
                            <h2 className="text-xl font-medium md:text-3xl text-gray-700">Unique Experience</h2>
                            <p className=" text-lg text-gray-600 ">
                                We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we can’t boast years and years of service we can ensure you that is a good thing in this industry.
                            </p>
                        </div>
                        <div className="flex flex-col gap-7 mt-6">
                            <h2 className="text-xl font-medium md:text-3xl text-gray-700">Features</h2>
                            
                        </div>
                    </motion.div>

                </div>
            </section>

        </>
    )

}
