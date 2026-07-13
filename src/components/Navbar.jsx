import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between py-6">
      <div className="navbar-brand text-xl font-semibold hover:text-cyan-300">My Portfolio</div>
      <div className="navbar-links flex gap-4 text-sm text-neutral-300">
        <a href="#about" className="hover:text-cyan-300">About</a>
        <a href="#TechStack.jsx" className="hover:text-cyan-300">TechStack</a>
        <a href="#projects" className="hover:text-cyan-300">Projects</a>
        <a href="#Experience" className="hover:text-cyan-300">Experience</a>
        <a href="#contact" className="hover:text-cyan-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
