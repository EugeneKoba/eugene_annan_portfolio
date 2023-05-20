import React from "react"
import { BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs"

const socialData = [
    {
        id: 1,
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/eugene-koba-annan-15b650183/",
        icon: <BsLinkedin/>
    },
    {
        id: 2,
        title: "GitHub",
        link: "https://github.com/EugeneKoba",
        icon: <BsGithub/>
    },
    {
        id: 3,
        title: "Phone",
        link: "tel:+447495146284",
        icon: <BsFillTelephoneFill/>
    }
]

export default socialData;