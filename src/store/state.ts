import { selector } from "recoil";
import { newMessagesState, onelineUsersState } from "./atom";



export const onelineUsers: any = selector({
    key: "onelineUsers",
    get: ({ get }) => {
        const onelineusers = get(onelineUsersState);
        return onelineusers;
    },
});


export const newMessages: any = selector({
    key: "sendMessages",
    get: ({ get }) => {
        const newmessages = get(newMessagesState);
        return newmessages;
    },
});