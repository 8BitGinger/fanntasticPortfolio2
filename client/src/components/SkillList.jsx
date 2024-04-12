import skills from '../util/skills';
import { motion } from 'framer-motion';
import { fadeIn } from '../util/variants';

const SkillList = () => {
  return (
    <div className="skill-list">
      <h2>Key Skills</h2>
      {skills.map((service, index) => {
        const { name, level } = service;
        return (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="skill"
          >
            <h3>{name}</h3>
            <p>{level}</p>
            {service.value === 100 ? (
              <div className="skill-bar">
                <motion.div
                  variants={fadeIn('up', 0.3)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.3 }}
                  className="skill-level"
                  style={{ width: `${service.value}%` }}
                ></motion.div>
              </div>
            ) : (
              <div className="skill-bar">
                <motion.div
                  variants={fadeIn('right', 0.5)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.1 }}
                  className="skill-level"
                  style={{ width: `${service.value}%` }}
                ></motion.div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillList;
