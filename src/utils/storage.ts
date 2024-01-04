
const storage = {
    getToken: () => {
        return JSON.parse(
            window.localStorage.getItem(`token`) as string,
        );
    },
    setToken: (token: string) => {
        window.localStorage.setItem(`token`, JSON.stringify(token));
    },
    clearToken: () => {
        window.localStorage.removeItem(`token`);
    },
};
  
export default storage;
  
export const storageService = {
    getStorage: () => {
        return JSON.parse(
            window.localStorage.getItem(`current_user`) || "{}",
        );
    },
    setStorage: (value: string) => {
        window.localStorage.setItem(`current_user`, value);
    },
    clearStorage: () => {
        window.localStorage.removeItem(`current_user`);
    },
};