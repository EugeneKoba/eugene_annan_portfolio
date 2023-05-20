import React from 'react'
import { IoMdHand } from "react-icons/io"
import { FaFileDownload } from "react-icons/fa"
import profilePic from "../images/IMG_4675_01.png"

const Home = () => {

  return (
    <section id='home' className="home">
        <div className="container home-container">
          <div className="home-info-container">
            <h4 className="greeting">Hey, I'm Eugene<span className='greeting-icon'><IoMdHand/></span></h4>
            <h1 className='home-title'>I am an Aspiring Web Developer.</h1>
            <p className="home-subtitle">I Build Webpages With React JS. Hire me Today.</p>
            <div className="home-btn-container">
              <a href='#projects' className='btn btn-lg my-work'>My Work</a>
              <a href='https://1drv.ms/w/s!AvUFV4_TIpoIiXa3KVetTPMd9Ave?e=Qt27KW' target="_blank" className="btn btn-lg btn-light download-cv">
                Download CV
                <span className='cv-icon'><FaFileDownload/></span>
              </a>
            </div>
          </div>
          <div className="home-img-container">
            <img src={profilePic} alt="Self Portrait" />
          </div>
        </div>
    </section>
  )
}

export default Home
