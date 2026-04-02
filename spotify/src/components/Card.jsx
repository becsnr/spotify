import styles from './Card.module.css'

function Card( { artistas } ) {
    return (
        <>
            <div className={styles.container}>
                {artistas.map(artistas => (
                    <div className={styles.cardArtista}>
                        <img src={artistas.imgCard} alt={artistas.name} />
                        <p key={artistas.id}>{artistas.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card