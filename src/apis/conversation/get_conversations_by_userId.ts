import { BASE_URL, LOCAL_CONVERSATION } from "../../constant/config";
import { apiClient } from "../../lib/api";


interface Props {
    id: string;
}

export const getConversationsByUserIdService = async ( data: Props): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}${LOCAL_CONVERSATION}/all/${data.id}`)
    return res.data;
}