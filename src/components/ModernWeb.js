"use client";
import React from 'react';
import { motion } from 'framer-motion';


export default function ModernWeb() {
    const featuresList = [
        'React.js & Next.js',
        'Responsive Web Design',
        'Tailwind CSS & Styling',
        'Performance Optimization',
        'TypeScript Integration',
        'REST & GraphQL APIs',
        'UI/UX Pixel Perfection',
        'SEO & Best Practices',
    ];
    return (
        <section className="relative z-20 bg-white  w-full min-h-screen p-4 shadow-2xl flex items-center justify-center">
            <div className=" w-full h-full grid grid-cols-1 md:grid-cols-2 gap-9 items-center ">

                {/* left side */}
                <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="flex items-center justify-center">
                    <img
                        src="/full-responsive.png"
                        alt="Unique Experience Devices"
                        className="w-full h-auto object-contain" />
                </motion.div>

                {/* right side*/}
                <motion.div
                    initial={{ opacity: 0, x: 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-col gap-6 col-span-1 ">
                    <div className="flex flex-col gap-2 ">
                        <h2 className="text-lg font-medium md:text-2xl text-gray-800 mb-5">Modern Web Development</h2>
                        <p className=" text-sm leading-relaxed max-w-lg font-normal text-gray-700 ">
                            I specialize in building fast, scalable, and responsive web applications using modern technologies like React and Next.js. My focus is on writing clean, maintainable code, delivering pixel-perfect UI designs, and ensuring an exceptional user experience across all devices and platforms.
                        </p>
                    </div>
                    <div className="flex flex-col mt-2">
                        <h2 className="text-xl font-medium mb-4 md:text-2xl text-gray-800">Features</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                            {featuresList.map((item, index) => (
                                <div key={index} className="flex items-center gap-2.5">

                                    <svg
                                        className="w-4 h-4 text-[#7db642] shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <span className="text-gray-700 text-xs md:text-sm font-medium">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-end gap-3 mt-8 text-gray-600">
                            {/* مانیتور / لپ‌تاپ */}
                            <svg className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0v12" />
                            </svg>
                            {/* تبلت */}
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 5.25v14.25a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            {/* موبایل */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
                            </svg>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>

    )
}
