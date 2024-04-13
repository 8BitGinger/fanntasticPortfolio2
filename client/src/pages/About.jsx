import aboutImg from '../assets/images/about.png';

import { motion } from 'framer-motion';

import { fadeIn } from '../util/variants';

import Spacer from '../components/Spacer';

import '../assets/css/about.css';
import backToTop from '../util/backToTop';
import AboutCards from '../components/AboutCards';
const About = () => {
  backToTop();

  return (
    <section className="about-page-container">
      <Spacer />
      <AboutCards />
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
