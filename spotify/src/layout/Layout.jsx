import styles from './Layout.module.css'

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

function Layout() {
    return (
        <div className={styles.layout}>
            <Sidebar />

            <div className={styles.container}>
                <Navbar />
            </div>
        </div>
    )
}

export default Layout