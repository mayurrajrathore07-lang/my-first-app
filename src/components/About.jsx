import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-16">
      <h2 className="mb-4 text-2xl font-semibold text-white">About Me</h2>
      <img src={profileImage} alt="Profile" className="mb-4 h-32 w-32 rounded-full object-cover" />
      <p className="max-w-2xl text-neutral-300">
        I am passionate about creating polished web experiences and learning new frontend tools.
      </p>
    </section>
  );
};

export default About;
