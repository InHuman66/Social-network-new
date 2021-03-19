import React from 'react';
import classes from "./LoadingAnim.module.css";

type propsType={
    color?:string
}

const LoadingAnim:React.FC<propsType>=(props)=> {
  return (
      <div className={props.color === 'dark' ?  classes.ldsroller : classes.ldsrollerWhite}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
}

export default LoadingAnim;
