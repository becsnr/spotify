// PLAYLIST E ALBUM
import { useEffect, useState } from 'react'
import {Vibrant} from "node-vibrant/browser"

import { FaPlay, FaRandom, FaPlus, FaArrowDown, FaRegClock } from "react-icons/fa";

import styles from './HeaderPlaylist.module.css'

function HeaderPlaylist({ imgCapa, titulo, subtitulo, descricao, imgArtista, ano, totalMscs }) {
    // pra mudar cor do random
    const [ativo, setAtivo] = useState(false)

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
                        <p className={styles.dados}>• {ano} • {totalMscs} músicas</p>
                    </div>
                </div>
            </div>

            <div className={styles.btns}>
                <button className={styles.play}>
                    <FaPlay />
                </button>
                <div className={`${styles.random} ${ativo && styles.ativo}`} onClick={() => setAtivo(!ativo)}>
                    <FaRandom />
                </div>
                <div className={styles.circle}>
                    <FaPlus />
                </div>
                <div className={styles.circle}>
                    <FaArrowDown />
                </div>
            </div>

            <div className={styles.barra}>
                <span>#</span>
                <span>Título</span>
                <span><FaRegClock /></span>
            </div>
        </>
    )
}

export default HeaderPlaylist