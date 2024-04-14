import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../util/variants.js';
import { Link } from 'react-router-dom';

const FlipIntro = () => {
  return (
    <div className="homepage-container">
      <section className="body_container">
        <div className="card">
          <div className="card__content">
            <div className="card__front">
              <motion.h1
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="home-name"
              >
                Ryan Fann
              </motion.h1>{' '}
              <span className="intro_subtitle">I am </span>{' '}
              <TypeAnimation
                sequence={[
                  'a Developer',
                  2000,
                  'a Creator',
                  2000,
                  'a Designer',
                  2000,
                  'a Photographer',
                  2000,
                  'a Writer',
                  2000,
                  'an Artist',
                  2000,
                  'a Story-Teller',
                  2000,
                  'a Game Master',
                  2000,
                ]}
                speed={50}
                className="intro-type"
                wrapper="span"
                repeat={Infinity}
              />
              <div className="intro-btns">
                <Link to="/projects">
                  <button className="btn intro-btn1">My Projects</button>
                </Link>
                <Link to="/contact">
                  <button className="btn intro-btn2">Contact Me</button>
                </Link>
              </div>
            </div>
            <div className="card__back">
              <span className="home-text">
                Being a Full Stack Web Developer allows me to harness the best
                of both Front End and Back End development to create something
                new, dynamic, and exciting!
              </span>
              <p className="card__body"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlipIntro;
