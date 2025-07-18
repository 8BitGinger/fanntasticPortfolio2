import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import sound from '../assets/audio/rockNroll.mp3';
import { BiHomeAlt, BiGhost } from 'react-icons/bi';
import { BsGithub, BsTwitterX, BsLinkedin } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../util/variants';

import Image from '../assets/images/8bitv1.png';

import start from '../assets/images/start.png';

const IntroBox = () => {
  function play() {
    const song = new Audio(sound);
    song.volume = 0.3;
    song.play();
  }

  return (
    <section className="intro-box">
      <motion.h1
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="home-name m-auto"
      >
        Ryan Fann
      </motion.h1>

      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-row"
      >
        <span className="intro-desc">I am </span>
        <TypeAnimation
          sequence={[
            'a Developer',
            3000,
            'an Engineer',
            2000,
            'a Coder',
            2000,
            'a Creator',
            2000,
            'a Photographer',
            2000,
            'a Designer',
            2000,
            'a Story-Teller',
            2000,
          ]}
          speed={50}
          className="intro-type"
          wrapper="span"
          repeat={Infinity}
        />
      </motion.div>
      <p className="intro-paragraph">
        I&apos;m a Full Stack MERN developer specializing in React & dedicated
        to crafting visually stunning, storytelling websites. My IT engineering
        experience allows me to build robust, high-performance applications. See
        my projects for examples.
      </p>
      <div className="social">
        <Link to="https://github.com/8BitGinger" target="_blank">
          <BsGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/ryanfanntastic/" target="_blank">
          <BsLinkedin />
        </Link>
        <Link to="https://twitter.com/the8bitginger" target="_blank">
          <BsTwitterX />
        </Link>
      </div>
      <div className="intro-btns">
        <Link to="/about">
          <img onClick={play} className="intro-btn1" src={start} alt="start" />
        </Link>
      </div>
    </section>
  );
};

export default IntroBox;
