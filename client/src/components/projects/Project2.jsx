import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import projectList from '../../util/projectList';
import Modal from './Modal';

const openModal = (props) => {
  console.log('modal open');
  setModalOpen(true);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h1>{props.title}</h1>
        <h1>{props.subtitle}</h1>
        <h1>{props.link}</h1>
        <h1>{props.git}</h1>
        <button>X</button>
      </div>
    </div>
  );
};

const Project1 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {projectList.map((project) => {
        const { name, img, title, subtitle, link, git } = project;

        return (
          <button
            key={name}
            className="project-box"
            onClick={() => {
              openModal(project);
            }}
            props={project}
          >
            <img
              loading="lazy"
              className="project-img"
              src={img}
              alt=" project screenshot"
            />
          </button>
        );
      })}
    </>
  );
};

export default Project1;
