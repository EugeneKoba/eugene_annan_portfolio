import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import contact_icons from "./Data/contact_icons"
import contactPic from "../images/IMG_4887_02.jpg"

const Contact = () => {
  // Creating state to store form input, in the form of an object
  const [formInput, setFormInput] = useState({ user_name: "", user_email: "", message: "" })

  // Function to update 'formInput state with the user's input
  const handleChange = (event) => {
    // Destructuring to update the state witht he user's input
    setFormInput({...formInput, [event.target.name]: event.target.value})
  }

  // Using automated email service called EmailJS to receive emails from form submission
  const form = useRef();
    // Function to handle form submission, using
  const handleSubmit = (event) => {
    event.preventDefault()
    emailjs.sendForm('service_ispakaw', 'template_0t5umji', form.current, 'kpPfqTQPxMwRuZhjR')
      .then((result) => {
          console.log(result.text);
          alert("Your Message Was Successfully Sent!")
      }, (error) => {
          console.log(error.text);
          alert(error.text)
      });
  }
  
  return (
    <section id='contact' className='contact'>
        <div className="container">
            <h1 className='title'>Contact Me</h1>
            <p className="sub-title">Get in touch with me via LinkedIn, GitHub or Mobile! Send me an email via the form below!</p>
            <div className="contact-container">
              <div className="contact-info-container">
                <div className="social-container">
                  {contact_icons.map((i) => {
                    return (
                      <div key={i.id} id={i.id} className="social-capsule">
                        <a href={i.link} target="_blank">
                          <span className='social-icon'>{i.icon}</span>
                          <span className='social-title'>{i.title}</span>
                        </a>
                      </div>
                    )
                  })}
                </div>
                <p className="form-label">I am available for work. Connect with me via phone: 
                  <a href='tel:+447495146284' className='phone'>
                    {` +447123456789 `}
                  </a> 
                  or email at
                  <a href='mailto:eugeneannan@hotmail.co.uk' className='email'>
                    {` eugeneannan@hotmail.co.uk `}
                  </a>
                  for more information. Fill out the form below:
                </p>
                 <form ref={form} className='contact-form' onSubmit={handleSubmit} > 
                  <input type="text" name="user_name" value={formInput.name} placeholder='Your Full Name...' className='contact-name' onChange={handleChange}/>
                  <input type="email" name="user_email" value={formInput.email} placeholder='Your Email Address...' className='contact-email' onChange={handleChange}/>
                  <textarea type="textarea" name="message" value={formInput.message} placeholder='Your Message... (max 200 characters)' rows="3" maxLength="200" className='contact-message' onChange={handleChange}></textarea>
                  <button type='submit' value="Send" className='btn btn-lg submit-btn'>Submit</button>
                </form>
              </div>
              <div className="contact-img-container">
                <div className="contact-img-wrap">
                  <img src={contactPic} alt="picture"/>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Contact