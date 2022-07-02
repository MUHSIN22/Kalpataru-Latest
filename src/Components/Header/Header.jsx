import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import navigationList from '../../JSON DB/navigationList'
import './Header.css'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScrollToTop } from '../../ScrollToTop'
import {AiFillLinkedin, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

export default function Header() {
    const hamRef = useRef(null);
    const navListRef = useRef(null);


    const hamburgerClickHandler = (event) => {
        hamRef.current.classList.toggle("hamburger--active")
        navListRef.current.classList.toggle("nav-list--active")
    }

    const expandNavItem = (event) => {
        let activeItem = document.querySelector(".nav-item--active")
        if (window.innerWidth <= 920 && (event.target.className === "nav-item" || event.target.className === "nav-item nav-item--active")) {
            event.target.classList.toggle("nav-item--active")
            if (activeItem) {
                activeItem.classList.remove("nav-item--active")
            }
        }
    }

    const expandDropdownItem = (event) => {
        let activeItem = document.querySelector(".dropdown-item--active")
        if (window.innerWidth <= 920 && (event.target.className === "dropdown-item" || event.target.className === "dropdown-item dropdown-item--active")) {
            event.target.classList.toggle("dropdown-item--active")
            if (activeItem) {
                activeItem.classList.remove("dropdown-item--active")
            }
        }
    }

    const closeNav = () => {
        let activeItem = document.querySelector(".nav-item--active")
        let activeDropdown = document.querySelector(".dropdown-item--active")
        if (window.innerWidth <= 920) {
            hamRef.current.classList.remove("hamburger--active")
            navListRef.current.classList.remove('nav-list--active')
            if (activeDropdown) {
                activeDropdown.classList.remove("dropdown-item--active")
            }
            if (activeItem) {
                activeItem.classList.remove("nav-item--active")
            }
        }
    }
    useScrollToTop()
    return (
        <header className="header-container container-padding">
            <Link to="/">
                <img src="/images/logo.png" className='header-logo' alt="" />
            </Link>
            <ul className="nav-list" ref={navListRef}>
                {
                    navigationList.map((item, index) => (
                        <li className='nav-item' key={index} onClick={expandNavItem}>
                            {
                                item.type === 'link' ?
                                    <Link to={item.link} onClick={closeNav}>{item.title}</Link>
                                    :
                                    <>
                                        <span className="nav-item-expand">
                                            {item.title}
                                            <FontAwesomeIcon icon={faSortDown} />
                                        </span>
                                        <ul className="nav-dropdown">
                                            {
                                                item.dropOptions && item.dropOptions.map((dropItem, ind) => (
                                                    <li key={ind} className="dropdown-item" onClick={expandDropdownItem}>
                                                        {
                                                            dropItem.type === 'link' ?
                                                                <Link to={dropItem.link} onClick={closeNav}>{dropItem.title} </Link>
                                                                :
                                                                <>
                                                                    <span className='nav-item-expand'>
                                                                        {dropItem.title}   <FontAwesomeIcon icon={faSortDown} />
                                                                    </span>
                                                                    <ul className="nav-child-drop">
                                                                        {
                                                                            dropItem.dropOptions.map((dropChild, key) => (
                                                                                <li key={key}>
                                                                                    <Link to={dropChild.link} onClick={closeNav}>{dropChild.title}</Link>
                                                                                </li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </>
                                                        }
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </>
                            }
                        </li>
                    ))
                }
                <li className='nav-item nav-btn-item'>
                    <Link to='/login' className="btn-nav">Login</Link>
                    <a href=' https://ekyc.kalpatarumulti.com/ipo' className="btn-nav">IPO</a>
                </li>
                <li className="social-connect">
                    <a href='https://www.facebook.com/kalpatarumultiplerltd'>
                        <AiFillFacebook />
                    </a>
                    <a href='https://www.instagram.com/kalpataru_multiplier_ltd/' >
                        <BsInstagram />
                    </a>
                    <a href='https://www.linkedin.com/company/kalpatarumultiplierltd/' >
                        <AiFillLinkedin />
                    </a>
                    <a href='https://twitter.com/Kalpataru_Multi' >
                        <AiOutlineTwitter />
                    </a>
                </li>
            </ul>
            <ul className="hamburger" ref={hamRef} onClick={hamburgerClickHandler}>
                <li className="layer"></li>
                <li className="layer"></li>
                <li className="layer"></li>
            </ul>
        </header>
    )
}
