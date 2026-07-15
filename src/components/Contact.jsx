import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./contact.css";

const socials = [
  { icon: FaGithub, label: "GitHub", url: "https://github.com/yourusername" },
  { icon: FaLinkedin, label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  { icon: FaInstagram, label: "Instagram", url: "https://instagram.com/yourusername" },
  { icon: FaTwitter, label: "Twitter", url: "https://twitter.com/yourusername" },
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <p className="contact-eyebrow">Let's connect</p>
        <h2>Contact</h2>
        <p>Here It Is</p> 
        
        <p className="contact-text">
          I'm always open to new ideas, collaborations, and exciting projects.
        </p>

        <a href="........@gmail.com " className="contact-email">
         ......@gmail.com
        </a>

        <ul className="social-list">
          {socials.map(({ icon: Icon, label, url }) => (
            <li key={label}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={label}
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;