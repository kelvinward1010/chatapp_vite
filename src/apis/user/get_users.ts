import { BASE_URL, LOCAL_USER } from "../../constant/config";
import { apiClient } from "../../lib/api";

export const allUsersService = async (): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}${LOCAL_USER}/find_all`,)
    return res.data;
}