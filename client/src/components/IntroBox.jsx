import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import sound from '../assets/audio/rockNroll.mp3';
import { BiHomeAlt, BiGhost } from 'react-icons/bi';
import { BsGithub, BsTwitterX, BsLinkedin } from 'react-icons/bs';

import start from '../assets/images/start.png';

const IntroBox = () => {
  function play() {
    const song = new Audio(sound);
    song.volume = 0.3;
    song.play();
  }

  return (
    <section className="intro-box">
    
      <span className="intro-desc">Character Roles: </span>{' '}
      <TypeAnimation
        sequence={[
          'Developer',
          3000,
          'Engineer',
          2000,
          'Coder',
          2000,
          'Creator',
          2000,
           'Photographer',
          2000,
          'Designer',
          2000,
          'Story-Teller',
          2000,
      
        ]}
        speed={50}
        className="intro-type"
        wrapper="span"
        repeat={Infinity}
      />
      <p className="intro-paragraph">
       Level up! By mastering both Front End and Back End development you gained the Full Stack Power-up. This allows you to build dynamic, exciting, and entirely new experiences.
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
