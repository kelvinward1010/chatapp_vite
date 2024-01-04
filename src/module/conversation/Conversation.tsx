import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/SideBar";
import styles from "./style.module.scss";

export function Conversation() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Navbar />
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <SideBar />
                </div>
                <div className={styles.right}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}