import styles from './Layout.module.css'

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div className={styles.layout}>
            <Navbar />
            

            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
            

                <div className={styles.outlet}>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default Layout