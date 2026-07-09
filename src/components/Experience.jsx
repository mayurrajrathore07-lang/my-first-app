import React from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT2 } from "../constants";

const Experience = () => {
  return (
    <section className="py-16">
      <h2 className="mb-4 text-2xl font-semibold text-white">Experience</h2>
      <p className="text-neutral-300">
        Building responsive web apps and learning modern frontend practices.
      </p>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: -100 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <p>2026 - Present</p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: 100 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <h3>CodeZeros</h3>
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT2}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
