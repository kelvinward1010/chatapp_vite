import { Col, Row, Space, notification } from "antd"
import styles from "./style.module.scss"
import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import { createMessageService } from "../../../../../apis/message/create_message";
import { storageService } from "../../../../../utils/storage";
import InputEmojiWithRef from "react-input-emoji";
import { io } from "socket.io-client";

interface Props{
    conversation?: any;
    user_id?: any;
}

function Footer(props: Props) {

    const [content, setContent] = useState('');
    const [newMessages, setNewMessage] = useState<any>();
    const current_user = storageService.getStorage();
    const [socket, setSocket] = useState<any>(null);
    const other_id = props?.user_id

    const handleSendMessage = () => {
        const data = {
            conversationId: props?.conversation?._id,
            senderId: current_user?._id,
            content: content,
        }

        createMessageService(data).then((res) => {
            notification.success({
                message: "You have been create message successfully!",
                icon: (
                    <CheckCircleOutlined className="done" />
                )
            })
            setNewMessage(res)
        }).catch((res) => {
            notification.error({
                message: `Could not create message. Please try again!`,
                description: ` ${res?.response?.data?.detail}`,
                icon: (
                    <WarningOutlined className='warning' />
                )
            })
        })
    }

    useEffect(() => {
        const newSocket = io("http://localhost:3000");
        setSocket(newSocket)
    
        return () => {
            newSocket.disconnect();
        }
    },[current_user != null])

    //send message
    useEffect(() => {
        if(socket === null) return;
        socket.emit("sendMessage", {...newMessages, other_id})
    },[newMessages])

    //received message
    useEffect(() => {
        if(socket === null) return;
        socket.on("getMessage", (res: any) => {
            setNewMessage((prev: any) => [...prev, ...res])
        })
        return () => {
            socket.off("getMessage");
        }
    },[socket])



    return (
        <div className={styles.container}>
            <Row justify={'space-between'} align={'middle'} className={styles.main_send} >
                <Col push={1} span={24}>
                    <Space.Compact style={{ width: '90%' }}>
                        <InputEmojiWithRef
                            value={content}
                            onChange={setContent}
                            cleanOnEnter
                            onEnter={handleSendMessage}
                            placeholder="Type a message"
                        />
                    </Space.Compact>
                </Col>
            </Row>
        </div>
    )
}

export default Footer