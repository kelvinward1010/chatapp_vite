import { useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import { storageService } from "../../../../utils/storage";
import { useState } from "react";
import { getConversationByIdService } from "../../../../apis/conversation/get_conversation_byId";
import Head from "./head/Head";
import { takeOtherUser } from "../../../../config";
import Footer from "./footer/Footer";
import Center from "./center/Center";

export function Message() {
  const location = useLocation()?.pathname;
  const id_conversation = location.split("/")[3];
  const [data, setData] = useState<any>([]);
  const current_user = storageService.getStorage();
  const members = data?.members;
  const user_id = takeOtherUser(members, current_user);
  getConversationByIdService({id: id_conversation}).then((res) => setData(res));

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Head user_id={user_id} conversation={data}/>
      </div>
      <div className={styles.center}>
        <Center user_id={user_id} conversation={data}/>
      </div>
      <div className={styles.footer}>
        <Footer conversation={data} user_id={user_id}/>
      </div>
    </div>
  )
}
