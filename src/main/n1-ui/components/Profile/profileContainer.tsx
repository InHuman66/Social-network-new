import React, {ChangeEvent, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Profile from './profile';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../n2-bll/n1-state/redux-state";
import {
    followMeTC,
    getUserProfile,
    getUserStatus,
    InitialStateTypeProfile,
    isFollowingTC, unFollowMeTC, updatePhotoTC
} from "../../../n2-bll/n2-reducers/profile-reducer";



type Params ={
    userId:string
}


const ProfileContainer= () => {
    let params = useParams<Params>()
    const dispatch = useDispatch()
    const userData= useSelector<AppRootStateType, InitialStateTypeProfile>(state => state.profileReducer)
    const followingInProgress= useSelector<AppRootStateType, Array<Number>>(state => state.usersReducer.followingInProgress)
    const userId= useSelector<AppRootStateType, number | null>(state => state.authReducer.data.id)
    let follow =(id:number)=>{
        dispatch(followMeTC(id))
    }
    let unFollow=(id:number)=>{
        dispatch(unFollowMeTC(id))
    }
    useEffect(()=>{
        if(params.userId){
            dispatch(isFollowingTC(Number(params.userId)))
            dispatch(getUserProfile(params.userId))
            dispatch(getUserStatus(params.userId))
            console.log(params.userId)
        }
    },[params.userId])
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }

    let changePhoto =(e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
            if (e.target.files.length){
                // console.log(typeof e.target.files[0]);
                dispatch(updatePhotoTC(e.target.files[0]))
                closeModal();
            }
        }
    }
    return (
        <Profile closeModal={closeModal} modalIsOpen={modalIsOpen} openModal={openModal} changePhoto={changePhoto} userId={userId} followingInProgress={followingInProgress} unFollow={unFollow} follow={follow} followed={userData.isFollowing} userStatus={userData.profileStatus} profileData={userData.profileDataInfo}/>
    )
    ;
}

export default  ProfileContainer;