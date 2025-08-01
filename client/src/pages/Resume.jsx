import React from 'react';

import '../assets/css/resume.css';
import Spacer from '../components/Spacer';
import ResumeGraphic from '../components/ResumeGraphic';
import SkillList from '../components/SkillList';
import backToTop from '../util/backToTop';
import aboutImg from '../assets/images/about.png'; // Assuming this is the correct path for the image

const Resume = () => {
  backToTop();

  return (
    <>
      <Spacer />

      <h2 className="resume-title">Key Skills</h2>
      <section id="skills" className="skills">
        <SkillList />
        <ResumeGraphic />

      </section>
      <div className="page-picture">
                           <img
          className="headshot"
          alt="8-bit developer avatar"
          src={aboutImg}
        ></img>
      </div>

      <Spacer />
    </>
  );
};

export default Resume;
