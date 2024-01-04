
import { BASE_URL, LOCAL_AUTH } from "../../constant/config";
import { apiClient } from "../../lib/api";



interface Props {
    email: string;
    password: string;
}

export const signinService = async (data: Props): Promise<any> => {
    const res = await apiClient?.post(`${BASE_URL}${LOCAL_AUTH}/login`, data)
    return res.data
}