import aboutImg from '../assets/images/about.png';

import { motion } from 'framer-motion';

import { fadeIn } from '../util/variants';

import Spacer from '../components/Spacer';

import '../assets/css/about.css';
import backToTop from '../util/backToTop';
import legoAvatar from '../assets/images/lego-avatar.jpg';
import beachUs from '../assets/images/beachUs.jpg';

const About = () => {
  backToTop();

  return (
    <section className="about-page-container">
      <Spacer />
      <motion.div
        variants={fadeIn('right', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="about-container"
        id="about"
      >
        <div className="about-text">
          <h2>About Me.</h2>
          <div className="para-1">
            <img loading="lazy" src={legoAvatar} alt="lego headshot" />
            <p className="about-1">
              Forget Legos, websites are my building blocks! I craft beautiful
              and modern front ends using HTML5, CSS, and JavaScript, sometimes
              even throwing React into the mix. But my skills extend beyond the
              &apos;n Node.js, Express, Next.js, and MySQL, allowing me to
              design and manage efficient back ends that make websites tick.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="about-container"
        id="about"
      >
        <div className="about-text">
          <h2>Hobbies and Interests</h2>
          <div className="para-2">
            <p className="about-2">
              Outside the world of code, I unwind with my fantastic girlfriend,
              Adrian, and our awesome furry &amp; feathery companions. When I
              need a coding detox, you might find me conquering virtual worlds
              on my Xbox or delving into fantastical tales with friends through
              tabletop RPGs. I&apos;m often vibin&apos; to one of my
              meticulously crafted playlists on Apple Music, and when I need a
              dose of nostalgia, I love streaming classic sci-fi shows.
            </p>
            <img loading="lazy" src={beachUs} alt="us at the beach" />
          </div>
          {/* <div className="hobbies">
            <div className="word">
              <div className="tilt-left">Photography</div>

              <div className="tilt-right">Tech</div>
              <br />
              <div className="noTilt">Web Design</div>
              <br />
              <div className="tiltUp-left">Gaming</div>

              <div className="tiltUp-right">Creating</div>
            </div>
          </div> */}
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
