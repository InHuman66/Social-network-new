import { Dispatch } from "redux"
import {profileAPI, usersAPI} from "../../n3-dal/SocialAPI";
import {followAC, setFollowingProgress, unFollowAC} from "./users-reducer";

export type ProfileInfoType ={
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: {
        small: null | string
        large: null | string
    }

}
export type TypeSetProfileInfo = {
    type: 'SETPROFILEINFO'
    profileInfo: ProfileInfoType
}
type TypeSetProfileID ={
    type: 'SETPROFILEID'
    id: number
}
type TypeSetProfileStatus={
    type: 'SETPROFISTUS'
    status: string
}
type TypeSetIsFollowing={
    type: 'SETISFOLLOWING'
    follow:boolean
}
type TypeSetPhotos={
    type: 'SET-PHOTOS'
    photos:object
}

const initialState = {
    profileId: 0,
    profileDataInfo: {} as ProfileInfoType,
    profileStatus: "",
    isFollowing: false,

}
type ActionsType = any
export type InitialStateTypeProfile = typeof initialState


export const profileReducer = (state: InitialStateTypeProfile = initialState, action: ActionsType): InitialStateTypeProfile => {
    switch (action.type) {
        case 'SETPROFILEINFO': {
            return  {...state, profileDataInfo: action.profileInfo };
        }
        case 'SETPROFILEID': {
            return  {...state, profileId: action.id};
        }
        case 'SETPROFISTUS': {
            return  {...state, profileStatus: action.status};
        }
        case 'SETISFOLLOWING': {
            return  {...state, isFollowing: action.follow};
        }
        case 'SET-PHOTOS': {
            return  {...state, profileDataInfo: {...state.profileDataInfo , photos: action.photos}};
        }
        default:
            return state
    }
}
export  const setProfileInfoAC = (profileInfo:ProfileInfoType):TypeSetProfileInfo=>{
    return {
        type:'SETPROFILEINFO',
        profileInfo: profileInfo
    }
}
export  const setProfileIdAC = (id:number):TypeSetProfileID=>{
    return {
        type:'SETPROFILEID',
        id: id
    }
}
export  const setProfileStatusAC = (status: string):TypeSetProfileStatus=>{
    return {
        type:'SETPROFISTUS',
        status: status
    }
}
export  const setIsFollowingAC = (follow:boolean):TypeSetIsFollowing=>{
    return {
        type:'SETISFOLLOWING',
        follow: follow
    }
}
export  const setPhotos = (photos:object):TypeSetPhotos=>{
    return {
        type:'SET-PHOTOS',
        photos:photos
    }
}
export  const  getUserProfile = (userId:string)=>{
    return (dispatch:Dispatch)=>{
        profileAPI.getUserProfile(userId)
            .then((response) =>{
                dispatch(setProfileInfoAC(response.data))
                dispatch(setProfileIdAC(response.data.userId))
            })
    }
}
export  const  getUserStatus= (userId:string)=>{
    return (dispatch:Dispatch)=>{
        profileAPI.getStatus(userId)
            .then((response) =>{
                dispatch(setProfileStatusAC(response.data))
            })
    }
}
export  const  updateUserStatusTC= (status:string)=>{
    return (dispatch:Dispatch)=>{
        profileAPI.updateStatus(status)
            .then((response) =>{
                if (response.data.resultCode === 0){
                    dispatch(setProfileStatusAC(status))
                }
            })
    }
}
export  const  isFollowingTC= (id:number)=>{
    return (dispatch:Dispatch)=>{
        profileAPI.isFollowing(id)
            .then((response) =>{
                dispatch(setIsFollowingAC(response.data))
            })
    }
}
export  const  followMeTC = (userId:number)=>{
    return (dispatch:Dispatch)=>{
        dispatch(setFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then((response) =>{
                if (response.data.resultCode === 0 ){
                    dispatch(followAC(userId))
                    dispatch(setIsFollowingAC(true))
                }
                dispatch(setFollowingProgress(false, userId))
            })
            .catch(()=>{
                dispatch(setFollowingProgress(false, userId))
            })
    }
}
export  const  unFollowMeTC = (userId:number)=>{
    return (dispatch:Dispatch)=>{
        dispatch(setFollowingProgress(true, userId))
        usersAPI.unFollow(userId)
            .then((response) =>{
                if (response.data.resultCode === 0 ){
                    dispatch(unFollowAC(userId))
                    dispatch(setIsFollowingAC(false))
                }
                dispatch(setFollowingProgress(false, userId))

            })
            .catch(()=>{
                dispatch(setFollowingProgress(false, userId))
            })
    }
}
export  const  updatePhotoTC = (photo:Blob)=>{
    return (dispatch:Dispatch)=>{
        profileAPI.updatePhoto(photo)
            .then((response) =>{
                if (response.data.resultCode === 0 ){
                    dispatch(setPhotos(response.data.data.photos))
                    // console.log(response.data.data.photos)
                }
            })
            .catch(()=>{
            })
    }
}
