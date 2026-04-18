import styles from "./Artista.module.css"

import { useParams } from "react-router-dom"

import { artistas } from "../data/artistas";
import { musicas } from "../data/musicas";

import Header from "../components/Header";
import Musicas from "../components/Musicas";

function Artista() {
    const { id } = useParams();

    const artista = artistas.find(a => a.id == id);
    const musicasArtista = musicas.filter(m => m.artistaId == Number(id));

    return (
        <>
            <Header 
                header="headerArtista"
                imgCapa={artista.imgPerfil}
                titulo={artista.name}
                descricao={`${artista.ouvintes} ouvintes mensais`}
            />

            <h2 className={styles.titulo}>Populares</h2>
            <div className={styles.musics}>
                <Musicas
                    item={musicasArtista}
                    customClass="listaArtista"
                    tipo="artista" 
                />
            </div>

            <h2 className={styles.titulo}>Discografia</h2>
        </>
    )
}

export default Artista