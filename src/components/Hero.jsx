const Hero = () => {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center py-16">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">Hello, I am</p>
      <h1 className="text-4xl font-bold text-white sm:text-6xl">A React Developer</h1>
      <p className="mt-6 max-w-2xl text-lg text-neutral-300">
        I build modern user interfaces with React, Tailwind CSS, and clean UX.
      </p>
    </section>
  );
};

export default Hero;
