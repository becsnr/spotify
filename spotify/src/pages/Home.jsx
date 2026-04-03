import Card from "../components/Card"

import { artistas } from "../data/artistas"
import { albums } from "../data/albums"

function Home() {
    return (
        <>
            <h1>Artistas Populares</h1>
            <Card item={artistas} />
            
            <h1>Álbuns</h1>
            <Card item={albums} customClass="cardCapa" />
        </>
        
    )
}

export default Home