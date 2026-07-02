"use client";
import { motion } from "framer-motion";

const skillsData = [
  { 
    category: "Frontend", 
    icon: <path d="M12 19l7-7 3 3-7 7-3-3z"></path>, 
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"] 
  },
  { 
    category: "Backend", 
    icon: <path d="M5 12h14M12 5l7 7-7 7"></path>, 
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"] 
  },
  { 
    category: "Tools & DevOps", 
    icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>, 
    items: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Figma"] 
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-indigo-500 text-2xl">02.</span> Skills
          <div className="h-px bg-white/10 flex-1 ml-4"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:border-indigo-500/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="text-indigo-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full text-slate-300 group-hover:border-indigo-500/20 group-hover:bg-indigo-500/5 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}