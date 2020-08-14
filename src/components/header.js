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
                                <Link to="/work/painting">Painting</Link>
                                <Link to="/work/sculpture">Sculpture</Link>
                                <Link to="/work/collage">Collage</Link>
                                <Link to="/work/photo">Photo</Link>
                            </div>
                    </li>
                    <li>
                        <a className={headerStyles.navItem} activeClassName ={headerStyles.activeNavItem} href="../cv/Dahlberg_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header