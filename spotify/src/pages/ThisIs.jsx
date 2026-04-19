import { useParams } from "react-router-dom";
import Header from "../components/Header";

import { thisIs } from "../data/playlists";

function ThisIs() {
  const { id } = useParams();

  const playlist = thisIs.find((p) => p.id === Number(id));

  return (
    <>
      <Header 
        header="headerThisIs"
        imgCapa={playlist.imgPerfil}
        titulo={playlist.name}
        subtitulo="Playlist pública"
      />
    </>
  );
}

export default ThisIs;
