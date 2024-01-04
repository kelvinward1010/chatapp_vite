import { useEffect, useState } from "react";
import FormUser from "./formuser/FormUser";
import styles from "./style.module.scss";
import { allUsersService } from "../../../../apis/user/get_users";
import { useRecoilValue } from "recoil";
import { onelineUsers } from "../../../../store/state";
import { configDataUsers, configDataUsersOnline } from "../../../../config";

function Navbar() {

    const dataUsersOneLine: [] = useRecoilValue(onelineUsers);
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        allUsersService().then((res) => setData(res));
    },[])

    const oneline_users: any[] = configDataUsers(dataUsersOneLine)
    const config_online_users = configDataUsersOnline(data, oneline_users)

    return (
        <div className={styles.container}>
            {config_online_users?.map((data) =>(
                <FormUser user={data} key={data?._id}/>
            ))}
        </div>
    )
}

export default Navbar