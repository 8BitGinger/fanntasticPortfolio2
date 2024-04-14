import React from 'react';
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaGlobe,
} from 'react-icons/fa';

const ProjectOverlay = () => {
  return (
    <div className="project-overlay">
      <div className="top-right-overlay">
        <div className="scroll-title-tilt">
          <h3>
            Scroll to See More <FaArrowAltCircleDown />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverlay;
