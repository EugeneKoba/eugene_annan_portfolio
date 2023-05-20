import React, { useState, useEffect, useContext } from 'react'
import { useInView } from 'react-intersection-observer';

// Declaring NewContext
const NewContext = React.createContext()

// Creating My Custom Hook
export function useMyHook() {
    return useContext(NewContext)
}

export default function NewContextProvider({ children }) {
    // Setting up State Values
    const [darkMode, setDarkMode] = useState(false),
        [collapse, setCollapse] = useState(false),
        [windowSize, setWindowSize] = useState(window.innerWidth),
        [openModal, setOpenModal] = useState(false)
    // Functions for Transitions, using React IntersectionObserver. 'visible' state indicates if elements is visible to the user or not
    const { ref: onAboutScroll, inView: aboutVisible } = useInView({
        threshold: 0,
    });

    // Function to toggle Light Mode Switch
    const toggleDarkMode = () => {
        setDarkMode((prevState) => {
            return !prevState
        })
    }

    // Function to detect the width of the viewport
    useEffect(() => {
        const getWindowSize = () => {
            setWindowSize(window.innerWidth)
        }
        // Run function on window resize
        window.addEventListener('resize', getWindowSize)
        //  Cleanup Function
        return () => window.removeEventListener('resize', getWindowSize)
    }, [windowSize])

    // Function to handle open/close of header menu
    const toggleMenuCollapse = () => {
        setCollapse((prevState) => {
            return !prevState
        })
    }

    return (
        <NewContext.Provider value={{ darkMode, toggleDarkMode, collapse, toggleMenuCollapse, windowSize, openModal, setOpenModal, onAboutScroll, aboutVisible }}>
            { children }
        </NewContext.Provider>
    )
}