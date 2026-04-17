import styles from './Play.module.css'

import { useState } from "react"

import { FaPlay, FaRandom, FaPlus, FaArrowDown, FaRegClock } from "react-icons/fa";

function Play({ page }) {
    const [ativo, setAtivo] = useState(false);

    return (
        <>
            <div className={styles.btns}>
                <button className={styles.play}>
                    <FaPlay />
                </button>

                <div className={`${styles.random} ${ativo && styles.ativo}`} onClick={() => setAtivo(!ativo)}>
                    <FaRandom />
                </div>

                <div className={`${styles.btnChange} ${styles[page]}`}>
                    <button className={styles.follow}>Seguir</button>
                    <div className={styles.circle}>
                        <FaPlus />
                    </div>
                    <div className={styles.circle}>
                        <FaArrowDown />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Play