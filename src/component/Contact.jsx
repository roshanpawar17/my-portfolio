import React, { useEffect } from 'react'
import Aos from "aos";


import "../css/contact.css"
import 'aos/dist/aos.css';


function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: 'ease-in'
    })
  }, [])

  return (
    
    <div id="contact" className="section">
      <div className="contact-container" data-aos="zoom-in">
        <div className="heading" data-aos="zoom-in">
          <h1>Get in Touch </h1>
          <p>Contact me</p>
        </div>
        <div className="contact-me-form">
          <form >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Project Name:</label>
              <textarea id="message" name="message" rows="4" placeholder='Write your project ' required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
