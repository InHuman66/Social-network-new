import { Dispatch } from "redux"
import { authUser } from "../../n3-dal/SocialAPI"

type setUserDataType ={
    type :'SET-USERDATA'
    data: stateData
    isAuth:boolean
}
type setLading ={
    type :'SET-LOADING'
    value:boolean
}
export type stateData ={
    id: number | null
    email: string | null
    login: string| null
}

const initialState = {
    data:{
        id:null,
        email:null,
        login: null,
    } as stateData,
    isAuth: false,
    loading: false,
}
type ActionsType = any
type InitialStateType = typeof initialState


export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USERDATA":{
            return {...state, data: action.data, isAuth: action.isAuth}
        }

        case "SET-LOADING":{
            return {...state, loading: action.value}
        }
        default:
            return state
    }
}

export  const setUserData= (data:stateData, isAuth:boolean):setUserDataType=>{
    return {
        type:'SET-USERDATA',
        data: data,
        isAuth:isAuth
    }
}
export  const setLoading= (value:boolean):setLading=>{
    return {
        type:'SET-LOADING',
        value: value
    }
}

export  const authMeTC =()=>{
    return (dispatch:Dispatch)=>{
        authUser.authUserEnter()
            .then((response) =>{
                if (response.data.resultCode === 0){
                    dispatch(setUserData(response.data.data, true))
                    console.log(response.data)
                }
            })
    }
}
export  const LoginMeTC =(login:string, password: string, rememberMe:boolean)=>{
    return (dispatch:Dispatch)=>{
        dispatch(setLoading(true))
        authUser.loginUser(login, password, rememberMe)
            .then((response) =>{
                if (response.data.resultCode === 0){
                    dispatch(setLoading(false))
                    // @ts-ignore
                    dispatch(authMeTC())
                    console.log(response.data)
                }else {
                    console.log(response.data, 'lox')
                    dispatch(setLoading(false))
                }
            })
    }
}
export  const logOutTC =()=>{
    return (dispatch:Dispatch)=>{
        authUser.logOut()
            .then((response) =>{
                if (response.data.resultCode === 0){
                    dispatch(setUserData({id: null,  email: null, login: null}, false))
                }
            })
    }
}
