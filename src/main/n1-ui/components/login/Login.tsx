import React from "react";
import { FormikProps } from "formik";
import classes from "./loginStyle.module.scss";
import LoadingAnim from "../../features/loading/LoadingAnim";
import { FormikValuesType } from "./loginContainer";

type LoginType={
    formik: FormikProps<FormikValuesType>
    isLoading: boolean
    // messageError: boolean
}
// onBlur={props.formik.handleBlur}
const Login:React.FC<LoginType> =(props)=>{
    return (
        <div className={classes.positionLoginBlock +' container'} >
            <div className={classes.beckGround}>
                <div className={classes.logIn_menu}>
                    <div className={props.isLoading ? classes.loading : classes.loadingDown  }><LoadingAnim /></div>
                    <h1>Sign-In</h1>
                    <form onSubmit={props.formik.handleSubmit}>
                        <div className={classes.menu_wrapper}>
                            <div className={classes.input_wrapper}>
                                <input  {...props.formik.getFieldProps('email')} placeholder={'your email'}/>
                                {props.formik.errors.email && props.formik.touched.email ? <div className={classes.error}><p>{props.formik.errors.email}</p></div> : null}
                            </div>
                            <div className={classes.input_wrapper}>
                                <input  {...props.formik.getFieldProps('password')} placeholder={'your password'}/>
                                {props.formik.errors.password && props.formik.touched.password ? <div className={classes.error}><p>{props.formik.errors.password}</p></div> : null}
                            </div>
                            <div className={classes.checkBox_wrapper}>
                                <input name={'rememberMe'} onChange={props.formik.handleChange} checked={props.formik.values.rememberMe} type={'checkbox'}/>
                                <p>Remember Me</p>
                            </div>
                            <button  disabled={props.isLoading} type={'submit'}  className={classes.button_signIn}>Sign In</button>
                        </div>
                    </form>
                    {/*<ErrorMessage showMessage={true}/>*/}
                </div>
            </div>
        </div>
    )
}

export default Login;