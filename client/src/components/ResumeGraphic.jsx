import { motion } from 'framer-motion';
import { fadeIn } from '../util/variants';
import imgSkill from '../assets/images/services.png';
import ResumeDoc from '../assets/downloads/devResume-v5-2024.pdf';

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
        <button className="btn btn-resume">
          View<br></br>Full<br></br>Resume
        </button>
      </a>
      <img className="services" alt="round skills" src={imgSkill}></img>
    </motion.div>
  );
};

export default ResumeGraphic;
