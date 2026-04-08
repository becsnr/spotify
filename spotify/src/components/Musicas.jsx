import styles from "./Musicas.module.css"

function Musicas( { item, customClass } ) {
    return (
        <>
            <div className={styles.mscs}>
                {item.map(item => (
                    <div key={item.id} className={`${styles[customClass]}`}>
                        {/* {CONDIÇÃO PRA ARTISTA ? PLAYLIST. USAR USESTATE} */}
                        <h2>{item.name}</h2>
                        <p>{item.cantor}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Musicas