import { useParams } from "react-router-dom";

import { albums } from "../data/albums";
import { musicas } from "../data/musicas";
import HeaderPlaylist from "../components/HeaderPlaylist";

function Album() {
    const { id } = useParams();

    const album = albums.find(a => a.id == Number(id));

    if (!album) {
        return <p>Álbum não encontrado</p>
    }

    const musicasAlbum = musicas.filter(musica => musica.albumId == album.id)

    return (
        <div>
            <HeaderPlaylist 
                imagem={album.imgCard}
                titulo={album.name}
                subtitulo="Álbum"
                descricao={album.artista}
            />

            <div className={styles.mscs}>
                {musicasAlbum.map(musica => (
                    <p key={musica.id}>{musica.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Album