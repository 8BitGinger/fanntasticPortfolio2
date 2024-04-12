import avatar from '../assets/images/about.png';

const DevCard = () => {
  return (
    <div className="dev-card">
      <div className="dev-overlay">
        <div className="dev-top">
          <img src={avatar} />
          <div className="dev-name-block">
            <h2 className="dev-name">Ryan J. Fann</h2>
            <h3 className="dev-codename">8BitGinger</h3>
          </div>
        </div>
        <p className="small-para">
          Turning web ideas into reality. <br />I craft clean, functional
          websites and love collaborating on new projects. <br />
          <br />
          <span>Let&apos;s build something great together!</span>
        </p>
      </div>
    </div>
  );
};

export default DevCard;
