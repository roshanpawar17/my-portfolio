import React, { useEffect } from 'react';
import Aos from "aos";

import "../css/about.css"
import 'aos/dist/aos.css';

import profile from "../assets/profile.jpg"

import { FaBuffer } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1100,
      easing: 'ease-in'
    })
  }, [])

  return (

    <section id="about" className="section">
      <div className="about-container" >
        <div className="profile edu-cont" >
          <img src={profile} alt="profile" data-aos="zoom-in" />
        </div>
        <br />
        <h5 data-aos="zoom-in">Introduction</h5>
        <h1 data-aos="zoom-in">Overview</h1>
        <p data-aos="zoom-in">I'm a skilled Web developer.  
          I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
        <br />
        <div className="education" data-aos="zoom-in">
          <div className="education-info edu-cont">
            <div className="icon">
              <FaBuffer />&nbsp;&nbsp;
              <h4>Education</h4>
            </div>
           
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Course</th>
                  <th scope="col">University/Board</th>
                  <th scope="col">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><GrCertificate /></th>
                  <td>Batchelor Of Science In Information Technology (Pursuing)</td>
                  <td>Mumbai University</td>
                  <td>2023-24</td>
                </tr>
                <tr>
                  <th scope="row"><GrCertificate /></th>
                  <td>Higher Secondary Certificate</td>
                  <td>Maharashtra State Board</td>
                  <td>2021</td>
                </tr>
                <tr>
                  <th scope="row"><GrCertificate /></th>
                  <td>School Secondary Certificate</td>
                  <td>Maharashtra State Board</td>
                  <td>2019</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section >
  )
}

export default About
