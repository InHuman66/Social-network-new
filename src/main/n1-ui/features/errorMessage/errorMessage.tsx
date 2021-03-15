import React, {useState, useEffect} from 'react';
import classes from "./errorMessage.module.css";
import {useDispatch} from "react-redux";

type propsType ={
    showMessage: boolean
}



const ErrorMessage:React.FC<propsType>=(props)=> {
    const dispatch = useDispatch()
    let [styleForMessage, setStyleForMessage]= useState(classes.messageWrapperDown)
    let onClickCloseMessage =()=>{
        // dispatch(setMessageErrorAC(false))
        setStyleForMessage(classes.messageWrapperDown)
    }
    const showMessage = ()=>{
        setStyleForMessage(classes.messageWrapper)
        setTimeout(()=>{
            // dispatch(setMessageErrorAC(false))
            setStyleForMessage(classes.messageWrapperDown)
        },7000)
    }
    useEffect(()=>{
        if (props.showMessage){
            showMessage()
        }
    })

  return (
      <div className={styleForMessage}>
            <p>Error, your message has not been sent!</p>
            <button onClick={()=>{onClickCloseMessage()}}>X</button>
      </div>
  );
}

export default ErrorMessage;
