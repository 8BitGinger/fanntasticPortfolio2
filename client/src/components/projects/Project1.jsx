import React, { useState } from 'react';
import Modal from './Modal';
import projectList from '../../util/projectList'; // Import the Modal component

const Project1 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setModalOpen(true);
    setSelectedProject(project);
    return (
      <div className="modal">
        <div className="modal-content">
          <img src={selectedProject.img} alt="screenshot" />
          <h1>{selectedProject.title}</h1>
          <h1>{selectedProject.subtitle}</h1>
          <h1>{selectedProject.link}</h1>
          <h1>{selectedProject.git}</h1>
        </div>
        <button className="close-button" onClick={closeModal} />
      </div>
    );
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      {projectList.map((project) => {
        const { name, img, title, subtitle, link, git } = project;

        return (
          <button
            key={Date.now() + name}
            className="project-box"
            onClick={() => openModal(this.project)}
          >
            <img
              loading="lazy"
              className="project-img"
              src={img}
              alt="project screenshot"
            />
          </button>
        );
      })}
      {modalOpen && <Modal project={selectedProject} onClose={closeModal} />}
    </>
  );
};

export default Project1;
