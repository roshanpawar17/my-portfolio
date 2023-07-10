import React from 'react'

import "../css/footer.css"


import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <div className='footer'>
      <p>&copy; 2023 Roshan Pawar. All rights reserved. </p>
      <div className="logoes">
        <a href="https://github.com/roshanpawar17/" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/roshanpawar_17/" target='_blank'><BsInstagram/></a>
        <a href="https://www.facebook.com/roshan.pawar.17" target='_blank'><BsFacebook/></a>
      </div>
      <h6>Contact More</h6>
      <p>Email : roshanpawar119@gmail.com</p>
      <p>Contact : +91 8104022916</p>
    </div>
  )
}

export default Footer
