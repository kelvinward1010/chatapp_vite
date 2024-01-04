import React from "react";
import styles from "./style.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

interface Props {
    children?: React.ReactNode
}


export function Layout({ children }: Props): JSX.Element {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div>
                <Outlet />
                {children}
            </div>
        </div>
    )
}
