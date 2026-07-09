import React from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT3 } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="mb-4 text-2xl font-semibold text-white">Projects</h2>
      <p className="text-neutral-300">A few sample React projects will go here.</p>

 <div className="mt-10 flex flex-wrap items-start gap-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: -100 }}
          className="w-full lg:w-[30%] lg:p-4"
        >
          <div className="flex justify-center lg:justify-start lg:pt-2">
            <p className="rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-300">
              Nexora
            </p>
          </div>   
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: 100 }}
          className="w-full lg:w-[65%]"
        >
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white">writing soon..</h3>
            <p className="mt-3 max-w-xl text-neutral-300">{ABOUT_TEXT3}</p>
          </div>
        </motion.div>
      </div> 




    </section>
    
  );
};

export default Projects;
