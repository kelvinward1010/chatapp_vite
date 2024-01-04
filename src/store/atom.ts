import { atom } from "recoil";


export const onelineUsersState = atom<any[]>({
    key: "onelineUsersState",
    default: [],
});


export const newMessagesState = atom<any>({
    key: "newMessagesState",
    default: null,
});