import { Typography } from "antd";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { userService } from "../../../../../apis/user/get_user_id";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

interface Props{
    conversation?: any;
    current_user?: any;
}

function FormConversation(props: Props){

    const nagative = useNavigate();
    const [user, setUser] = useState<any>()
    const members = props.conversation?.members;

    let user_id: string = '';
    for(let i in members){
        if(members[i] !== props.current_user?._id){
            user_id = members[i];
        }
    }

    useEffect(() => {
        userService(user_id).then((res) => setUser(res));
    },[])

    const handleGoInConversation = () => nagative(`${props?.conversation?._id}`);

    return (
        <div className={styles.container} onClick={handleGoInConversation}>
            <Text className={styles.name}>{user?.name}</Text>
        </div>
    )
}

export default FormConversation