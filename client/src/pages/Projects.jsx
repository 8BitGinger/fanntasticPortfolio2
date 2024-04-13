import { motion } from 'framer-motion';

import { fadeIn } from '../util/variants';

import '../assets/css/projects.css';
import Project1 from '../components/projects/Project1';
import backToTop from '../util/backToTop';

const Projects = () => {
  backToTop();

  return (
    <section className="project-page">
      <h2>Projects</h2>
      <div className="projects">
        <Project1 />
      </div>

      <motion.div
        variants={fadeIn('up', 0.9)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        onClick={backToTop()}
      >
        <button className="btn btn-top" onClick={() => backToTop()}>
          Back to Top
        </button>
      </motion.div>
    </section>
  );
};

export default Projects;
