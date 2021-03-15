import React from 'react';
import Header from './header';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../n2-bll/n1-state/redux-state";
import {logOutTC, stateData } from '../../../n2-bll/n2-reducers/auth-reducer';



const HeaderContainer= () => {
    const dispatch = useDispatch()
    const authData= useSelector<AppRootStateType, stateData>(state => state.authReducer.data)
    let logOut =()=>{
        dispatch(logOutTC())
    }
    return (
        <Header logOut={logOut} login={authData.login} />
    )
    ;
}

export default  HeaderContainer;