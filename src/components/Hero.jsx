

import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative flex min-h-[75vh] items-center py-16">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_60%)] blur-3xl" />
      <div className="grid w-full max-w-6xl gap-10 md:grid-cols-[1.5fr_1fr]">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col justify-center gap-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Hello, I am</p>
          <h1 className="text-4xl font-bold text-white sm:text-6xl">Mayurraj Singh Rathore</h1>
          <p className="max-w-2xl text-lg leading-8 text-neutral-300">
            I build modern user interfaces with React, Tailwind CSS, and clean UX. I help brands launch polished products, improve interaction, and make every detail feel alive.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              See projects
            </a>
            <a href="#contact" className="text-sm font-medium text-neutral-100/80 transition hover:text-white">
              Let's talk
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[380px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-1 shadow-2xl shadow-cyan-400/10 backdrop-blur-xl"
        >
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
          <div className="absolute -right-10 bottom-4 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />
          <img src={profile} alt="Mayurraj profile" className="relative h-full w-full rounded-[1.75rem] object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
