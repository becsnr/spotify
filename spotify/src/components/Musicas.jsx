import { useState } from "react";
import styles from "./Musicas.module.css"

import { FaPlay } from "react-icons/fa";

function Musicas( { item, customClass, tipo } ) {
    const [mostrarTudo, setMostrarTudo] = useState(false);

    const musicasVisiveis = tipo === "artista" && !mostrarTudo ? item.slice(0, 5) : item

    return (
        <>
            <div className={styles.card}>
                {musicasVisiveis?.map((musica, index) => (
                    <div key={musica.id} className={`${styles.mscs} ${styles[customClass]}`}>
                        <span className={styles.num}>{index + 1}</span>
                        <span className={styles.play}>
                            <FaPlay />
                        </span>
                        <div className={styles.dados}>
                            <h2>{musica.name}</h2>
                            <p>{musica.cantor}</p>
                        </div>
                        <div className={styles.time}>
                            <p>{musica.time}</p>
                        </div>
                    </div>
                ))}

                {/* SE FOR ARTISTA */}
                {tipo === "artista" && item.length > 5 && (
                    <button onClick={() => setMostrarTudo(!mostrarTudo)} className={styles.btn}>
                        {mostrarTudo ? "Ver menos" : "Ver mais"}
                    </button>
                )}
            </div>
        </>
    )
}

export default Musicas