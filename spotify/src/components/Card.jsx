import styles from './Card.module.css'

function Card( { item, customClass } ) {
    return (
        <>
            <div className={styles.container}>
                {item.map(item => (
                    <div className={`${styles.card} ${styles[customClass]}`}>
                        <img src={item.imgCard} alt={item.name} />
                        <p key={item.id}>{item.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card