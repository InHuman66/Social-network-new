import React from 'react';
import SideBar from './sideBar';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../n2-bll/n1-state/redux-state";



const SideBarContainer= () => {
    const isUserAuth= useSelector<AppRootStateType, boolean>(state => state.authReducer.isAuth)
    const userId= useSelector<AppRootStateType, number | null>(state => state.authReducer.data.id)
    return (
        <SideBar isAuth={isUserAuth} userId={userId}/>
    )
    ;
}

export default  SideBarContainer;