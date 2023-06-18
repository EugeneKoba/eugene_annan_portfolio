import React from 'react'

const ModalData = (props) => {
        // Passing in props, to ensure the modal that appears contains the information that corresponds to the project clicked
        const { data } = props
        
    return (
    <>
        <div className="modal-box">
            <div className="modal-img-container">
                <img src={data.img} alt="project" />
            </div>
            <div className="modal-info-container">
                <h3 className="project-title">{data.title}</h3>
                <p className="project-desc">
                    {data.description}
                </p>
                <div className="project-skills">
                    {data.skills.map((j) => {
                        return (
                            <span className="skill">{j}</span>
                        )
                    })}
                </div>
                <div className="project-btn-container">
                    <a href={data.live_link} className="btn btn-light">View</a>
                    <a href={data.github_link} className="btn">Github</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModalData