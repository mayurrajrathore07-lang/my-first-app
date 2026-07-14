import React from "react";
import { motion } from "framer-motion";
import imaget4 from "../assets/imaget4.jpg";
import image22 from "../assets/image22.png";
import image from "../assets/image.png";
import image33 from "../assets/image33.png";
import image44 from "../assets/image44.png";
import imaget1 from "../assets/imaget1.png";


const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="mb-8 text-4xl font-semibold text-center text-white">Frontend Projects</h2>
      <p className="mx-auto max-w-2xl text-center text-neutral-400"> Most Off The Projects built with ( html,css js) some of with React, Tailwind CSS and other modern tools. this project included the learn project and task project of the internship period</p>
      

      <div className="mt-12 space-y-10">
        <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, x: -100 }}
            className="w-full lg:w-1/2"
          >
            <div className="px-2 lg:px-6">
              <p className="inline-block rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-300">porfolio website</p>
              <h3 className="mt-6 text-2xl font-semibold text-white">learn portfolio web with AI </h3>
              <p className="mt-3 text-neutral-300">A learn portfolio web with AI using HTML/CSS/JS as a learning practice project </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-purple-300">React</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">HTML</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">CSS</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-violet-300">JavaScript</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-sky-300">Tailwind CSS</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://mayurrajrathore07-lang.github.io/my-project-1/" target="_blank" rel="noreferrer" className="rounded-full bg-neutral-700/60 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-700">See Live</a>
                <a href="https://github.com/mayurrajrathore07-lang/my-project-1.git" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-800">View Code</a>
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
                <a href="https://mayurrajrathore07-lang.github.io/task2-nexora/" target="_blank" rel="noreferrer" className="rounded-full bg-neutral-700/60 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-700">See Live</a>
                <a href="https://github.com/mayurrajrathore07-lang/my-first-app.git" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-800">View Code</a>
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
              <img src={image} alt="project screenshot" className="w-full object-cover" />
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
              <p className="inline-block rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-300">school website</p>
              <h3 className="mt-6 text-2xl font-semibold text-white">A Responsive school website</h3>
              <p className="mt-3 text-neutral-300">A polished school website built with React, Tailwind CSS and Framer Motion with smooth animations and responsive layout.</p>
            
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-purple-300">html,js</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">css</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-violet-300">Responsive</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://mayurrajrathore07-lang.github.io/task-3-school/" target="_blank" rel="noreferrer" className="rounded-full bg-neutral-700/60 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-700">See Live</a>
                <a href="https://github.com/mayurrajrathore07-lang/task-3-school.git" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-800">View Code</a>
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
              <img src={image33} alt="project screenshot" className="w-full object-cover" />
            </div>
          </motion.div>
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
              <p className="inline-block rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-300">Brand based website</p>
              <h3 className="mt-6 text-2xl font-semibold text-white">A responsive coffee brand website</h3>
              <p className="mt-3 text-neutral-300">A polished coffee brand website built with React, Tailwind CSS and Framer Motion with smooth animations and responsive layout.</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-purple-300">React</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Tailwind</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-violet-300">Responsive</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://mayurrajrathore07-lang.github.io/task1-clemo/" target="_blank" rel="noreferrer" className="rounded-full bg-neutral-700/60 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-700">See Live</a>
                <a href="https://github.com/mayurrajrathore07-lang/task1-clemo.git" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-800">View Code</a>
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
              <img src={image44} alt="project screenshot" className="w-full object-cover" />
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
              <p className="inline-block rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-300">E-commerce web</p>
              <h3 className="mt-6 text-2xl font-semibold text-white">A Responsive Amazon Clone </h3>
              <p className="mt-3 text-neutral-300">A polished portfolio website built with React, Tailwind CSS and Framer Motion with smooth animations and responsive layout.</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-purple-300">React</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Tailwind</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-violet-300">Responsive</span>
         
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://mayurrajrathore07-lang.github.io/my-project-4-amazone-clone/" target="_blank" rel="noreferrer" className="rounded-full bg-neutral-700/60 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-700">See Live</a>
                <a href="https://github.com/mayurrajrathore07-lang/my-project-4-amazone-clone.git" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-800">View Code</a>
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
              <img src={imaget1} alt="project screenshot" className="w-full object-cover" />
            </div>
          </motion.div>
        </div>
</div>

        <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, x: -100 }}
            className="w-full lg:w-1/2"
          >
            <div className="px-2 lg:px-6">
              <p className="inline-block rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-300">service based website</p>
              <h3 className="mt-6 text-2xl font-semibold text-white">a nexora website based on software services</h3>
              <p className="mt-3 text-neutral-300">A Nexora Is A Software Service Based Platform which provide different type of services like web development. design ,etc</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-purple-300">React</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Tailwind</span>
                <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-violet-300">Responsive</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://mayurrajrathore07-lang.github.io/task2-nexora/" target="_blank" rel="noreferrer" className="rounded-full bg-neutral-700/60 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-700">See Live</a>
                <a href="https://github.com/mayurrajrathore07-lang/task2-nexora.git" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-800">View Code</a>
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
              <img src={image22} alt=" screenshot" className="w-full object-cover" />
            </div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
};

export default Projects;
