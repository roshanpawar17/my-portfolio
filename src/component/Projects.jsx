import React, { useEffect } from 'react'
import Aos from "aos";

import "../css/projects.css"
import 'aos/dist/aos.css';

import { projects } from './service/ProjectService'

function Projects() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: 'ease-in'
    })
  }, [])

  return (
    <div id="projects" className="section">
      <div className="project-container" >
        <div className="heading" data-aos="zoom-in">
          <h1>Projects</h1>
          <p>My Projects</p>
        </div>
        <div className="projects">


         {
            projects.map((project, i) => {
              return (
                <div key={i}>
                  <div className="card project" style={{ width: '18rem' }} data-aos="zoom-in">
                    <img src={project.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{project.pname}</h5>
                      <a href={project.link} target='_blank'>Visit</a>
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

export default Projects


