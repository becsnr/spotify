import Card from "../components/Card"

import { artistas } from "../data/artistas"
import { albums } from "../data/albums"
import { playlists, thisIs } from "../data/playlists"

function Home() {
    return (
        <div style={{padding: '20px'}}>
            <h1>Artistas Populares</h1>
            <Card item={artistas} page="artista" />
            
            <h1>Álbuns</h1>
            <Card item={albums} page="album" customClass="cardCapa" />

            <h1>Playlists</h1>
            <Card item={playlists} page="playlist" customClass="cardCapa" />

            <h1>O melhor de cada artista</h1>
            <Card item={thisIs} customClass="cardCapa" />
        </div>
        
    )
}

export default Home