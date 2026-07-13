const ResumePage = () => {
  return (
    <div className="min-h-screen px-6 py-20 text-neutral-200">
      <div className="mx-auto max-w-4xl rounded-2xl border border-cyan-500/20 bg-neutral-900/70 p-8 shadow-2xl shadow-cyan-500/10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">Resume</p>
        <h1 className="mb-6 text-4xl font-semibold text-white">My Resume</h1>
        <p className="mb-6 text-lg leading-8 text-neutral-300">
         My Name Is Mayurraj Singh Rathoe  This is a my resume page . here all the my skill and education is mention .
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-cyan-300">Experience</h2>
            <ul className="list-disc space-y-2 pl-5 text-neutral-300">
              <li>Frontend Developer</li>
              <li>React and Tailwind projects</li>
              <li>UI/UX focused portfolio work</li>
            </ul>
    </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-cyan-300">Skills</h2>
            <ul className="list-disc space-y-2 pl-5 text-neutral-300">
              <li>React</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
