import Image from '../assets/images/8bitv1.png';

import { motion } from 'framer-motion';

import { fadeIn } from '../util/variants';
import '../assets/css/home.css';
import IntroBox from '../components/IntroBox';
import backToTop from '../util/backToTop';

const Home = () => {
  backToTop();

  return (
    <section className="homepage-container" id="home">
      <div className="home-page">
        <motion.article
          className="home-intro"
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="home-name"
          >
            Ryan Fann
          </motion.h1>

          <IntroBox />
        </motion.article>
        {/* <motion.div
          variants={fadeIn('down', 0)}
          initial="hidden"
          whileInView={'show'}
          className="picture-box"
        >
          <img loading="lazy" className="avatar" src={Image} alt="Avatar" />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Home;
