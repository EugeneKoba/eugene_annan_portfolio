import React from 'react'
import { useMyHook } from "./NewContext"
import aboutPic from "../images/IMG_4806_01.jpg"
import languages from "./Data/languages.json"
import { FaFileDownload } from "react-icons/fa"

const About = () => {
  // Importing transition variables
  const { onAboutScroll, aboutVisible } = useMyHook()

  return (
    <section id='about' className="about">
        <div className="container about-container">
          <div className="about-img-container">
            <div className="about-img-wrap">
              <img src={aboutPic} alt="Portrait-Picture"/>
            </div>
          </div>
          <div className="about-info-container">
            <h1 className='title about-title'>About Me</h1>
            <p className="sub-title about-paragraph">Here is a list of my programming languages:</p>
            <div ref={onAboutScroll} className="languages-container">
              {languages.map((i) => {
                return (
                  <div className={aboutVisible ? "language-capsule show" : "language-capsule hide"} key={i.id} id={i.id}>
                    <img src={i.link} alt="language"/>
                    <span className="language-text">{i.title}</span>
                  </div>
                )
              })}
            </div>
            <p className="sub-title about-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum accusamus debitis necessitatibus velit libero architecto eveniet unde soluta recusandae dolorum, sapiente neque est, repudiandae, quia eos nihil! Qui alias unde doloribus maxime distinctio corrupti aut, eaque doloremque blanditiis, explicabo quam?</p>
            <div className="about-btn-container">
              <a href='https://1drv.ms/w/s!AvUFV4_TIpoIiXa3KVetTPMd9Ave?e=Qt27KW' target="_blank" className="btn btn-lg download-cv">
                <span>Download CV</span>
                <span className='cv-icon'><FaFileDownload/></span>
              </a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About