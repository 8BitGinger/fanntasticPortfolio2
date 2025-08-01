import { fadeIn } from '../util/variants';

import { motion } from 'framer-motion';
import '../assets/css/about.css';
import legoAvatar from '../assets/images/profHeadshot.jpg';
import work from '../assets/images/Work2.jpg';
import gadget from '../assets/images/gadget.jpg';

const AboutCards = () => {
  return (
    <>
      <motion.article
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="about-container"
        id="about"
      >
        <h2>About Me.</h2>
        <div className="about-text">
          <div className="para-1">
            <img loading="lazy" src={legoAvatar} alt="lego headshot" />
            <p className="about-1">
              Forget Legos, websites are my building blocks! I craft beautiful
              and modern front ends using HTML5, CSS, React and JavaScript,
              lately throwing Python into the mix. I also have mastery over
              Node.js, Express, Next.js, and MySQL, to name a few, allowing me
              to design and manage an efficient back end that makes those
              websites tick. MERN Stack!
            </p>
          </div>
        </div>
      </motion.article>

      <motion.article
        variants={fadeIn('right', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="about-container"
        id="about"
      >
        <h2>Professional Skills</h2>
        <div className="about-text">
          <div className="para-2">
            <p className="about-2">
              Currently, I leverage my technical expertise as an IT Engineer for KAMC and KLBK TV stations. From selling cutting-edge IT equipment at CompUSA to providing essential tech support for Apple and DirecTV, I've always been immersed in the world of technology, however. Through it all, I discovered my ultimate passion: the transformative power of code!
              
            </p>
            <img loading="lazy" src={work} alt="us at the beach" />
          </div>
        </div>
      </motion.article>

      <motion.article
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="about-container"
        id="about"
      >
        <h2>Hobbies and Interests</h2>
        <div className="about-text">
          <div className="para-2">
            <img loading="lazy" src={gadget} alt="us at the beach" />
            <p className="about-2">
              When I need a coding detox, you might find me conquering virtual worlds
              on my Xbox/Switch, delving into fantastical tales with friends through
              tabletop RPGs, or when I need a
              dose of nostalgia: Streaming classic sci-fi Movies and Tv Shows!
            </p>
            
          </div>
        </div>
      </motion.article>
    </>
  );
};

export default AboutCards;
