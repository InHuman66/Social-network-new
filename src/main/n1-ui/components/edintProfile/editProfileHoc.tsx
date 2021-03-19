import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../n2-bll/n1-state/redux-state";
import {InitialStateTypeAuth} from "../../../n2-bll/n2-reducers/auth-reducer";
import {InitialStateTypeProfile} from "../../../n2-bll/n2-reducers/profile-reducer";
import {Redirect} from "react-router-dom";
import React from "react";
import EditProfileContainer from "./editProfileContainer";

const EditProfileHOC= () => {
    const authData= useSelector<AppRootStateType,InitialStateTypeAuth >(state => state.authReducer)
    const profileData= useSelector<AppRootStateType, InitialStateTypeProfile >(state => state.profileReducer)

    if (!authData.isAuth){
        return <Redirect to={'/login'}/>
    }
    if (authData.data.id !== profileData.profileDataInfo.userId){
        return <Redirect to={'/profile/' + authData.data.id}/>
    }
    if (!profileData.profileDataInfo.userId){
        return <Redirect to={'/profile/' + authData.data.id}/>
    }
    return (
        <EditProfileContainer/>
    )
        ;
}

export default  EditProfileHOC;