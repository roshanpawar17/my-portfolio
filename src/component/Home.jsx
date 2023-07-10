import React from 'react'


import "../css/home.css"

import { AiOutlineArrowDown } from "react-icons/ai";


import Typewriter from 'typewriter-effect';


function Home() {

  function scrollTo() {
    screen.width > "768"?window.scrollTo({ top: 580, behavior: 'smooth' }):window.scrollTo({ top: 600, behavior: 'smooth' });
  }

  return (
   
    <section id="home" className="section ">
      <div className="home-container">
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-hand-medium-skin-tone-wave-waving-37774.png?f=avif&w=256" alt="" />
        &nbsp;
        <div className='info'>
          <h2>Hello, I'M <span className="name" >Roshan</span></h2>
          <div className="type-writer">
              <Typewriter
                options={{
                  strings: ['--- Web Developer ---'],
                  autoStart: true,
                  loop: true,
                }}
              />
          </div>
          <br />
          <p>My expertise lies in both front-end and back-end development. On the front-end, I specialize in HTML, CSS, JavaScript and React Js & On the back-end, I specialize in Java and its framework Hibernate, Spring and Spring-Boot </p>
        </div>
        <div className="scroll" onClick={scrollTo}>
            <div className="scroll-arrow">
              <AiOutlineArrowDown />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Home
