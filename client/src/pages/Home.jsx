import Image from '../assets/images/8bitv1.png';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn } from '../util/variants';
import '../assets/css/home.css';
import sound from '../assets/audio/rockNroll.mp3';

const Home = () => {
  function play() {
    const song = new Audio(sound);
    song.volume = 0.4;
    song.play();
  }

  return (
    <section className="homepage-container" id="home">
      <div className="home-page">
        <div className="home-intro">
          <motion.h1
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="home-name"
          >
            Ryan Fann
          </motion.h1>
          <div className="intro-box">
            <span className="intro-nickname">the 8BitGinger</span>
            <br></br>
            <span className="intro-desc">I am </span>{' '}
            <TypeAnimation
              sequence={[
                'a Developer',
                2000,
                'a Designer',
                2000,
                'a Photographer',
                2000,
                'a Creator',
                2000,
                'an Artist',
                2000,
                'a Story-Teller',
                2000,
                'a Gamer',
                2000,
              ]}
              speed={50}
              className="intro-type"
              wrapper="span"
              repeat={Infinity}
            />
            <p className="intro-paragraph">
              Being a Full Stack Web Developer allows me to harness the best of
              both Front End and Back End development to create something new,
              dynamic, and exciting!
            </p>
            <div className="intro-btns">
              <Link to="/projects">
                <button onClick={play} className="btn intro-btn1">
                  My Projects
                </button>
              </Link>
              <Link to="/contact">
                <button onClick={play} className="btn intro-btn2">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
        <motion.div
          variants={fadeIn('down', 0)}
          initial="hidden"
          whileInView={'show'}
          className="picture-box"
        >
          <img className="avatar" src={Image} alt="Avatar" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
