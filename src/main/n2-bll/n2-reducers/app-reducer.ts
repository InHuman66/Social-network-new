import { Dispatch } from "redux"
import {authMeTC} from "./auth-reducer";

type setInitializedType ={
    type :'SET-INITIALIZED'
}


const initialState = {
    initialized: false,
}
type ActionsType = setInitializedType
export type InitialStateTypeAuth = typeof initialState


export const appReducer = (state: InitialStateTypeAuth = initialState, action: ActionsType): InitialStateTypeAuth => {
    switch (action.type) {
        case "SET-INITIALIZED":{
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

export  const setInitialized= ():setInitializedType=>{
    return {
        type:'SET-INITIALIZED',
    }
}
export  const initialiseAppTC =()=>(dispatch:Dispatch)=>{
    // @ts-ignore
    let promise = dispatch(authMeTC())
    Promise.all([promise])
        .then(()=>{
            dispatch(setInitialized())
        })
}
