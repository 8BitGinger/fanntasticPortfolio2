import { filterProps } from 'framer-motion';
import react from 'react';
import { FaGithub } from 'react-icons/fa';

const Modal = ({ props, onClose }) => {
  if (!props) return null; // Handle case where no project is provided

  const { name, img, title, subtitle, link, git } = props;

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={props.img} alt="screenshot" />

        <h1>{props.title}</h1>
        <h1>{props.subtitle}</h1>
        <h1>{props.link}</h1>
        <h1>{props.git}</h1>
      </div>

      <button className="close-button" onClick={() => setOpen(false)} />
    </div>
  );
};

export default Modal;
