import aboutImg from '../assets/images/about.png';

import { motion } from 'framer-motion';

import { fadeIn } from '../util/variants';

import Spacer from '../components/Spacer';

import '../assets/css/about.css';

const About = () => {
  return (
    <section className="about-page-container">
      <Spacer />
      <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="about-container"
        id="about"
      >
        <div className="about-text">
          <h2>About Me.</h2>
          <p className="about-1">
            In a nutshell, I can build a website from the ground up using HTML5,
            CSS, JavaScript, and sometimes React for a beautiful and modern
            Front End. I also have experience with Node, Express, Next.js, and
            MySQL, just to name a few, to create and manage an efficient
            Back-End.
          </p>
          <p className="about-2">
            When I&apos;m not coding I love to spend time with my amazing
            girlfriend Adrian and our awesome Pets. I enjoy playing video games
            on my Xbox, Vibing to some new Music, and streaming my favorite
            classic Sci-Fi shows!
          </p>
          <h2>Hobbies and Interests</h2>
          <div className="hobbies">
            <div className="word">
              <div className="tilt-left">Photography</div>

              <div className="tilt-right">Tech</div>
              <br />
              <div className="noTilt">Web Design</div>
              <br />
              <div className="tiltUp-left">Gaming</div>

              <div className="tiltUp-right">Creation</div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.5 }}
        className="about-picture"
      >
        <img
          className="headshot"
          alt="8-bit developer avatar"
          src={aboutImg}
        ></img>
      </motion.div>
      <Spacer />
    </section>
  );
};

export default About;
