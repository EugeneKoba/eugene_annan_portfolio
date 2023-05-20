import React, { useState, useEffect } from 'react'
import prev_icon from "../icons/prev_icon.png"
import next_icon from "../icons/next_icon.png"
import { BsFillChatQuoteFill } from "react-icons/bs"
import carousel_data from "./Data/carousel_data.json"

const Carousel = () => {

  // 'index' state to determine what slide gets the 'activeSlide/ class
  const [index, setIndex] = useState(0)

  // Function (useEffect) to automatically increment 'index' state
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3500)
    // cleanup Function
    return () => {
      clearInterval(slider)
    }
  }, [index])

  // Function to stop 'index' state from being larger than the data array length (3)
  function resetIndex(currIndex) {
    if (currIndex < 0) {
        return setIndex(carousel_data.length-1)
    }
    else if (currIndex === carousel_data.length) {
        return setIndex(0)
    }
    else {
        return currIndex
    }
  }
  // Calling function
  resetIndex(index)

  // Final Output
  const output = carousel_data.map((i, personIndex) => {
    // The 'position' variable will determine what card gets the 'activeSlide' class
    let position = 'prevSlide'
    // If statement to determine what card gets which class, based on the 'index' state
    if (personIndex === index) {
        position = "activeSlide"
    }
    else if (personIndex === index-1 || (index === 0 && personIndex == carousel_data.length-1)) { 
        position = "prevSlide"
    }
    else {
        position = 'nextSlide'
    }
    return (
      <div key={i.id} id={i.id} className={`carousel-box ${position} ${personIndex}`}>
        <div className="carousel-img-container">
          <img src={i.img} alt={i.name} />
        </div>
        <div className="carousel-info-container">
          <h4 className="carousel-name">{i.name}</h4>
          <p className="carousel-job">{i.job}</p>
          <p className="carousel-line">"{i.line}"</p>
          <span className="speech-icon"><BsFillChatQuoteFill/></span>
        </div>
      </div>
    )
  })

  return (
    <section id='carousel' className="carousel">
        <div className="container">
            <h1 className='title'>My Favorite Quotes</h1>
            <p className="sub-title">Here are a few quotes from some of my favorite, famous Developers within Software/Web Development.</p>
            <div className="carousel-container">
              {/* <div className="btn prev-icon">
                <img src={prev_icon} alt="prev-icon" />
              </div> */}
              {output}
              {/* <div className="btn next-icon">
                <img src={next_icon} alt="next-icon" />
              </div> */}
            </div>
        </div>
    </section>
  )
}

export default Carousel