// BARRA LATERAL
// logo
// menu (home, search, biblioteca)
// links de playlists
import styles from './Sidebar.module.css'

import { useState } from 'react'

import { FaBars, FaStream, FaPlus} from "react-icons/fa"

function Sidebar() {
    const [hover, setHover] = useState(false);

    return (
        <sidebar>
            <div className={styles.biblioteca} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
                {hover ? <FaStream /> : <FaBars />}
            </div>
            <div className={styles.add}>
                <FaPlus />
            </div>
        </sidebar>
    )
}

export default Sidebar