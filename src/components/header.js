import React from "react"
import { Link } from "gatsby"
import headerStyles from './header.module.scss'

const Header = () => {
    return(
        <header className={headerStyles.container}>
            <h1 className={headerStyles.title}>Thomas Dahlberg</h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <a className={headerStyles.navItem} activeClassName ={headerStyles.activeNavItem} to="/">Home</a>
                    </li>
                    <li className={headerStyles.dropdown}>
                        <a className={headerStyles.dropbtn}>Work</a>
                            <div className={headerStyles.dropdownContent}>
                                <a href="#">Painting</a>
                                <a href="#">Sculpture</a>
                                <a href="#">Collage</a>
                                <a href="#">Photo</a>
                            </div>
                    </li>
                    <li>
                        <a className={headerStyles.navItem} activeClassName ={headerStyles.activeNavItem} href="../resume/Dahlberg_Resume.pdf" target="_blank" rel="noopener noreferrer">CV</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header