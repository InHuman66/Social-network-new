import axios from "axios";
type GetUSersType ={
    items: Array<{
        followed: boolean
        id: number
        name: string
        photos: {
            large: null | string
            small: null | string
        }
        status: null | string
        uniqueUrlName: null | string
    }>
    totalCount: number
    error: null | string
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "abfeea78-6bd5-4197-9663-a5e149720502"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then<GetUSersType>((response)=>{ return response.data})
    }
    ,
    follow(userId: number) {
        return instance.post(`follow/` + userId)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/` + userId)

    }
}
export const  profileAPI ={
    getUserProfile(userId:string){
        return  instance.get(`profile/` + userId)
    },
    getStatus(userId:string){
        return  instance.get(`profile/status/` + userId)
    },
    updateStatus(status:string){
        return instance.put('profile/status', {status: status})
    },
    isFollowing(userId:number){
        return instance.get('follow/' + userId)
    },
    updatePhoto(photoData:Blob){
        const formData = new FormData();
        formData.append("image", photoData)
        return instance.put('profile/photo', formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        } )
    },
}
export const  authUser ={
    authUserEnter(){
        return instance.get(`auth/me`)
    },
    loginUser(email:string, password:string, rememberMe:boolean){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logOut(){
        return instance.delete('auth/login')
    }
}