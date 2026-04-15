import { useParams } from "react-router-dom";

import { albums } from "../data/albums";
import { musicas } from "../data/musicas";
import HeaderPlaylist from "../components/HeaderPlaylist";
import Musicas from "../components/Musicas";

function Album() {
    const { id } = useParams();

    const album = albums.find(a => a.id === Number(id));

    if (!album) {
        return <p>Álbum não encontrado</p>
    }

    const musicasAlbum = musicas.filter(musica => musica.albumId == Number(id))

    return (
        <div>
            <HeaderPlaylist 
                imgCapa={album.imgCard}
                titulo={album.name}
                subtitulo="Álbum"
                imgArtista={album.imgPerfil}
                descricao={album.artista}
            />

            <Musicas item={musicasAlbum} />
        </div>
    )
}

export default Album