import React from "react";
import { motion } from "framer-motion";
import imaget4 from "../assets/imaget4.jpg";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="mb-8 text-4xl font-semibold text-center text-white">Frontend Projects</h2>
      <p className="mx-auto max-w-2xl text-center text-neutral-400">A selection of projects built with React, Tailwind CSS and other modern tools.</p>

      {/* Main project block styled like the screenshot (left text, right image) */}
      <div className="mt-12 space-y-10">
        <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, x: -100 }}
            className="w-full lg:w-1/2"
          >
            <div className="px-2 lg:px-6">
              <p className="inline-block rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-300">Streaming Clone</p>
              <h3 className="mt-6 text-2xl font-semibold text-white">A Netflix movie streaming clone</h3>
              <p className="mt-3 text-neutral-300">A Netflix movie streaming clone built using HTML/CSS/JS, React/Vite, Tailwind CSS and Firebase (for db/authentication). API used from The Movie DB. Hosted using Netlify.</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-purple-300">React</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">HTML</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">CSS</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-violet-300">JavaScript</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-sky-300">Tailwind CSS</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-emerald-300">Firebase</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://example.com" target="_blank" rel="noreferrer" className="rounded-full bg-neutral-700/60 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-700">See Live</a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-800">View Code</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, x: 100 }}
            className="w-full lg:w-1/2"
          >
            <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/40 shadow-lg">
              <img src={imaget4} alt="project screenshot" className="w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-12 space-y-10">
        <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, x: -100 }}
            className="w-full lg:w-1/2"
          >
            <div className="px-2 lg:px-6">
              <p className="inline-block rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-300">Personal Portfolio</p>
              <h3 className="mt-6 text-2xl font-semibold text-white">Responsive portfolio website</h3>
              <p className="mt-3 text-neutral-300">A polished portfolio website built with React, Tailwind CSS and Framer Motion with smooth animations and responsive layout.</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-purple-300">React</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Tailwind</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Framer Motion</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-violet-300">Responsive</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://example.com" target="_blank" rel="noreferrer" className="rounded-full bg-neutral-700/60 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-700">See Live</a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-800">View Code</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, x: 100 }}
            className="w-full lg:w-1/2"
          >
            <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/40 shadow-lg">
              <img src={imaget4} alt="project screenshot" className="w-full object-cover" />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, x: -100 }}
            className="w-full lg:w-1/2"
          >
            <div className="px-2 lg:px-6">
              <p className="inline-block rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-300">E-commerce UI</p>
              <h3 className="mt-6 text-2xl font-semibold text-white">Modern shopping experience</h3>
              <p className="mt-3 text-neutral-300">A product catalog and checkout interface created using React and Tailwind CSS for a clean, modern e-commerce feel.</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-purple-300">React</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Tailwind</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">UI/UX</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-violet-300">Responsive</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://example.com" target="_blank" rel="noreferrer" className="rounded-full bg-neutral-700/60 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-700">See Live</a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-800">View Code</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, x: 100 }}
            className="w-full lg:w-1/2"
          >
            <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/40 shadow-lg">
              <img src={imaget4} alt="project screenshot" className="w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
