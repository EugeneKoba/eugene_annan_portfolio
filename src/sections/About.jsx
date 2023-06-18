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
            <p className="sub-title about-paragraph">Here is a list of my programming languages, all Intermediate:</p>
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
            <p className="sub-title about-paragraph">I am an aspiring Front-End Developer, based in London, England, with 2 years of experience within the Data Analytics & Insurance field. I am making a transition into Web/Software Development. I have previous experience with Python & SQL, and have built up my HTML, CSS, Javascript skills over the last year by working with clients to build up several live website projects. I am a team player who thrives in collaberating with a multitude of technical & general teams.</p>
            <div className="about-btn-container">
              <a href='https://1drv.ms/w/s!AvUFV4_TIpoIiXa3KVetTPMd9Ave?e=Qt27KW' target="_blank" className="btn btn-lg download-cv-two">
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