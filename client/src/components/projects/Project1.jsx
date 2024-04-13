import { FaGithub } from 'react-icons/fa';

import projectList from '../../util/projectList';

// function openModal(props) {
//   console.log('modal open');
// }

const Project1 = () => {
  return (
    <>
      {projectList.map((project) => {
        const { name, img, title, subtitle, link, git } = project;

        return (
          <a key={name} className="project-box" href={link} target="_blank">
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
              </div>
            </article>
            <img
              loading="lazy"
              className="project-img"
              src={img}
              alt=" project screenshot"
            />
          </a>
        );
      })}
    </>
  );
};

export default Project1;
