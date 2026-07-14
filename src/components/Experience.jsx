import React from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT2 } from "../constants";

const Experience = () => {
  const skills = ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"];

  return (
    <section id="Experience.jsx" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Experience
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Building modern web experiences
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-neutral-300">
            I enjoy creating responsive, clean, and user-friendly web apps while
            continuously improving my frontend and backend skills.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, x: -100 }}
            className="w-full lg:w-[30%]"
          >
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 shadow-xl shadow-black/20">
              <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400">
                2026 - Present
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">WDCS</h3>
              <p className="mt-2 text-sm text-neutral-400">CodeZeros</p>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, x: 100 }}
            className="w-full lg:w-[70%]"
          >
            <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800/80 p-6 shadow-xl shadow-black/30">
              <h4 className="text-xl font-semibold text-white">
                Frontend Developer 
              </h4>
              <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-300">
                {ABOUT_TEXT2}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-sm text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;