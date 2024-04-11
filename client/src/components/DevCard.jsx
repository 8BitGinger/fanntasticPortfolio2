import avatar from '../assets/images/8bitv1.png';

const DevCard = () => {
  return (
    <div className="dev-card">
      <img src={avatar} />
      <div className="dev-overlay">
        <h2 className="dev-name">Ryan J. Fann</h2>
        <h3 className="dev-codename">8BitGinger</h3>

        <p className="dev-sub-title">Full Stack Developer</p>
        <p className="small-para">
          Turning web ideas into reality. <br />I craft clean, functional
          websites and love collaborating on new projects. <br />
          <br />
          Let&apos;s build something great together!
        </p>
      </div>
    </div>
  );
};

export default DevCard;
