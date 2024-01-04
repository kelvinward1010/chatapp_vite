import { Typography } from "antd";
import styles from "./style.module.scss";

const { Text } = Typography;

interface Props{
    user_id?: any;
    conversation?: any;
}

function Head(props: Props) {
    
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <Text className={styles.name}>{props?.user_id}</Text>
            </div>
        </div>
    )
}

export default Head