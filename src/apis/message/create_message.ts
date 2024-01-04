import { BASE_URL, LOCAL_MESSAGES } from "../../constant/config";
import { apiClient } from "../../lib/api";



interface Props {
    conversationId: string;
    senderId: string;
    content: string;
}

export const createMessageService = async (data: Props): Promise<any> => {
    const res = await apiClient?.post(`${BASE_URL}${LOCAL_MESSAGES}/create`, data)
    return res.data
}