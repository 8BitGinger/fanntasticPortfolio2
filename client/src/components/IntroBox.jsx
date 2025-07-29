import React from 'react'
import WebLinks from './WebLinks'

import logo from '../assets/images/logo.png';

const IntroBox = () => {
  return (
    <section className="intro-box">
        <h1>Ryan Fann <span className='subtitle'>The 8BitGinger</span></h1>
      <h2>Building Worlds, Powering Experiences: Where Code Meets   Creativity. 
      </h2>
      <div className="intro-content">
        <div className="left column">
            <p>
                Hey there! I&apos;m all about crafting digital realms and bringing stories to life. I build everything from immersive TTRPG experiences with OBS to dynamic web apps using the MERN stack, often leveraging Python for fun and automation. With an eye for graphic design and a love for AI art, I craft compelling visual narratives that elevate every project!
            </p>
            <div className="intro-links">
            <WebLinks />
            </div>
        </div>

        <div className="right column">
            <img className="intro-image" src={logo} alt="8 Bit Ginger Logo" />
        </div>
      </div>
    </section>
  )
}

export default IntroBox

