import React from 'react';
import classes from "./editProfile.module.scss";
import {FormikProps} from "formik";
import {FormikValuesEditProfileType} from "./editProfileContainer";
import {NavLink, Route} from 'react-router-dom';
import SetStatusProfileContainer from "./setStatus/setStatusProfileContainer";
import LoadingAnim from "../../features/loading/LoadingAnim";
type propsType ={
    formik:FormikProps<FormikValuesEditProfileType>
    isLoading:boolean
}

const EditProfile:React.FC<propsType>= (props) => {
    return (
        <div className={classes.editPage}>
            <div className={'row'}>
                <Route exact path={'/edit'}
                       render={()=>
                       <div className={'col-9'}>
                           <div className={classes.wrapperForLoadingAnim}>
                               {props.isLoading &&
                               <div className={classes.wrapperLoading}>
                                   <LoadingAnim/>
                               </div>}
                               <form onSubmit={props.formik.handleSubmit}>
                                   <div className={classes.InputWrapper}>
                                       <div className={classes.nameInputWrapper}>
                                           <div className={classes.nameInputWrapper}>
                                               <p>about me:</p>
                                           </div>
                                       </div>
                                       <input
                                            className={props.formik.errors.aboutMe && props.formik.touched.aboutMe ? classes.inputStyleError :  classes.inputStyle}
                                            {...props.formik.getFieldProps('aboutMe')}
                                       />
                                   </div>
                                   <div className={classes.InputWrapper}>
                                       <div className={classes.nameInputWrapper}>
                                           <div className={classes.nameInputWrapper}>
                                               <p>job description:</p>
                                           </div>
                                       </div>
                                       <input
                                            className={props.formik.errors.lookingForAJobDescription && props.formik.touched.lookingForAJobDescription ? classes.inputStyleError :  classes.inputStyle}
                                            {...props.formik.getFieldProps('lookingForAJobDescription')}
                                       />
                                   </div>
                                   <div className={classes.InputWrapper}>
                                       <div className={classes.nameInputWrapper}>
                                           <p>Full name:</p>
                                       </div>
                                       <input
                                            className={props.formik.errors.fullName && props.formik.touched.fullName ? classes.inputStyleError :  classes.inputStyle}
                                            {...props.formik.getFieldProps('fullName')}
                                       />
                                   </div>
                                   <div className={classes.InputWrapper}>
                                       <div className={classes.nameInputWrapper}>
                                           <p>Github:</p>
                                       </div>
                                       <div>
                                           <input
                                                className={props.formik.errors.github && props.formik.touched.github ? classes.inputStyleError :  classes.inputStyle}
                                                {...props.formik.getFieldProps('github')}
                                           />
                                           {props.formik.errors.github && props.formik.touched.github ? <div className={classes.error}><p>{props.formik.errors.github}</p></div> : null}
                                       </div>
                                   </div>
                                   <div className={classes.InputWrapper}>
                                       <div className={classes.nameInputWrapper}>
                                           <p>Vk:</p>
                                       </div>
                                       <input
                                            className={props.formik.errors.vk && props.formik.touched.vk ? classes.inputStyleError :  classes.inputStyle}
                                            {...props.formik.getFieldProps('vk')}
                                       />
                                   </div>
                                   <div className={classes.InputWrapper}>
                                       <div className={classes.nameInputWrapper}>
                                           <p>Facebook:</p>
                                       </div>
                                       <input
                                            className={props.formik.errors.facebook && props.formik.touched.facebook ? classes.inputStyleError :  classes.inputStyle}
                                            {...props.formik.getFieldProps('facebook')}
                                       />
                                   </div>
                                   <div className={classes.InputWrapper}>
                                       <div className={classes.nameInputWrapper}>
                                           <p>Instagram:</p>
                                       </div>
                                       <input
                                           className={props.formik.errors.instagram && props.formik.touched.instagram ? classes.inputStyleError :  classes.inputStyle}
                                           {...props.formik.getFieldProps('instagram')}
                                       />
                                   </div>
                                   <div className={classes.InputWrapper}>
                                       <div className={classes.nameInputWrapper}>
                                           <p>Twitter:</p>
                                       </div>
                                       <input
                                           className={props.formik.errors.twitter && props.formik.touched.twitter ? classes.inputStyleError :  classes.inputStyle}
                                           {...props.formik.getFieldProps('twitter')}/>
                                   </div>
                                   <div className={classes.InputWrapper}>
                                       <div className={classes.nameInputWrapper}>
                                           <p>Website:</p>
                                       </div>
                                       <input
                                            className={props.formik.errors.website && props.formik.touched.website ? classes.inputStyleError :  classes.inputStyle}
                                            {...props.formik.getFieldProps('website')}
                                       />
                                   </div>
                                   <div className={classes.InputWrapper}>
                                       <div className={classes.nameInputWrapper}>
                                           <p>YouTube:</p>
                                       </div>
                                       <input
                                            className={props.formik.errors.youtube && props.formik.touched.youtube ? classes.inputStyleError :  classes.inputStyle}
                                            {...props.formik.getFieldProps('youtube')}
                                       />
                                   </div>
                                   <div className={classes.InputWrapper}>
                                       <div className={classes.nameInputWrapper}>
                                           <p>MainLink:</p>
                                       </div>
                                       <input
                                           className={props.formik.errors.mainLink && props.formik.touched.mainLink ? classes.inputStyleError :  classes.inputStyle}
                                           {...props.formik.getFieldProps('mainLink')}
                                       />
                                   </div>
                                   <div className={classes.InputWrapper}>
                                       <div className={classes.nameInputWrapper}>
                                           <p>Looking for a job:</p>
                                       </div>
                                       <input className={classes.checkBox} name={'lookingForAJob'} type={'checkbox'} onChange={props.formik.handleChange} checked={props.formik.values.lookingForAJob}/>
                                   </div>
                                   <button className={classes.buttonSubmit} type={'submit'}>Submit</button>
                               </form>
                           </div>
                       </div>}
                />
                <Route exact path={'/edit/status'}
                       render={()=>
                       <div className={'col-9'}>
                           <SetStatusProfileContainer/>
                       </div>}
                />
                <div className={'col-3'}>
                    <div className={classes.EditMenuBackGround}>
                        <div>
                            <NavLink exact activeClassName={classes.active} to={'/edit'}>Main settings</NavLink>
                        </div>
                        <div>
                            <NavLink activeClassName={classes.active} to={'/edit/status'}>Status settings</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;