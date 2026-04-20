import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Musicas from "../components/Musicas";

import { thisIs } from "../data/playlists";
import { musicas } from "../data/musicas";

function ThisIs() {
  const { id } = useParams();

  const playlist = thisIs.find((p) => p.id === Number(id));

  const musicasArtista = musicas.filter((m) => playlist.songs.includes(m.id));

  return (
    <>
      <Header 
        header="headerThisIs"
        imgCapa={playlist.imgPerfil}
        titulo={playlist.name}
        subtitulo="Playlist pública"
      />

      <Musicas item={musicasArtista} />
    </>
  );
}

export default ThisIs;
