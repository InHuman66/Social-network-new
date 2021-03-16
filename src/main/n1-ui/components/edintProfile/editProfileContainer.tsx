import React from 'react';
import EditProfile from './editProfile';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {LoginMeTC} from "../../../n2-bll/n2-reducers/auth-reducer";


export type FormikValuesEditProfileType ={
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}
const EditProfileContainer= () => {
    // const dispatch = useDispatch()
    // const authData= useSelector<AppRootStateType, stateData>(state => state.authReducer.data)

    const formik = useFormik({
        initialValues: {
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink:'',
        },
        onSubmit: values => {
            // dispatch(LoginMeTC(values.email, values.password, values.rememberMe))
            console.log(values)
        },
    });
    return (
        <EditProfile formik={formik}/>
    )
    ;
}

export default  EditProfileContainer;