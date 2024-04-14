import { motion } from 'framer-motion';

import { fadeIn } from '../util/variants';

import '../assets/css/weather.css';
import '../assets/css/projects.css';
import Project1 from '../components/projects/Project1';
import backToTop from '../util/backToTop';
import ProjectOverlay from '../components/ProjectOverlay';
import WeatherCard from '../components/WeatherCard';

function scrollPictures() {
  const project = document.querySelector('.projects');
  project.scrollTop += 272;
}

const Projects = () => {
  backToTop();

  return (
    <>
      <motion.section
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        className="project-page"
        viewport={{ once: false, amount: 0.7 }}
      >
        <article className="projects">
          <Project1 />
        </article>

        <motion.button
          variants={fadeIn('up', 0.9)}
          initial="hidden"
          whileInView={'show'}
          className="scroll-pictures btn"
          viewport={{ once: false, amount: 0.3 }}
          onClick={scrollPictures}
        >
          Scroll
        </motion.button>
      </motion.section>
      {/* <WeatherCard /> */}

      <ProjectOverlay />
    </>
  );
};

export default Projects;
