"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 w-full max-w-3xl mx-auto text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-indigo-400 font-medium mb-4 tracking-widest uppercase text-sm">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h2>
        
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:hello@example.com" 
          className="inline-block px-10 py-4 rounded-xl border border-indigo-500/50 text-indigo-400 font-medium hover:bg-indigo-500/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-300 hover:-translate-y-1"
        >
          Say Hello
        </a>

        <div className="mt-24 flex justify-center gap-6">
          {["Github", "LinkedIn", "Twitter", "Instagram"].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-slate-500 hover:text-indigo-400 hover:-translate-y-1 transition-all duration-300"
              aria-label={social}
            >
              <span className="text-sm font-medium">{social}</span>
            </a>
          ))}
        </div>
        
        <p className="mt-8 text-sm text-slate-600">
          Designed & Built by Dharun
        </p>
      </motion.div>
    </section>
  );
}