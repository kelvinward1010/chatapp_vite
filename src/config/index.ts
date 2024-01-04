

export const takeOtherUser = (arr: [], current_user: any) => {
    let user_id: string = '';
    for(let i in arr){
        if(arr[i] !== current_user?._id){
            user_id = arr[i];
        }
    }
    return user_id;
}