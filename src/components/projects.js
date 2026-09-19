'use client';
import React from 'react';
import { motion } from 'framer-motion';


export default function Projects() {
    const projectsData = [
        {
            id: 1,
            title: 'Portfolio',
            subCategory: 'Personal',
            img: '/portfolio.png',
            colSpan: 'md:col-span-1 md:row-span-2'
        },
        {
            id: 2,
            title: 'Planthop',
            subCategory: 'shop',
            img: '/plantshop.png',
            colSpan: 'md:col-span-1',
        },
        {
            id: 3,
            title: 'Modern Web',
            subCategory: 'Elements',
            img: '/modernweb.jpg',
            colSpan: 'md:col-span-1',
        }
    ]
    return (
        <section className="relative w-full min-h-screen bg-[#f8f8f8] flex flex-col">
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6 }}
                className="w-full h-full flex flex-col items-center justify-center gap-12">
                <div className="flex flex-col items-center justify-center gap-3 text-center p-10">
                    <h3 className='capitalize text-gray-800 text-sm'> what i do</h3>
                    <h1 className="capitalize text-2xl font-medium md:text-4xl text-gray-800">latest projects</h1>
                    <div className="w-10 h-0.5 bg-[#7db642] mt-2" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {projectsData.map((project) => (
                        <div key={project.id} className={`relative group overflow-hidden cursor-pointer min-h-65 bg-white shadow-sm ${project.colSpan}`}>
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
                                <h3 className="text-xl font-medium text-gray-800 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.title}
                                </h3>
                                <div className="w-8 h-0.5 bg-[#7db642] my-2" />
                                <p className="text-sm text-gray-500 tracking-wide transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.subCategory}
                                </p>
                            </div>

                        </div>
                    )
                    )}

                </div>
            </motion.div>

        </section>
    )
}
