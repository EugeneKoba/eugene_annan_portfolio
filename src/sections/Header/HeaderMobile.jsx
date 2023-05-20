import React from 'react'
import profilePic from "../../images/IMG_4675_01.png"
import menu_list from "../Data/menu_list.json"
import { HiSun } from "react-icons/hi"
import { RiMoonClearFill } from "react-icons/ri"
import menu_icon from "../../icons/menu-icon.png"
import cross_icon from "../../icons/cross-icon.png"


const HeaderMobile = (props) => {
  // Destructuring props
  const { darkMode, toggleDarkMode, collapse, toggleMenuCollapse } = props
  
  return (
    <nav id="header-mobile" className="header-mobile">
      <div className="container nav-container">
        <div className="portrait-container">
          <div className="img-container nav-picture">
            <a href="#">
              <img src={profilePic} alt="nav-profile-pic" className='img portrait-img' /> 
            </a>
          </div>
        </div>
        <div className="switch-container">
          <label className={darkMode ? "switch dark-switch" : "switch light-switch"}>
            <input type="checkbox" name='check' checked={darkMode} id='switch' onChange={toggleDarkMode}/>
            <div className="switch-inner">
              <span className="switch-icon">
              {darkMode ? <RiMoonClearFill /> : <HiSun />}
                </span>
              </div>
          </label>
        </div>
        <div className="menu-container">
          <div className="img-container menu-picture" onClick={toggleMenuCollapse}>
            <img src={collapse ? cross_icon : menu_icon} alt="menu_icon" />
          </div>
        </div>
      </div>
      <div className={collapse ? "menu-list-mobile" : "hide"} >
        <ul className="nav-list-mobile container">
          {menu_list.map((i) => {
            return (
              <li className='nav-item-mobile' key={i.id} id={i.id}>
                <a href={i.link}>{i.title}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default HeaderMobile