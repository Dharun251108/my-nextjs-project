"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-20 relative w-full max-w-5xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 border-2 border-indigo-500/30 p-1 relative mx-auto"
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
          <img src="/Ichigo.jpeg" alt="Dharun" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(99,102,241,0.4)] -z-10 animate-pulse"></div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
      >
        Hi, I'm <span className="text-gradient">Dharun</span>
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
      >
        I am a software engineer specializing in building (and occasionally designing) exceptional, high-quality digital experiences for the modern web.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a href="#contact" className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-1">
          Get In Touch
        </a>
        <a href="#" className="px-8 py-3 rounded-full glass hover:bg-white/10 text-white font-medium transition-all hover:-translate-y-1 border border-white/10">
          View Resume
        </a>
      </motion.div>
    </section>
  );
}