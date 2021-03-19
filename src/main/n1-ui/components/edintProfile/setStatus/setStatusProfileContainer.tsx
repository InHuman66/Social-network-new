import React from 'react';
import SetStatusProfile from './setStatusProfile';
import {useDispatch, useSelector} from "react-redux";
import { AppRootStateType } from '../../../../n2-bll/n1-state/redux-state';
import { updateUserStatusTC } from '../../../../n2-bll/n2-reducers/profile-reducer';


const SetStatusProfileContainer= () => {
    const dispatch = useDispatch()
    const status= useSelector<AppRootStateType, string>(state => state.profileReducer.profileStatus)

    let updateUserStatus =(e:string)=>{
        dispatch(updateUserStatusTC(e))
    }
    return (
        <SetStatusProfile status={status} updateUserStatus={updateUserStatus}/>
    )
    ;
}

export default  SetStatusProfileContainer;