import { BASE_URL, LOCAL_USER } from "../../constant/config";
import { apiClient } from "../../lib/api";

export const userService = async ( id: string): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}${LOCAL_USER}/find/${id}`,)
    return res.data;
}