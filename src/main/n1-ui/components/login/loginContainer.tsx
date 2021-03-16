import React, {useEffect} from 'react';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import { Redirect } from 'react-router-dom';
import Login from './Login';
import { AppRootStateType } from '../../../n2-bll/n1-state/redux-state';
import { LoginMeTC } from '../../../n2-bll/n2-reducers/auth-reducer';

export type FormikValuesType ={
    email: string
    password: string
    rememberMe: boolean
}


const LoginContainer= () => {
    const isLoading= useSelector<AppRootStateType, boolean>(state => state.authReducer.loading)
    const isAuth= useSelector<AppRootStateType, boolean | null>(state => state.authReducer.isAuth)
    const userId= useSelector<AppRootStateType, number | null>(state => state.authReducer.data.id)
    const dispatch = useDispatch()

    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate:(values)=>{
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters long';
            }

            return errors;
        },
        onSubmit: values => {
            dispatch(LoginMeTC(values.email, values.password, values.rememberMe))
        },
    });
    if (isAuth){
        return <Redirect to={'/profile/' + userId}/>
    }
    return (
        <Login isLoading={isLoading} formik={formik}/>
    )
        ;
}

export default  LoginContainer;