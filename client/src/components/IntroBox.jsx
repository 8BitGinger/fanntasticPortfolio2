import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import sound from '../assets/audio/rockNroll.mp3';
import { BiHomeAlt, BiGhost } from 'react-icons/bi';
import { BsGithub, BsTwitterX, BsLinkedin } from 'react-icons/bs';

const IntroBox = () => {
  function play() {
    const song = new Audio(sound);
    song.volume = 0.3;
    song.play();
  }

  return (
    <section className="intro-box">
      <span className="intro-nickname">the 8BitGinger</span>
      <br></br>
      <span className="intro-desc">I am </span>{' '}
      <TypeAnimation
        sequence={[
          'a Developer',
          2000,
          'a Creator',
          2000,
          'a Designer',
          2000,
          'a Photographer',
          2000,
          'a Writer',
          2000,
          'an Artist',
          2000,
          'a Story-Teller',
          2000,
          'a Game Master',
          2000,
        ]}
        speed={50}
        className="intro-type"
        wrapper="span"
        repeat={Infinity}
      />
      <p className="intro-paragraph">
        Being a Full Stack Web Developer allows me to harness the best of both
        Front End and Back End development to create something new, dynamic, and
        exciting!
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
    </section>
  );
};

export default IntroBox;
