

export const takeOtherUser = (arr: [], current_user: any) => {
    let user_id: string = '';
    for(let i in arr){
        if(arr[i] !== current_user?._id){
            user_id = arr[i];
        }
    }
    return user_id;
}


export const configDataUsers = (arr: any[]) => {
    let user_online: any[] = [];
    for(let i in arr){
        if(arr[i]?.userId !== null) {
            user_online.push(arr[i].userId);
        }
    }
    return user_online;
}

export const configDataUsersOnline = (arr: any[], usersId: any[]) => {
    const dataOptionsUsers  = arr?.filter((item: any) => usersId?.map((id: any) => id).includes(item?._id));
    return dataOptionsUsers;

}