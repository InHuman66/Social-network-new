import React from 'react';
import EditProfile from './editProfile';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {InitialStateTypeAuth} from "../../../n2-bll/n2-reducers/auth-reducer";
import { AppRootStateType } from '../../../n2-bll/n1-state/redux-state';
import {Redirect} from "react-router-dom";
import {InitialStateTypeProfile, updateUserProfileData} from '../../../n2-bll/n2-reducers/profile-reducer';


export type FormikValuesEditProfileType ={
    aboutMe:string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string

}
type FormikErrorType = {
    aboutMe?:string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
}
const EditProfileContainer= () => {
    const dispatch = useDispatch()
    const authData= useSelector<AppRootStateType,InitialStateTypeAuth >(state => state.authReducer)
    const profileData= useSelector<AppRootStateType, InitialStateTypeProfile >(state => state.profileReducer)

    const formik = useFormik({
        initialValues: {
            aboutMe:profileData.profileDataInfo.aboutMe === null ? '':profileData.profileDataInfo.aboutMe ,
            lookingForAJob: profileData.profileDataInfo.lookingForAJob === null ? false : profileData.profileDataInfo.lookingForAJob,
            lookingForAJobDescription: profileData.profileDataInfo.lookingForAJobDescription === null ? '' : profileData.profileDataInfo.lookingForAJobDescription,
            fullName: profileData.profileDataInfo.fullName === null ? '' :profileData.profileDataInfo.fullName,
            github: profileData.profileDataInfo.contacts.github === null ? '' :profileData.profileDataInfo.contacts.github,
            vk: profileData.profileDataInfo.contacts.vk === null ? '' :profileData.profileDataInfo.contacts.vk,
            facebook: profileData.profileDataInfo.contacts.facebook === null ? '' :profileData.profileDataInfo.contacts.facebook,
            instagram: profileData.profileDataInfo.contacts.instagram === null ? '' :profileData.profileDataInfo.contacts.instagram,
            twitter: profileData.profileDataInfo.contacts.twitter === null ? '' :profileData.profileDataInfo.contacts.twitter,
            website: profileData.profileDataInfo.contacts.website === null ? '' :profileData.profileDataInfo.contacts.website,
            youtube: profileData.profileDataInfo.contacts.youtube === null ? '' :profileData.profileDataInfo.contacts.youtube,
            mainLink:profileData.profileDataInfo.contacts.mainLink === null ? '' :profileData.profileDataInfo.contacts.mainLink,
        },
        validate:(values)=>{
            const errors: FormikErrorType = {};
            if (!values.fullName) {
                errors.fullName = 'Required';
            }
            if (!values.lookingForAJobDescription) {
                errors.lookingForAJobDescription = 'Required';
            }
            if (!values.github){
            }else if(!/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]/.test(values.github)){
                errors.github = 'Wrong link';
            }
            if (!values.vk){
            }else if(!/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]/.test(values.vk)){
                errors.vk = 'Wrong link';
            }
            if (!values.facebook){
            }else if(!/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]/.test(values.facebook)){
                errors.facebook = 'Wrong link';
            }
            if (!values.instagram){
            }else if(!/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]/.test(values.instagram)){
                errors.instagram = 'Wrong link';
            }
            if (!values.twitter){
            }else if(!/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]/.test(values.twitter)){
                errors.twitter = 'Wrong link';
            }
            if (!values.website){
            }else if(!/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]/.test(values.website)){
                errors.website = 'Wrong link';
            }
            if (!values.youtube){
            }else if(!/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]/.test(values.youtube)){
                errors.youtube = 'Wrong link';
            }
            if (!values.mainLink){
            }else if(!/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]/.test(values.mainLink)){
                errors.mainLink = 'Wrong link';
            }


            return errors;
        },
        onSubmit: values => {
            dispatch(updateUserProfileData(authData.data.id? authData.data.id : 0,values))

        },
    });
    if (!authData.isAuth){
        return <Redirect to={'/login'}/>
    }
    if (authData.data.id !== profileData.profileDataInfo.userId){
        return <Redirect to={'/profile/' + authData.data.id}/>
    }
    return (
        <EditProfile isLoading={profileData.isLoading} formik={formik}/>
    )
    ;
}

export default  EditProfileContainer;