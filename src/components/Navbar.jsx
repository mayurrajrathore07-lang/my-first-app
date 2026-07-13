import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between py-6">
      <Link to="/" className="navbar-brand text-xl font-semibold hover:text-cyan-300">My Portfolio</Link>
      <div className="navbar-links flex flex-wrap gap-4 text-sm text-neutral-300">
        <a href="#about" className="hover:text-cyan-300">About</a>
        <a href="#techstack" className="hover:text-cyan-300">TechStack</a>
        <a href="#projects" className="hover:text-cyan-300">Projects</a>
        <a href="#experience" className="hover:text-cyan-300">Experience</a>
        <a href="#contact" className="hover:text-cyan-300">Contact</a>
        <Link to="/resume" className="hover:text-cyan-300">Resume</Link>
      </div>
    </nav>
  );
};

export default Navbar;
