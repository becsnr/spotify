import styles from './Layout.module.css'

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

function Layout() {
    return (
        <div className={styles.layout}>
            <Navbar />
            

            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
            

                <div className={styles.outlet}>

            </div>

            </div>
        </div>
    )
}

export default Layout