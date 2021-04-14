import React from 'react';
import classes from "./initializingAnim.module.css";

type propsType={
    color?:string
}

const InitializingAnim:React.FC<propsType>=(props)=> {
  return (
      <div className={classes.position}>
          <h1>
              Initializing...
          </h1>
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
      </div>
  );
}

export default InitializingAnim;
