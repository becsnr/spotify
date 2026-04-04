import Card from "../components/Card"

import { artistas } from "../data/artistas"
import { albums } from "../data/albums"
import { playlists, thisIs } from "../data/playlists"

function Home() {
    return (
        <>
            <h1>Artistas Populares</h1>
            <Card item={artistas} />
            
            <h1>Álbuns</h1>
            <Card item={albums} customClass="cardCapa" />

            <h1>Playlists</h1>
            <Card item={playlists} customClass="cardCapa" />

            <h1>O melhor de cada artista</h1>
            <Card item={thisIs} customClass="cardCapa" />
        </>
        
    )
}

export default Home