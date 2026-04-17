// PLAYLIST E ALBUM
import { useEffect, useState } from 'react'
import {Vibrant} from "node-vibrant/browser"
import Play from './Play';

import { FaRegClock } from "react-icons/fa";

import styles from './HeaderPlaylist.module.css'

function HeaderPlaylist({ imgCapa, titulo, subtitulo, descricao, imgArtista, ano, totalMscs, customClass }) {

    // pra pegar as cores das capas
    const [color, setColor] = useState("#000")

    useEffect( () => {
        if (!imgCapa) return

        Vibrant.from(imgCapa).getPalette().then(palette => {
            const cor = palette.Vibrant?.hex || palette.DarkVibrant?.hex || "#121212"
            setColor(cor)
        })
        .catch(err => {
            console.log("Erro Vibrant: ", err)
            setColor("#121212")
        })
    }, [imgCapa])

    return (
        <>
            <div className={styles.header} style={{background:`linear-gradient(${color}, #121212)`}}>
                <img src={imgCapa} className={styles.capa} />

                <div className={styles.info}>
                    <p className={styles.subtitulo}>{subtitulo}</p>
                    <h1 className={styles.titulo}>{titulo}</h1>
                    <div className={styles.artista}>
                        <img src={imgArtista} className={styles.imgArtista} />
                        <p className={styles.descricao}>{descricao}</p>
                        <p className={`${styles.dados} ${styles[customClass]}`}>• {ano} • {totalMscs} músicas</p>
                    </div>
                </div>
            </div>

            <Play page="playlist" />

            <div className={styles.barra}>
                <span>#</span>
                <span>Título</span>
                <span><FaRegClock /></span>
            </div>
        </>
    )
}

export default HeaderPlaylist