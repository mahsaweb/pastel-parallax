'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/store/useStore';

const navLinks = [
  { id: '01', name: 'Home', path: '#home' },
  { id: '02', name: 'About', path: '#about' },
  { id: '03', name: 'Services', path: '#services' },
  { id: '04', name: 'Resume', path: '#resume' },
  { id: '05', name: 'Work', path: '#work' },
];

export default function Navbar() {
  const { isMenuOpen, toggleMenu, closeMenu } = useStore();

  return (
    <>
     
      <button
        onClick={toggleMenu}
        className="fixed top-8 right-8 z-50 p-3.5 text-white bg-black/40 hover:bg-[#fe80c0] backdrop-blur-xl border border-white/10 rounded-full transition-all duration-500 focus:outline-none shadow-2xl group"
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="12" r="1.5" fill="currentColor" />
          <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* لایه تیره پشت منو */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
            />

            {/* menu pannel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full sm:w-105 h-full bg-[#111111] text-white z-70 shadow-2xl p-10 flex flex-col justify-between border-l border-white/10"
            >
              <div>
                {/* menu header*/}
                <div className="flex justify-between items-center pb-8 border-b border-white/10">
                  <span className="text-xl font-semibold tracking-widest text-gray-400 uppercase">
                    Navigation
                  </span>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* menu list */}
                <nav className="flex flex-col gap-6 mt-12">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.id}
                      href={link.path}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 + 0.1, duration: 0.4 }}
                      className="group flex items-baseline gap-4 text-2xl font-light text-gray-300 hover:text-[#fe80c0] transition-colors duration-300"
                    >
                      <span className="text-xs font-mono text-gray-600 group-hover:text-[#fe80c0] transition-colors">
                        {link.id}
                      </span>
                      <span className="tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* menu footer*/}
              <div className="pt-8 border-t border-white/10 flex flex-col gap-2">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Get In Touch</span>
                <a href="mailto:mahsa@portfolio.dev" className="text-sm text-gray-300 hover:text-[#fe80c0] transition-colors">
                  mahsa@portfolio.dev
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}