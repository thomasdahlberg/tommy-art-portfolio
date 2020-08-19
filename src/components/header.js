import React, { Fragment } from "react";
import Media from 'react-media';
import { Link } from "gatsby"
import headerStyles from './header.module.scss'

const Header = () => {
    return(
        <header className={headerStyles.container}>
            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
            }}>
            {matches => (
                <Fragment>
                    {matches.small && <a className={headerStyles.a} href="/"><h1 className={headerStyles.titleSmall}>Thomas Dahlberg</h1></a>}
                    {matches.medium && <a className={headerStyles.a} href="/"><h1 className={headerStyles.title}>Thomas Dahlberg</h1></a>}
                    {matches.large && <a className={headerStyles.a} href="/"><h1 className={headerStyles.title}>Thomas Dahlberg</h1></a>}
                </Fragment>
            )}
            </Media>
            <nav>
                <ul className={headerStyles.navList}>
                    <li className={headerStyles.dropdown}>
                        <a className={headerStyles.dropbtn} href="/">Work</a>
                            <div className={headerStyles.dropdownContent}>
                                <Link to="/painting">Painting</Link>
                                <Link to="/sculpture">Sculpture</Link>
                                <Link to="/paper">Paper</Link>
                                <Link to="/collage">Collage</Link>
                            </div>
                    </li>
                    <li>
                        <a className={headerStyles.navItem} href="../cv/Dahlberg_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header