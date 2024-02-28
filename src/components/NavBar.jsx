import { Link, useLocation } from "react-router-dom"
import '../styles/navbar.css'
import { useState } from "react"

export const NavBar = () => {

    const location = useLocation()
    const [menuActive, setMenuActive] = useState(false)

    const handleClick = () => {
        setMenuActive(false)
    }

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }
    return (
        <>
            <nav className="menu">
                <figure className="logo">
                    <img src="/assets/shared/logo.svg" alt="Logo" />
                </figure>

                <button className={`hamburger hamburger--collapse ${menuActive ? 'is-active' : ''}`} type="button" onClick={toggleMenu}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>

                <ul className={`menu__items ${menuActive ? 'active' : ''}`}>
                    <li className={`menu__item ${location.pathname === '/' ? 'active' : ''}`}>
                        <Link className="item__link" to={"/"} onClick={handleClick}><span>00</span> HOME</Link>
                    </li>
                    <li className={`menu__item ${location.pathname === '/destination' ? 'active' : ''}`}>
                        <Link className="item__link" to={"/destination"} onClick={handleClick}><span>01</span> DESTINATION</Link>
                    </li>
                    <li className={`menu__item ${location.pathname === '/crew' ? 'active' : ''}`}>
                        <Link className="item__link" to={"/crew"} onClick={handleClick}><span>02</span> CREW</Link>
                    </li>
                    <li className={`menu__item ${location.pathname === '/technology' ? 'active' : ''}`}>
                        <Link className="item__link" to={"/technology"} onClick={handleClick}><span>03</span> TECHNOLOGY</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
