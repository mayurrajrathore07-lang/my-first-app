import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaTailwind} from "react-icons/fa";


import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10,-10],
    transition: {
       duration: duration,
       ease: "linear",
       repeat: Infinity,
       repeatType: "reverse"
    }
}})


function TechStack() {
  const iconStack = [FaHtml5, FaCss3, IoLogoJavascript, FaReact, FaTailwind];
  const techStackColors=["text-orange-700", "text-cyan-600", "text-yellow-500", "text-cyan-700","text-blue-600"]
  const iconNames =["HTML","CSS","JS","REACT","TAILWIND"]
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className="my-20 text-center text-4xl">
        Tech Stack
      </motion.h2>
      <motion.div 
      whileInView={{opacity:1, x:0 }}
      initial={{opacity:0, x:-100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        {iconStack.map((Icon, i) => (
          <motion.div 
          variants={iconVariants(i*0.5+2)}
          initial="initial"
          animate="animate"
          key={i} className="rounded-2xl border-4 border-neutral-800 p-4">
            <Icon className={`text-7xl ${techStackColors[i]}` }  />
            <p className="text-center text-xs pt-1">{iconNames[i]}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TechStack;