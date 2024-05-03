import { React, useRef } from 'react';

import { useForm, ValidationError } from '@formspree/react';

import { motion } from 'framer-motion';

import { fadeIn } from '../util/variants';
import DevCard from '../components/DevCard';

import '../assets/css/contact.css';
import backToTop from '../util/backToTop';
import buildPic from '../assets/images/buildPic.png';

const Contact = () => {
  backToTop();

  const [state, handleSubmit, reset] = useForm('mjvnrreq');

  if (state.succeeded) {
    window.location.reload();
    return <p className="pop-up">Thanks for reaching out!</p>;
  } else {
    if (state.errors) {
      console.log(state.errors);
      return <p className="pop-up">There was an error. Please try again.</p>;
    }
  }

  return (
    <>
      <section id="contact" className="contact">
        <motion.div
          variants={fadeIn('up', 0.9)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="container"
        >
          <section className="contact-box">
            <article className="contact-form">
              <h2>Contact Me</h2>
              <form id="contact-form" onSubmit={handleSubmit}>
                <input
                  type="name"
                  placeholder="Your Name"
                  name="name"
                  id="name"
                  required={true}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  id="email"
                  required={true}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  id="message"
                  required={true}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  onClick={reset}
                  className="btn"
                >
                  Send
                </button>
              </form>
            </article>
            <article className="dev">
              <img src={buildPic} alt="me holding sign in build gear" />
            </article>
          </section>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
