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
      <section id="skills" className="skills">
        <Spacer />
        <SkillList />
        <ResumeGraphic />
      </section>
      <Spacer />
    </>
  );
};

export default Resume;
