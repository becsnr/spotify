// PLAYLIST E ALBUM
import { useEffect, useState } from 'react'
import {Vibrant} from "node-vibrant/browser"

import styles from './HeaderPlaylist.module.css'

function HeaderPlaylist({ imagem, titulo, subtitulo, descricao }) {
    // pra pegar as cores das capas
    const [color, setColor] = useState("#000")

    useEffect( () => {
        if (!imagem) return

        Vibrant.from(imagem).getPalette().then(palette => {
            const cor = palette.Vibrant?.hex || palette.DarkVibrant?.hex || "#121212"
            setColor(cor)
        })
        .catch(err => {
            console.log("Erro Vibrant: ", err)
            setColor("#121212")
        })
    }, [imagem])

    return (
        <div className={styles.header} style={{background:`linear-gradient(${color}, #121212)`}}>
            <img src={imagem} className={styles.capa} />

            <div className={styles.info}>
                <p className={styles.subtitulo}>{subtitulo}</p>
                <h1 className={styles.titulo}>{titulo}</h1>
                <p className={styles.descricao}>{descricao}</p>
            </div>
        </div>
    )
}

export default HeaderPlaylist