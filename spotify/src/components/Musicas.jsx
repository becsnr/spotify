import styles from "./Musicas.module.css"

import { FaPlay } from "react-icons/fa";

function Musicas( { item, customClass } ) {

    return (
        <>
            <div className={styles.card}>
                {item.map((musica, index) => (
                    <div key={musica.id} className={`${styles.mscs} ${styles[customClass]}`}>
                        <span className={styles.num}>{index + 1}</span>
                        <span className={styles.play}>
                            <FaPlay />
                        </span>
                        <div className={styles.info}>
                            <h2>{musica.name}</h2>
                            <p>{musica.cantor}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Musicas