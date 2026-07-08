import React from "react";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaWind } from "react-icons/fa";

const techItems = [
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <FaWind /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
];

const TechStack = () => {
  return (
    <section className="py-16">
      <h2 className="mb-6 text-2xl font-semibold text-white">Tech Stack</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {techItems.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/5 p-6 transition-all hover:bg-cyan-400/10 hover:border-cyan-400/60"
          >
            <span className="mb-3 text-4xl text-cyan-300">{item.icon}</span>
            <span className="text-center text-sm font-medium text-cyan-300">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
