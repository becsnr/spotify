import styles from "./Musicas.module.css"

function Musicas( { item, customClass } ) {
    return (
        <>
            <div className={styles.mscs}>
                {item.map((item, index) => (
                    <div key={item.id} className={`${styles[customClass]}`}>
                        <span>{index + 1}</span>
                        <div className={styles.info}>
                            <h2>{item.name}</h2>
                            <p>{item.cantor}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Musicas