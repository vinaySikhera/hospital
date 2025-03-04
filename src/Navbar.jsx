import React, { createRef, useState } from 'react'
import './navbar.css'

const navbar = () => {
    const secondNavbarClick = createRef();

    const [isToggle, setIsToggle] = useState(false);
    const handleToogle = () => {
        console.log(secondNavbarClick.current.classList.add('active'))
        // console.log(secondNavbarClick.current.classList.remove('active'))
        setIsToggle(!isToggle);
        isToggle ? secondNavbarClick.current.classList.remove('active') : secondNavbarClick.current.classList.add('active')
        // secondNavbarClick.classList.toggle('active')

    }

    return (
        <div>
            <div className="upperNavbar">
                <div className="leftUpperNavbar">
                    <div>
                        <label>

                            <a className="navbarAnckerTag" href="#">+1800-001-658</a>
                        </label>
                    </div>
                    <div>
                        <label>
                            <a className="navbarAnckerTag" href="#">info@peaceulthemes.com</a>
                        </label>
                    </div>
                </div>
                <div className="rightUpperNavbar">
                    <div><i className="fa fa-facebook-f">face</i></div>
                    <div><i className="fa fa-google"></i>G</div>
                    <div><i className="fa fa-instagram">Insta</i></div>
                    <div>p</div>
                </div>
            </div>
            <div className="nichaNavbar">
                <div className="logo"><img width="100%"
                    src="https://medicate.peacefulqode.co.in/wp-content/themes/medicate/assets/img/logo.png" alt="" />
                </div>
                <div ref={secondNavbarClick} className="secondNavbarClick">
                    <div className="dropdown">Home <span><i className="fa fa-angle-down"></i></span>
                        <div className="dropdown-content">
                            <a href="#home1">Home 1</a>
                            <a href="#home2">Home 2</a>
                        </div>
                    </div>
                    <div className="dropdown">pages <span><i className="fa fa-angle-down"></i></span>
                        <div className="dropdown-content">
                            <a href="#about">About Us</a>
                            <a href="#team">Team</a>
                        </div>
                    </div>
                    <div className="dropdown">services <span> <i className="fa fa-angle-down"></i></span>
                        <div className="dropdown-content">
                            <a href="#web">Web Development</a>
                            <a href="#marketing">Marketing</a>
                        </div>
                    </div>
                    <div className="dropdown">projects <span> <i className="fa fa-angle-down"></i></span>
                        <div className="dropdown-content">
                            <a href="#project1">Project 1</a>
                            <a href="#project2">Project 2</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        blog <span> <i className="fa fa-angle-down"></i></span>
                        <div className="dropdown-content">
                            <a href="#blog1">Blog Post 1</a>
                            <a href="#blog2">Blog Post 2</a>
                        </div>
                    </div>
                    <div>contact us</div>
                    <div><i className="fa fa-search">search</i></div>
                    <div><i className="fa fa-shopping-cart">cart</i></div>
                    <div><button className="btnOFNavBar">Appointments +</button></div>
                </div>
            </div>
            <div><button onClick={handleToogle} className="menuBtn">{isToggle ? "close" : "menu"}</button></div>
            <script src="js/navbar.js"></script>
        </div>
    )
}

export default navbar
