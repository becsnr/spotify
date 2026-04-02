import Card from "../components/Card"

import { artistas } from "../data/artistas"

function Home() {
    return (
        <>
            <h1>TESTE</h1>
            <p>oq ta acontecendo?</p>
            <Card artistas={artistas} />
        </>
        
    )
}

export default Home