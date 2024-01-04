import { Typography } from "antd";
import styles from "./style.module.scss";


const { Text } = Typography;

interface Props{
    user?: any;
}

function FormUser(props: Props) {
    return (
        <div className={styles.container}>
            <Text className={styles.name}>{props.user?.name}</Text>
        </div>
    )
}

export default FormUser