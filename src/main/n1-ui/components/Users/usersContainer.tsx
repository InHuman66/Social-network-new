import React, {useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../../n2-bll/n1-state/redux-state';
import Users from './users';
import {
    followTC,
    getUsersThunkCreator,
    InitialStateTypeUsers,
    setCurrentPage, unFollowTC
} from "../../../n2-bll/n2-reducers/users-reducer";


const UsersContainer= () => {
    const dispatch = useDispatch()
    const userData= useSelector<AppRootStateType, InitialStateTypeUsers>(state => state.usersReducer)
    useEffect(()=>{
        if(userData.users.length === 0){
            dispatch(getUsersThunkCreator(userData.currentPage, userData.pageSize))
        }
    })
    let pagesCount = Math.ceil( userData.totalUsersCount/ userData.pageSize)

    let onPageChange=(data:{selected:number})=>{
        dispatch(setCurrentPage(data.selected +1))
        dispatch(getUsersThunkCreator(data.selected +1, userData.pageSize))
    }
    let follow =(id:number)=>{
        dispatch(followTC(id))
    }
    let unFollow=(id:number)=>{
        dispatch(unFollowTC(id))
    }
    return (
        <Users followingInProgress={userData.followingInProgress} follow={follow } unFollow={unFollow} pageCount={pagesCount} onPageChanged={onPageChange} users={userData.users} currentPage={userData.currentPage} />
    )
    ;
}

export default  UsersContainer;