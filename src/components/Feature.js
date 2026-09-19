'use client';
import React from 'react'
import { motion } from 'framer-motion';

export default function Feature() {
    const data = [
        {
            id: 1,
            title: 'Unlimited Features',
            desc: 'Access a robust suite of tools designed to scale seamlessly with your project and empower your workflow without limitations.',
            icon: (
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'Creative Design',
            desc: 'Eye-catching, modern user interfaces tailored to your brand identity to engage visitors and boost retention.',
            icon: (
                <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            )
        },
        {
            id: 3,
            title: 'Responsive Design',
            desc: 'Flawlessly adapted display across all screen sizes and devices, from mobile phones to high-resolution desktops.',
            icon: (
                <svg className="w-10 h-10 text-fuchsia-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 5.25v14.25a2.25 2.25 0 002.25 2.25z" />
                </svg>
            )
        },
        {
            id: 4,
            title: 'Ultra-Fast Performance',
            desc: 'Lightning-fast load times and optimized codebase to deliver a smooth, seamless, and high-efficiency user experience.',
            icon: (<svg className="w-11 h-11 text-amber-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>)
        },
        {
            id: 5,
            title: 'Advanced Security',
            desc: 'Built with modern security practices to ensure complete data protection and reliable, uninterrupted uptime.',
            icon: (<svg className="w-11 h-11 text-pink-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0 1 12 2.714z" />
            </svg>)
        },
        {
            id: 6,
            title: 'Clean Code / Support',
            desc: 'Standardized, well-structured architecture making future updates, custom features, and scaling completely effortless.',
            icon: (<svg className="w-11 h-11 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>)
        }
    ]
    return (
        <section className="relative z-10 bg-[#f5efe0] shadow-2xl min-h-screen w-full py-24 flex flex-col items-center justify-center">
            <div className="text-center mb-12">
                <motion.h3
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-gray-800 text-sm  mb-2  ">Our Valued Services</motion.h3>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-extralight tracking-tight text-gray-900 leading-none mt-2">
                    What we Offer</motion.h1>
            </div>


            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 px-6 ">
                {data.map((feature,index) => (
                    <motion.div key={feature.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: (index % 3) * 0.15 }} // تاخیر پله‌ای بین کارت‌ها
                        whileHover={{ y: -6 }}
                        className="flex flex-col items-center justify-center gap-4 p-4 border rounded-lg shadow-md bg-gray-50 group hover:shadow-xl transition-shadow duration-300">

                        <div className="group-hover:scale-110">{feature.icon}</div>
                        <h3 className="text-gray-800 font-bold ">{feature.title}</h3>

                        <p className="text-gray-700 text-sm text-center">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>


        </section >
    )
}
