import React from 'react'
import footer_icons from '../Data/footer_icons.json'
import menu_list from "../Data/menu_list.json"

const FooterDesktop = () => {
  return (
    <footer id="footer-desktop" className="footer">
        <div className="container">
          <div className="footer-container">
            <div className="line"></div>
            <div className="footer-icon-container">
              {footer_icons.map((i) => {
                return (
                  <div key={i.id} id={i.id} className="footer-capsule">
                    <a href={i.link} target="_blank">
                      <img src={i.img} alt={i.title} />
                    </a>
                  </div>
                )
              })}
            </div>
            <div className="footer-menu-container">
              <ul className="nav-list footer-list">
                {menu_list.map((i) => {
                  return (
                    <li className='nav-item' key={i.id} id={i.id}>
                      <a href={i.link}>{i.title}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="line"></div>
            <div className="footer-description">
              <p>© 2023 Eugene Annan’s Portfolio - All Rights Reserved.</p>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default FooterDesktop
