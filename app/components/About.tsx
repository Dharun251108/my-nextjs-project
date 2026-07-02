"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 w-full max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-indigo-500 text-2xl">01.</span> About Me
          <div className="h-px bg-white/10 flex-1 ml-4"></div>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed text-lg">
          <div className="flex flex-col gap-6">
            <p>
              Hello! My name is Dharun and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom themes — turns out hacking together HTML & CSS taught me a lot about how the web works!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of building high-performance modern web applications. My main focus these days is building accessible, inclusive products and digital experiences at scale.
            </p>
            <p>
              When I'm not at the computer, I'm usually exploring new technologies, contributing to open-source projects, or optimizing my workflows.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl relative group overflow-hidden h-fit">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
             
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
               </div>
               <h3 className="text-xl font-semibold text-white">Core Philosophy</h3>
             </div>
             
             <p className="mb-4 text-white italic">"Simplicity is the ultimate sophistication."</p>
             <p className="text-sm md:text-base">
               I believe in clean code, beautiful interfaces, and user-centric design. Every project is an opportunity to learn something new and push the boundaries of what's possible on the modern web. I strive for excellence in both form and function.
             </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}