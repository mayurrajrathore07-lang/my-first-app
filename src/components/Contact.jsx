import profileImage from '../assets/profile.jpg';
const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="mb-4 text-2xl font-semibold text-white">Contact</h2>
     <img src={profileImage} alt="profile" className="mb-4" />
      <p className="text-neutral-300">You can reach me through email or LinkedIn.</p>
    </section>
  );
};

export default Contact;
