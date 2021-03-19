import { Dispatch } from "redux"
import {profileAPI, usersAPI} from "../../n3-dal/SocialAPI";
import {followAC, setFollowingProgress, unFollowAC} from "./users-reducer";
import {FormikValuesEditProfileType} from "../../n1-ui/components/edintProfile/editProfileContainer";

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
    photos:{
        small: null | string
        large: null | string
    }
}
type TypeSetIsLoading ={
    type: 'IS-LOADING'
    load:boolean
}
type TypeSetIsLoadingPhoto ={
    type: 'IS-LOADING-PHOTO'
    load:boolean
}

const initialState = {
    profileId: 0,
    profileDataInfo: {} as ProfileInfoType,
    profileStatus: "",
    isFollowing: false,
    isLoading: false,
    isLoadingPhoto:false,

}
type ActionsType = TypeSetIsLoading |
    TypeSetPhotos |
    TypeSetIsFollowing |
    TypeSetProfileStatus |
    TypeSetProfileID |
    TypeSetProfileInfo |
    TypeSetIsLoadingPhoto

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
        case 'IS-LOADING': {
            return  {...state, isLoading: action.load};
        }
        case 'IS-LOADING-PHOTO': {
            return  {...state, isLoadingPhoto: action.load};
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
export  const setIsLoadingAC = (load:boolean):TypeSetIsLoading=>{
    return {
        type:'IS-LOADING',
        load:load
    }
}
export  const setIsLoadingPhotoAC = (load:boolean):TypeSetIsLoadingPhoto=>{
    return {
        type:'IS-LOADING-PHOTO',
        load:load
    }
}
export  const setPhotos = (photos:{ small: null | string ,large: null | string }):TypeSetPhotos=>{
    return {
        type:'SET-PHOTOS',
        photos:photos
    }
}
export  const  getUserProfile = (userId:string)=>{
    return (dispatch:Dispatch)=>{
        dispatch(setIsLoadingAC(true))
        profileAPI.getUserProfile(userId)
            .then((response) =>{
                dispatch(setProfileInfoAC(response.data))
                dispatch(setProfileIdAC(response.data.userId))
                dispatch(setIsLoadingAC(false))
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
        dispatch(setIsLoadingPhotoAC(true))
        profileAPI.updatePhoto(photo)
            .then((response) =>{
                if (response.data.resultCode === 0 ){
                    dispatch(setPhotos(response.data.data.photos))
                    dispatch(setIsLoadingPhotoAC(false))
                }
                dispatch(setIsLoadingPhotoAC(false))
            })
            .catch(()=>{
                dispatch(setIsLoadingPhotoAC(false))
            })
    }
}
export  const  updateUserProfileData= (id:number, data:FormikValuesEditProfileType)=>{
    return (dispatch:Dispatch)=>{
        let newData = {
            aboutMe: data.aboutMe,
            userId:id,
            lookingForAJob: data.lookingForAJob,
            lookingForAJobDescription: data.lookingForAJobDescription,
            fullName: data.fullName,
            contacts:{
                github: data.github,
                vk: data.vk,
                facebook: data.facebook,
                instagram: data.instagram,
                twitter: data.twitter,
                website: data.website,
                youtube: data.youtube,
                mainLink: data.mainLink
            }
        }
        dispatch(setIsLoadingAC(true))
        console.log(newData)
        profileAPI.updateProfileData(newData)
            .then((response) =>{
                if (response.data.resultCode === 0){
                    dispatch(getUserProfile(id.toString()) as any)
                    dispatch(setIsLoadingAC(false))
                }
                dispatch(setIsLoadingAC(false))
            })
            .catch(()=>{
                dispatch(setIsLoadingAC(false))
            })
    }
}
