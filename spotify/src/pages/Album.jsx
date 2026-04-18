import { useParams } from "react-router-dom";

import { albums } from "../data/albums";
import { musicas } from "../data/musicas";
import Header from "../components/Header";
import Musicas from "../components/Musicas";

function Album() {
  const { id } = useParams();

  const album = albums.find((a) => a.id === Number(id));

  if (!album) {
    return <p>Álbum não encontrado</p>;
  }

  const musicasAlbum = musicas.filter((musica) => musica.albumId == Number(id));

  return (
    <div>
      <Header
        gradiente="gradiente"
        header="headerAlbum"
        imgCapa={album.imgCard}
        titulo={album.name}
        subtitulo="Álbum"
        imgArtista={album.imgPerfil}
        descricao={album.artista}
        ano={album.ano}
        totalMscs={musicasAlbum.length}
      />

      <Musicas item={musicasAlbum} />
    </div>
  );
}

export default Album;
