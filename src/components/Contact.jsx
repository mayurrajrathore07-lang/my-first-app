import { FaGithub } from 'react-icons/fa';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="mb-4 text-2xl font-bold text-white">Contact</h2>
    
      <p className="text-neutral-300">You can reach me through email or LinkedIn.</p>
      
      <ul className="social-icons">
  <li>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
  </li>

  <li>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
  </li>

  <li>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
  </li>

  <li>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
  </li>
</ul>

    </section>
  );
};

export default Contact;
