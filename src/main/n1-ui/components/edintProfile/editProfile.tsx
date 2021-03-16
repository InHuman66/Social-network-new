import React from 'react';
import classes from "./editProfile.module.scss";
import {FormikProps} from "formik";
import {FormikValuesEditProfileType} from "./editProfileContainer";
type propsType ={
    formik:FormikProps<FormikValuesEditProfileType>
}

const EditProfile:React.FC<propsType>= (props) => {
    return (
        <div className={classes.editPage}>
            <form onSubmit={props.formik.handleSubmit}>
                <div className={classes.InputWrapper}>
                    <p>Looking for a job:</p>
                    <input className={classes.checkBox} name={'lookingForAJob'} type={'checkbox'} onChange={props.formik.handleChange} checked={props.formik.values.lookingForAJob}/>
                </div>
                <div className={classes.InputWrapper}>
                    <div>
                        <p>job description:</p>
                    </div>
                    <input  {...props.formik.getFieldProps('lookingForAJobDescription')}/>
                </div>
                <div className={classes.InputWrapper}>
                    <p>Full name:</p>
                    <input {...props.formik.getFieldProps('fullName')}/>
                </div>
                <div className={classes.InputWrapper}>
                    <p>Github:</p>
                    <input {...props.formik.getFieldProps('github')}/>
                </div>
                <div className={classes.InputWrapper}>
                    <p>Vk:</p>
                    <input {...props.formik.getFieldProps('vk')}/>
                </div>
                <div className={classes.InputWrapper}>
                    <p>Facebook:</p>
                    <input {...props.formik.getFieldProps('facebook')}/>
                </div>
                <div className={classes.InputWrapper}>
                    <p>Instagram:</p>
                    <input {...props.formik.getFieldProps('instagram')}/>
                </div>
                <div className={classes.InputWrapper}>
                    <p>Twitter:</p>
                    <input {...props.formik.getFieldProps('twitter')}/>
                </div>
                <div className={classes.InputWrapper}>
                    <p>Website:</p>
                    <input {...props.formik.getFieldProps('website')}/>
                </div>
                <div className={classes.InputWrapper}>
                    <p>YouTube:</p>
                    <input {...props.formik.getFieldProps('youtube')}/>
                </div>
                <div className={classes.InputWrapper}>
                    <p>MainLink:</p>
                    <input {...props.formik.getFieldProps('mainLink')}/>
                </div>
                <button className={classes.buttonSubmit} type={'submit'}>Submit</button>
            </form>
        </div>
    );
}

export default EditProfile;