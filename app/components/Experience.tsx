"use client";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Innovators Inc.",
    duration: "2022 - Present",
    description: "Led the frontend team in building a high-performance SaaS dashboard using Next.js and React. Improved application load time by 40% and established modern CI/CD pipelines.",
  },
  {
    role: "Software Developer",
    company: "Creative Solutions LLC",
    duration: "2019 - 2022",
    description: "Developed and maintained full-stack web applications. Collaborated closely with designers to implement pixel-perfect UIs and robust backend APIs using Node.js.",
  },
  {
    role: "Junior Web Developer",
    company: "StartUp Hub",
    duration: "2017 - 2019",
    description: "Built landing pages and internal tools using React and Node.js. Assisted in migrating legacy jQuery codebases to modern React ecosystem.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-indigo-500 text-2xl">03.</span> Experience
          <div className="h-px bg-white/10 flex-1 ml-4"></div>
        </h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-500/20 before:to-transparent">
          {experienceData.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-indigo-500 text-white shadow shadow-indigo-500/50 absolute left-0 md:left-1/2 -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-white">{job.role}</h3>
                  <span className="text-sm font-medium text-indigo-400 mt-1 md:mt-0">{job.duration}</span>
                </div>
                <h4 className="text-lg text-slate-300 font-medium mb-4">{job.company}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}