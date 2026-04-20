import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

import { FaSpotify, FaHome, FaSearch, FaBell } from "react-icons/fa"

function Navbar() {
    return (
        <nav>
            <div className={styles.logo}>
                <Link to="/">
                    <FaSpotify />
                </Link>
            </div>

            <div className={styles.center}>
                <div className={styles.home}>
                    <Link to="/">
                        <FaHome />
                    </Link>
                </div>
                <div className={styles.search}>
                    <FaSearch />
                    <input type="text" placeholder='O que você quer ouvir?' />
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.sino}>
                    <FaBell />
                </div>
                <div className={styles.perfil}>
                    R
                </div>
            </div>
        </nav>
    )
}

export default Navbar