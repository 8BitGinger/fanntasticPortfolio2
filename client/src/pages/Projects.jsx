import { motion } from 'framer-motion';

import { fadeIn } from '../util/variants';

import '../assets/css/projects.css';
import Project2 from '../components/projects/Project2';
import backToTop from '../util/backToTop';
import ProjectOverlay from '../components/ProjectOverlay';

const Projects = () => {
  backToTop();

  return (
    <>
      <section className="project-page">
        <ProjectOverlay />
        <article className="projects">
          <Project2 />
        </article>
      </section>
    </>
  );
};

export default Projects;
