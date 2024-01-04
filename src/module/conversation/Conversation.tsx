import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/SideBar";
import styles from "./style.module.scss";
import { storageService } from "../../utils/storage";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { onelineUsers } from "../../store/state";
import { useRecoilState, useRecoilValue } from "recoil";
import {onelineUsersState } from "../../store/atom";

export function Conversation() {

    const current_user = storageService.getStorage();
    const [socket, setSocket] = useState<any>(null);
    const oneline_users: [] = useRecoilValue(onelineUsers);
    const [, setOnelineUsers] = useRecoilState(onelineUsersState);
    const current_user_id = current_user?._id

    useEffect(() => {
        const newSocket = io("http://localhost:3000");
        setSocket(newSocket)
    
        return () => {
            newSocket.disconnect();
        }
    },[current_user != null])
    
    //users online
    useEffect(() => {
        if(socket === null) return;
        socket.emit("addNewUser", current_user_id)
        socket.on("getOnelineUsers", (res: any[]) => {
            setOnelineUsers(res)
        })
    },[socket !== null, current_user_id !== null, oneline_users?.length !== 0])


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