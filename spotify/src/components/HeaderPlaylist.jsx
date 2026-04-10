// PLAYLIST E ALBUM
// import styles from './.module.css'

function HeaderPlaylist({ imagem, titulo, subtitulo, descricao }) {
    return (
        <div >
            <img src={imagem} />

            <div>
                <p>{subtitulo}</p>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default HeaderPlaylist