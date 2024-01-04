import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { getAllMessageService } from "../../../../../apis/message/get_all_messages";
import { storageService } from "../../../../../utils/storage";
import { Typography } from "antd";
import MessageRightItem from "./messageitem/MessageRightItem";
import MessageLeftItem from "./messageitem/MessageLeftItem";

interface Props {
    conversation?: any;
    user_id?: string;
}

const { Title } = Typography;

function Center(props: Props){

    const [data, setData] = useState<any[]>([]);
    const current_user = storageService.getStorage();

    useEffect(() => {
        getAllMessageService({id: props?.conversation?._id}).then((res) => setData(res));
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.messages}>
                {data?.map((item: any) => {
                    const styleMessage = () => {
                        return item?.senderId == current_user?._id ? "end" : "start"
                    }
                    return(
                        <div 
                            style={{
                                width: "100%", 
                                height: "fit-content",
                                display: "flex",
                                justifyContent: `${styleMessage()}`
                            }}
                            key={item._id}
                        >
                            {item?.senderId == current_user?._id
                                ? <MessageRightItem message={item}/>
                                : <MessageLeftItem message={item}/>
                            }
                        </div>
                    )
                })}
                {data?.length == 0 && <div className={styles.nonemessage}>
                    <Title level={4} className={styles.title_nonemessage}>Send a first message to talk!</Title>
                </div>}
            </div>
        </div>
    )
}

export default Center