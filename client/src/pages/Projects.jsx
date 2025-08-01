import React from 'react';
import Marquee from 'react-fast-marquee';
import '../assets/css/projects.css'; // Assuming you have a CSS file for styling

// Your array of project data
import projectList from '../util/projectList';


const ProjectBlock = ({ img, title, link }) => (
  <a href={link} className="project-block" target='_blank' rel="noopener noreferrer">
    <div 
      className="project-image"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="project-link-overlay">
        <span>{title}</span>
      </div>
    </div>
  </a>
);

const Projects = () => {
  return (
    <section className="marquee-container">
      {/* Top line: Left to right */}
      <Marquee speed={180} gradient={false}>
        {projectList.map((project, index) => (
          <ProjectBlock key={index} {...project} />
        ))}
      </Marquee>

      <Marquee speed={100} direction="right" pauseOnHover={true} gradient={false}>
        {projectList.map((project, index) => (
          <ProjectBlock key={index} {...project} />
        ))}
      </Marquee>

      {/* Bottom line: Left to right */}
      <Marquee speed={180} gradient={false}>
        {projectList.map((project, index) => (
          <ProjectBlock key={index} {...project} />
        ))}
      </Marquee>


    </section>
  );
};

export default Projects;