import styles from "./Artista.module.css"

import { useParams } from "react-router-dom"

import { artistas } from "../data/artistas";

import { FaPlay, FaRandom } from "react-icons/fa";

function Artista() {
    const { id } = useParams();
    const artista = artistas.find(a => a.id == id);

    return (
        <>
            <div className={styles.header}>
                <img src={artista.imgPerfil} alt={artista.name} />
                <h1>{artista.name}</h1>
                <p>{artista.ouvintes} ouvintes mensais</p>
            </div>
            
            <div className={styles.btns}>
                <button className={styles.play}>
                    <FaPlay />
                </button>
                <div className={styles.random}>
                    <FaRandom />
                </div>
                <button className={styles.follow}>seguir</button>
            </div>
        </>
    )
}

export default Artista