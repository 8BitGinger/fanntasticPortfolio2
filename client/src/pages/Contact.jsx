import { React, useRef } from 'react';

import { useForm, ValidationError } from '@formspree/react';

import { motion } from 'framer-motion';

import { fadeIn } from '../util/variants';
import DevCard from '../components/DevCard';

import '../assets/css/contact.css';

const Contact = () => {
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
          viewport={{ once: false, amount: 0.7 }}
          className="container"
        >
          <div className="contact-box">
            <div className="dev">
              <DevCard />
            </div>
            <div className="contact-form-container">
              <form
                id="contact-form"
                className=" flex-1 justify-center items-center text-center"
                onSubmit={handleSubmit}
              >
                <input
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
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
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
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
                  className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all"
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
                  className="btn btn-round-2 mt-3 mb-20 w-fit uppercase"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
