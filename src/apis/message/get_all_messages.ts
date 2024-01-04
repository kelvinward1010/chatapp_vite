import { BASE_URL, LOCAL_MESSAGES } from "../../constant/config";
import { apiClient } from "../../lib/api";


interface Props {
    id: string;
}

export const getAllMessageService = async ( data: Props): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}${LOCAL_MESSAGES}/all/${data.id}`)
    return res.data;
}