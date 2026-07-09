import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaAlignJustify } from "react-icons/fa";

const Contact = () => {
  const iconStyle = {
    fontSize: "50px",
    color: "skyblue",
    transition: "0.3s",

  };

  return (
    <section id="contact" className="py-16">
      <h2 className="mb-4 text-2xl font-bold text-white">Contact</h2>

      <p className="text-neutral-300 mb-6">
        You can reach me through email or LinkedIn.
      </p>

      <ul
        style={{
          display: "flex",
          gap: "40px",
          listStyle: "none",
          padding: 0,
          margin: 0,
          alignItems:"center",
          justifyContent:"center"
        }}
      >


        <li>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={iconStyle} />
          </a>
        </li>

        <li>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={iconStyle} />
          </a>
        </li>

        <li>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={iconStyle} />
          </a>
        </li>

        <li> <a
            href="https://twitter.com/yourusername"  target="_blank"  rel="noopener noreferrer" >
            <FaTwitter style={iconStyle} />
          </a> </li>
      </ul>
    </section>
  );
};

export default Contact;