// BARRA DO TOPO
// botão voltar/avançar
// campo de busca
// perfil
import styles from './Navbar.module.css'

import { FaSpotify, FaHome, FaSearch, FaBell } from "react-icons/fa"

function Navbar() {
    return (
        <nav>
            <div className={styles.logo}>
                <FaSpotify />
            </div>

            <div className={styles.center}>
                <div className={styles.home}>
                    <FaHome />
                </div>
                <div className={styles.search}>
                    <FaSearch />
                    <input type="text" placeholder='O que você quer escutar?' />
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