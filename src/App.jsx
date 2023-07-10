import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Home from './component/Home'
import Loader from './component/Loader'


function App() {

  const [show, setShow] = useState(true);

  function loading(){
    setShow(false)
  }

  useEffect(()=>{
    setTimeout(()=>{
      loading();
    },3000)
  })

  if(show){
    return <Loader/>
  }
  
  return (
    <>
      
        <div className="container-1">
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/> 
            <Footer/>
        </div>

      
    </>
  )
}

export default App
