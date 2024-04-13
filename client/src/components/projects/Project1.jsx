import { useState } from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../../util/variants';
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaGithub,
} from 'react-icons/fa';

import projectList from '../../util/projectList';

function openModal(props) {
  console.log('modal open');
}

const Project1 = () => {
  return (
    <>
      {projectList.map((project) => {
        const { name, img, title, subtitle, link, git } = project;

        return (
          <motion.section
            key={name}
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            className="project-box"
            viewport={{ once: false, amount: 0.7 }}
          >
            <article className="project-card">
              <div className="title-row">
                <span className="project-title">{title}</span>
              </div>
              <div className="subtitle-row">
                <span className="subtitle-link">{subtitle}</span>
                <br />
                <a className="icon" target="_blank" rel="noreferrer" href={git}>
                  <FaGithub />
                </a>
                <button
                  className="openModal"
                  onClick={() => openModal(project)}
                >
                  <h4>Open Project - </h4>
                  <FaArrowAltCircleRight />
                </button>
              </div>
            </article>
            <img className="project-img" src={img} alt=" project screenshot" />
          </motion.section>
        );
      })}
    </>
  );
};

export default Project1;
