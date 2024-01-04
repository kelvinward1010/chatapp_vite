import { Col, Row, Space, notification } from "antd"
import styles from "./style.module.scss"
import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons"
import { useState } from "react"
import { createMessageService } from "../../../../../apis/message/create_message";
import { storageService } from "../../../../../utils/storage";
import InputEmojiWithRef from "react-input-emoji";

interface Props{
    conversation?: any;
}

function Footer(props: Props) {

    const [content, setContent] = useState('');
    const current_user = storageService.getStorage();

    const handleSendMessage = () => {
        const data = {
            conversationId: props?.conversation?._id,
            senderId: current_user?._id,
            content: content,
        }

        createMessageService(data).then(() => {
            notification.success({
                message: "You have been create message successfully!",
                icon: (
                    <CheckCircleOutlined className="done" />
                )
            })
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