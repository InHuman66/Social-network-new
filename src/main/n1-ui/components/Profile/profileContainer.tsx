import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Profile from './profile';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../n2-bll/n1-state/redux-state";
import {
    followMeTC,
    getUserProfile,
    getUserStatus,
    InitialStateTypeProfile,
    isFollowingTC, unFollowMeTC
} from "../../../n2-bll/n2-reducers/profile-reducer";



type Params ={
    userId:string
}


const ProfileContainer= () => {
    let params = useParams<Params>()
    useEffect(()=>{
        if(params.userId){
            dispatch(isFollowingTC(Number(params.userId)))
            dispatch(getUserProfile(params.userId))
            dispatch(getUserStatus(params.userId))
        }
    },[ params.userId])
    const dispatch = useDispatch()
    const userData= useSelector<AppRootStateType, InitialStateTypeProfile>(state => state.profileReducer)
    const followingInProgress= useSelector<AppRootStateType, Array<Number>>(state => state.usersReducer.followingInProgress)
    let follow =(id:number)=>{
        dispatch(followMeTC(id))
    }
    let unFollow=(id:number)=>{
        dispatch(unFollowMeTC(id))
    }
    return (
        <Profile followingInProgress={followingInProgress} unFollow={unFollow} follow={follow} followed={userData.isFollowing} userStatus={userData.profileStatus} profileData={userData.profileDataInfo}/>
    )
    ;
}

export default  ProfileContainer;