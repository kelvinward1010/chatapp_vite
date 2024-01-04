import { useEffect, useState } from "react";
import FormConversation from "./formuser/FormConversation";
import styles from "./style.module.scss";
import { storageService } from "../../../../utils/storage";
import { getConversationsByUserIdService } from "../../../../apis/conversation/get_conversations_by_userId";

function SideBar() {

    const [data, setData] = useState<any[]>([]);
    const current_user = storageService.getStorage();

    useEffect(() => {
        getConversationsByUserIdService({id: current_user?._id}).then((res) => setData(res));
    },[])

    return (
        <div className={styles.container}>
            {data?.map((data) =>(
                <FormConversation current_user={current_user} conversation={data} key={data?._id}/>
            ))}
        </div>
    )
}

export default SideBar