import { useState } from 'react'
import './style.css'



export const Navbar = () => {
    let [navbar, setNavbar] = useState(false)

    const navbarChange = () => {
        window.scrollY > 0 ? setNavbar(true) : setNavbar(false)
    }

    window.addEventListener("scroll",navbarChange)

    return(
        <>
            <i className="fa-solid fa-bars mobile-icon hidden"></i>
            <div className='mobile-menu'>
                <h4 className='mobile-menu-h4'>Lautaro Ocampo</h4>
                <a className='mobile-menu-item' href="#AboutMe">AboutMe</a>
                <a className='mobile-menu-item' href="Technologies">Technologies</a>
                <a className='mobile-menu-item' href="#Projects">Projects</a>
                <a className='mobile-menu-item' href="#Contact">Contact</a>
            </div>
            <nav className={navbar ? 'navbar navbar-shadow' : 'navbar'}>
                <div className='navbar-div-L'>
                    <a href='#Home' className='navbar-h2'><b>lo</b></a>
                </div>
                <div className='navbar-div-R'>
                    <a className="navbar-item" href="#AboutMe"><b>About me</b></a>
                    <a className="navbar-item" href="#Technologies"><b>Technologies</b></a>
                    <a className="navbar-item" href="#Projects"><b>Projects</b></a>
                    <a className="navbar-item" href="#Contact"><b>Contact</b></a>
                </div>
            </nav>
        </>
    )
}