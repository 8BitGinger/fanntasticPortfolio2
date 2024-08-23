import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosCloseCircle } from 'react-icons/io';

import { motion } from 'framer-motion';

import { fadeIn } from '../../util/variants';

import projectList from '../../util/projectList';

const Project2 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // Optional for modal content

  const openModal = (project) => {
    console.log('modal open');
    setModalOpen(true);
    setSelectedProject(project); // Optional to access project data in modal
  };

  const closeModal = () => {
    console.log('modal closed');
    setModalOpen(false);
    setSelectedProject(null); // Optional
  };

  return (
    <>
      {projectList.map((project) => {
        const { name, img, title, subtitle, link, git, description } = project;

        return (
          <motion.button
            variants={fadeIn('up', 0.7)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            key={Date.now() + name}
            className="project-box"
            onClick={() => openModal(project)}
          >
            <img
              loading="lazy"
              className="project-img"
              src={img}
              alt="project screenshot"
            />
          </motion.button>
        );
      })}

      {modalOpen && ( // Conditionally render modal when open
        <motion.div
          className="modal"
          variants={fadeIn('in', 0.1)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="modal-content">
            <div className="modal-image">
              <img src={selectedProject?.img} alt="screenshot" />{' '}
            </div>

            <div className="modal-text">
              <h2>{selectedProject?.title}</h2>
              <h3>{selectedProject?.subtitle}</h3>
              <p> {selectedProject?.description}</p>
              <div className="modal-links">
                <Link to={selectedProject?.link} target="blank">
                  Live Project
                </Link>
                <Link to={selectedProject?.git} target="blank">
                  GitHub Repo
                </Link>
              </div>
            </div>
          </div>
          <button className="close-button" onClick={closeModal}>
            <IoIosCloseCircle />
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Project2;
