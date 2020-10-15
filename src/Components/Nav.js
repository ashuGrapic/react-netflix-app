import React, { useEffect, useState,memo } from 'react'
import './CSS/Nav.css'
import logo from './Images/logo/Logo.png'
import avatar from './Images/logo/avatar.png'
const Nav = () => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            (window.scrollY>100) ? setShow(true) : setShow(false)

            return () => {
                window.removeEventListener('scroll')
            }
        })

    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>

            <img className="nav__logo" src={logo} alt="netflix-logo" />

            <img className="nav__avatar" src={avatar} alt="netflix-avatar-logo" />

        </div>
    )
}

export default memo(Nav)
