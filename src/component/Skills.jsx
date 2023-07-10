import React, { useEffect } from 'react'
import Aos from "aos";

import "../css/skills.css"
import 'aos/dist/aos.css';

import { skills } from './service/SkillsService'

function Skills() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: 'ease-in'
    })
  }, [])

  return (
    
    <div id="skills" className="section">
      <div className="skills-container" >
        <div className="heading" data-aos="zoom-in">
          <h1>Skills</h1>
          <p>My Technical level</p>
        </div>
        <div className="cards">
          {
            skills.map((skill, i) => {
              return (
                <div key={i}>
                  <div className="card " data-aos="zoom-in">
                    <img src={skill.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{skill.name}</h5>
                      <p>{skill.level}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Skills
