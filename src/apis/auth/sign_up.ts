import { BASE_URL, LOCAL_AUTH } from "../../constant/config";
import { apiClient } from "../../lib/api";


interface Props {
    name: string;
    email: string;
    password: string;
}

export const signupService = async (data: Props): Promise<any> => {
    const res = await apiClient?.post(`${BASE_URL}${LOCAL_AUTH}/register`, data)
    return res.data
}