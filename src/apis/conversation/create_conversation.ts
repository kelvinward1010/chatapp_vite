import { BASE_URL, LOCAL_CONVERSATION } from "../../constant/config";
import { apiClient } from "../../lib/api";



interface Props {
    firstId: string;
    secondId: string;
}

export const createConversationService = async (data: Props): Promise<any> => {
    const res = await apiClient?.post(`${BASE_URL}${LOCAL_CONVERSATION}/create`, data)
    return res.data
}