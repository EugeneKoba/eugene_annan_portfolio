import React from "react"
import { useMyHook } from "./sections/NewContext"
import Header from "./sections/Header/Header"
import Home from "./sections/Home"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Carousel from "./sections/Carousel"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer/Footer"


function App() {
    // Importing darkMode state into App.js
    const { darkMode, toggleDarkMode } = useMyHook()
	return (
		<>
            {/* TERNARY THAT CHANGES from .light or .dark */}
 			<div className={darkMode ? "main dark" : "main light"}>
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                <Home />
                <About />
                <Projects />
                <Carousel />
                <Contact />
                <Footer />
			</div>
        </>
	)
}
export default App