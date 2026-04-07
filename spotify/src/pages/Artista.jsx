import styles from "./Artista.module.css"

import { useParams } from "react-router-dom"

import { artistas } from "../data/artistas";

function Artista() {
    const { id } = useParams();
    const artista = artistas.find(a => a.id == id);

    return (
        <>
            <div className={styles.header}>
                <img src={artista.imgPerfil} alt={artista.name} />
            </div>
            <h1>{artista.name}</h1>
        </>
    )
}

export default Artista