import { motion } from "framer-motion";
import profileImage from '../assets/profile.jpg';
function About() {
  return (
    <section className="about">

      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={profileImage} alt="Profile" />
      </motion.div>

      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        
      >
        <h2>About Me</h2>
        <p>Your content...</p>
      </motion.div>

    </section>
  );
}

export default About;