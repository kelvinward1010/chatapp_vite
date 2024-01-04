import { useNavigate } from "react-router-dom";
import ButtonConfig from "../buttonconfig/ButtonConfig";
import styles from "./style.module.scss";
import storage, { storageService } from "../../utils/storage";
import { Typography } from "antd";

const { Text } = Typography;

function Header() {

    const navigate = useNavigate();
    const current_user = storageService.getStorage();

    const handleLogout = () => {
        storage.clearToken();
        storageService.clearStorage();
        navigate('/sign_in')
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Chat App KW
            </div>
            <div className={styles.right}>
                <Text className={styles.name}>{current_user?.name}</Text>
                <div className={styles.button}>
                    <ButtonConfig 
                        name="Logout"
                        type={'normal'}
                        onClick={handleLogout}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header