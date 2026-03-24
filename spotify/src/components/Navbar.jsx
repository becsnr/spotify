// BARRA DO TOPO
// botão voltar/avançar
// campo de busca
// perfil
import styles from './Navbar.module.css'

import { FaEllipsisH, FaChevronLeft, FaChevronRight, FaHome, FaSearch, FaBell } from "react-icons/fa"

function Navbar() {
    return (
        <nav>
            <div className={styles.pontos}>
                <FaEllipsisH />
            </div>

            <div className={styles.direction}>
                <FaChevronLeft />
                <FaChevronRight />
            </div>

            <div className={styles.home}>
                <FaHome />
            </div>

            <div className={styles.search}>
                <FaSearch />
                <input type="text" placeholder='O que você quer escutar?' />
            </div>

            <div className={styles.sino}>
                <FaBell />
            </div>

            <div className={styles.perfil}>
                R
            </div>
        </nav>
    )
}

export default Navbar