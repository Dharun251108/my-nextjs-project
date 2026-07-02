"use client";

import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4"
    >
      <div className="glass px-6 py-3 rounded-full flex gap-4 md:gap-8 items-center overflow-x-auto max-w-full no-scrollbar">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:text-gradient whitespace-nowrap"
          >
            {item.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}