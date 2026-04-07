import styles from './Card.module.css'

import { useNavigate } from 'react-router-dom'

function Card( { item, customClass, page } ) {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.container}>
                {item.map(item => (
                    <div key={item.id} className={`${styles.card} ${styles[customClass]}`} onClick={() => navigate(`/${page}/${item.id}`)}>
                        <img src={item.imgCard} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card