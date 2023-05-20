import React, { useState } from 'react'
import { useMyHook } from "./NewContext"
import projects_list from "./Data/projects_list.json"
import Modal from "./Modal"

const Projects = () => {

  // Importing openModal State
  const { openModal, setOpenModal } = useMyHook()

  // State to pass down correct project into modal, using its ID
  const [activeId, setActiveId] = useState(null)

  // Function to 1) open Modal & 2) Set the ID of the project that was clicked on
  const toggleModal = (event) => {
    setOpenModal(true)
    const activeProject = (event.target.id) - 1
    setActiveId(activeProject)
  }

  return (
    <section id='projects' className="projects">
        <div className="container">
            <h1 className='title'>Projects</h1>
            <p className="sub-title">Take a look at some of the Front-End Projects I am currently working on for my clients. Click on each project to view more information.</p>
            {projects_list.map((i) => {
              return (
                <div key={i.id} id={i.id} className="project-container">
                  <div className="project-card">
                    <div className="project-img-container">
                      <img src={i.img} alt="project-img" id={i.id} onClick={toggleModal}/>
                    </div>
                    <div className="project-info-container">
                      <h3 className="project-title">{i.title}</h3>
                      <p className="project-desc">
                        {`${i.description.substring(0, 110)}... `}
                        <span className="read-more" id={i.id} onClick={toggleModal} >Read More</span>
                      </p>
                      <div className="project-skills">
                        {i.skills.map((j) => {
                          return (
                            <span className="skill">{j}</span>
                          )
                        })}
                      </div>
                      <div className="project-btn-container">
                        <a href={i.live_link} target="_blank" className="btn btn-md btn-light">
                          View</a>
                        <a href={i.github_link} target="_blank" className="btn btn-md">GitHub</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* Section for Modal Portal */}
            <Modal data={projects_list[activeId]} open={openModal} onClose={() => setOpenModal(false)}/>
        </div>
    </section>
  )
}

export default Projects