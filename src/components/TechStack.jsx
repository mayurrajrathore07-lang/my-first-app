const TechStack = () => {
  return (
    <section className="py-16">
      <h2 className="mb-6 text-2xl font-semibold text-white">Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'].map((item) => (
          <span key={item} className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
