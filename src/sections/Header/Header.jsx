import React from 'react'
import { useMyHook } from "../NewContext"
import HeaderDesktop from "./HeaderDesktop"
import HeaderMobile from "./HeaderMobile"

const Header = (props) => {
    const { darkMode, toggleDarkMode } = props
    // Importing the windowSize variable into 'Header' component, so that the 'lightmode' state & 'collapse' state are shared between HeaderDesktop & HeaderMobile
    const { collapse, toggleMenuCollapse, windowSize } = useMyHook()

    return (
        <>
            {windowSize < 1024 ? <HeaderMobile darkMode={darkMode} toggleDarkMode={toggleDarkMode} collapse={collapse} toggleMenuCollapse={toggleMenuCollapse}/> : <HeaderDesktop darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        </>
    )
}

export default Header