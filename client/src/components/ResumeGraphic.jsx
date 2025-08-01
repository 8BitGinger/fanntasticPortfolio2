import { motion } from 'framer-motion';
import { fadeIn } from '../util/variants';
import imgSkill from '../assets/images/services.png';
import ResumeDoc from '../assets/downloads/Resume2025.pdf';
import htmlImg from '../assets/images/html.png';
import cssImg from '../assets/images/css.png';
import javascriptImg from '../assets/images/js.png';
import reactImg from '../assets/images/react.png';

const ResumeGraphic = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.5)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
      className="graphic-box"
    >
      <a href={ResumeDoc} rel="noreferrer" target="_blank">
        <button className="btn resume-icon btn-resume">
          View<br></br>Full<br></br>Resume
        </button>
      </a>
      <img
        loading="lazy"
        className="resume-icon-alt"
        src={htmlImg}
        alt="html logo"
      />
      <img
        loading="lazy"
        className="resume-icon"
        src={cssImg}
        alt="html logo"
      />
      <img
        loading="lazy"
        className="resume-icon-alt"
        src={javascriptImg}
        alt="html logo"
      />
      <img
        loading="lazy"
        className="resume-icon"
        src={reactImg}
        alt="html logo"
      />
      <img
        loading="lazy"
        className="resume-icon-alt"
        alt="round skills"
        src={imgSkill}
      ></img>
    </motion.div>
  );
};

export default ResumeGraphic;
