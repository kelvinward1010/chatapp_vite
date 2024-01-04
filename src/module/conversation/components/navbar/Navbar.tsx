import { useEffect, useState } from "react";
import FormUser from "./formuser/FormUser";
import styles from "./style.module.scss";
import { allUsersService } from "../../../../apis/user/get_users";

function Navbar() {

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        allUsersService().then((res) => setData(res));
    },[])

    return (
        <div className={styles.container}>
            {data?.map((data) =>(
                <FormUser user={data} key={data?._id}/>
            ))}
        </div>
    )
}

export default Navbar