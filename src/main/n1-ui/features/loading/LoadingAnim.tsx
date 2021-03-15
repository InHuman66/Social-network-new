import React from 'react';
import classes from "./LoadingAnim.module.css";


const LoadingAnim=()=> {
  return (
      <div className={classes.ldsroller}>
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
