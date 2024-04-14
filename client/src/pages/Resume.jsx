import React from 'react';

import '../assets/css/resume.css';
import Spacer from '../components/Spacer';
import ResumeGraphic from '../components/ResumeGraphic';
import SkillList from '../components/SkillList';
import backToTop from '../util/backToTop';

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
      <Spacer />
    </>
  );
};

export default Resume;
