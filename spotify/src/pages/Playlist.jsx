import icon from '../../public/icon.jpg'

import { useParams } from "react-router-dom"

import HeaderPlaylist from "../components/HeaderPlaylist"
import Musicas from "../components/Musicas"

import { playlists } from "../data/playlists"
import { musicas } from "../data/musicas"

function Playlist() {
    const { id } = useParams();

    const playlist = playlists.find(p => p.id === Number(id));

    const musicasPlaylist = musicas.filter(m => playlist.songs.includes(m.id));

    if (!playlist) {
        return <p>Playlist não encontrada</p>
    }
    return (
        <div>
            <HeaderPlaylist 
                imgCapa={playlist.imgCard}
                titulo={playlist.name}
                subtitulo="Playlist"
                imgArtista={icon}
                descricao="beca"
                customClass="playlist"
            />

            <Musicas item={musicasPlaylist} />
        </div>
    )
}

export default Playlist