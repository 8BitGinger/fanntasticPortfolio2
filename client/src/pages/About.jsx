import aboutImg from '../assets/images/about.png';

import { motion } from 'framer-motion';

import { fadeIn } from '../util/variants';

const About = () => {
  return (
    <section className="about-container">
      <motion.div
        variants={fadeIn('right', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="container m-5 flex justify-between items-center"
        id="about"
      >
        <div className="lg:flex-row flex-col flex">
          <div className="flex-1  round bg-about bg-contain bg-no-repeat h-[430px] mix-blend-lighten bg-top w-1/3"></div>
          <div className="lg:w-2/3 mt-4 mx-auto">
            <h2 className="text-gradient mb-6 mt-8 ml-3 w-fit text-3xl">
              About Me.
            </h2>
            <p className="m-5 lg:text-2xl">
              In a nutshell, I can build a site from the ground up with using
              HTML5, CSS, JavaScript, and React for a beautiful and modern Front
              End. I also have experience with Node, Express, Next.js, and
              MySQL, just to name a few, to create and manage an effecient
              Back-End.
            </p>
            <p className="m-5 lg:text-2xl">
              When I'm not coding I love to spend time with my amazing
              girlfriend Adrian and our awesome Pets. I enjoy playing video
              games on my Xbox, Vibing to some new Music, and streaming my
              favorite classic Sci-Fi shows!
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="m-5 flex justify-between items-center"
      >
        <img
          className=" headshot mix-blend-lighten"
          alt="headshot"
          src={aboutImg}
        ></img>
      </motion.div>
    </section>
  );
};

export default About;
