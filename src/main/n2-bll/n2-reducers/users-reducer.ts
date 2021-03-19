import { Dispatch } from "redux"
import {usersAPI} from "../../n3-dal/SocialAPI";


export type userType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    followed: boolean
    status: string | null
}

type TypeFollow = {
    type: 'FOLLOW'
    id: number
}
type TypeUnFollow = {
    type: 'UNFOLLOW'
    id: number
}
type TypeSetUsers = {
    type: 'SETUSERS'
    users: Array<userType>
}
type TypeSetCurrentPage = {
    type: 'SETCURRENTPAGE'
    currentPage: number
}
type TypeSetUsersCount = {
    type: 'SETUSERSCOUNT'
    usersCount: number
}
type TypeSetISLoadingUsers = {
    type: 'SET-IS-LOADING-USERS'
    load: boolean
}
type TypeSetFollowingProgress = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    value: boolean
    id: number
}

const initialState = {
    users: [] as Array<userType>,
    followingInProgress: [] as Array<number>,
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 19,
    isLoadingUsers: false

}
type ActionsType = TypeSetFollowingProgress |
    TypeSetUsersCount |
    TypeSetCurrentPage |
    TypeSetUsers |
    TypeUnFollow |
    TypeFollow |
    TypeSetISLoadingUsers

export type InitialStateTypeUsers = typeof initialState


export const usersReducer = (state: InitialStateTypeUsers = initialState, action: ActionsType): InitialStateTypeUsers => {
    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case 'SETUSERS' : {
            return {...state, users: action.users}

        }
        case 'SET-IS-LOADING-USERS' : {
            return {...state, isLoadingUsers: action.load}

        }
        case 'SETCURRENTPAGE' : {
            return {...state, currentPage: action.currentPage}

        }
        case 'SETUSERSCOUNT' : {
            return {...state, totalUsersCount: action.usersCount}

        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS' : {
            return {
                ...state, followingInProgress: action.value
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(i => i !== action.id)
            }

        }
        default:
            return state
    }
}

export const followAC = (id: number): TypeFollow => {
    return {
        type: 'FOLLOW',
        id: id,
    }
}
export const unFollowAC = (id: number): TypeUnFollow => {
    return {
        type: 'UNFOLLOW',
        id: id,
    }
}
export const setUsersAC = (users: Array<userType>): TypeSetUsers => {
    return {
        type: 'SETUSERS',
        users: users
    }
}
export const setCurrentPage = (currentPage:number): TypeSetCurrentPage => {
    return {
        type: 'SETCURRENTPAGE',
        currentPage:currentPage
    }
}
export const setUsersCount = (usersCount:number): TypeSetUsersCount  => {
    return {
        type: 'SETUSERSCOUNT',
        usersCount:usersCount
    }
}
export const setFollowingProgress = (value:boolean , id:number): TypeSetFollowingProgress  => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        value:value,
        id: id,
    }
}
export const setIsLoadingUsersAC = (load: boolean): TypeSetISLoadingUsers => {
    return {
        type: 'SET-IS-LOADING-USERS',
        load: load,
    }
}
export  const  getUsersThunkCreator = (currentPage:number, pageSize:number)=>{
    return (dispatch: Dispatch)=>{
        dispatch(setIsLoadingUsersAC(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then((data) =>{
                dispatch(setUsersAC(data.items))
                dispatch(setUsersCount(data.totalCount))
                dispatch(setIsLoadingUsersAC(false))
            })
    }
}

export  const  followTC = (userId:number)=>{
    return (dispatch:Dispatch)=>{
        dispatch(setFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then((response) =>{
                if (response.data.resultCode === 0 ){
                    dispatch(followAC(userId))
                }
                dispatch(setFollowingProgress(false, userId))
            })
            .catch(()=>{
                dispatch(setFollowingProgress(false, userId))
            })
    }
}
export  const  unFollowTC = (userId:number)=>{
    return (dispatch:Dispatch)=>{
        dispatch(setFollowingProgress(true, userId))
        usersAPI.unFollow(userId)
            .then((response) =>{
                if (response.data.resultCode === 0 ){
                    dispatch(unFollowAC(userId))
                }
                dispatch(setFollowingProgress(false, userId))

            })
            .catch(()=>{
                dispatch(setFollowingProgress(false, userId))
            })
    }
}

// export const exampleTC = () => (dispatch: Dispatch) => {
//
// }