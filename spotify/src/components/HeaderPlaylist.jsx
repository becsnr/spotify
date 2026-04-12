// PLAYLIST E ALBUM
import styles from './HeaderPlaylist.module.css'

function HeaderPlaylist({ imagem, titulo, subtitulo, descricao }) {
    return (
        <div className={styles.header}>
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