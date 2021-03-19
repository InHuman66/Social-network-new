import React, { ChangeEvent, useState, KeyboardEvent, useEffect } from 'react';
import classes from "./setStatusProfile.module.scss";
type propsType ={
    status:string
    updateUserStatus:(e:string)=>void
}

const SetStatusProfile:React.FC<propsType>= (props) => {
    let [statusValue, setStatusValue]=useState<string>(props.status)
    let currentRef =React.createRef<HTMLInputElement>();


    let updateStatus =()=>{
        // @ts-ignore
        props.updateUserStatus(currentRef.current.value)
    }
    let onChangeStatus =(e: ChangeEvent<HTMLInputElement>)=>{
        setStatusValue(e.currentTarget.value)
    }
    let pressEnter =(e: KeyboardEvent<HTMLInputElement>)=>{
        if(e.charCode === 13 ){
            updateStatus()
        }
    }
    useEffect(()=>{
        setStatusValue(props.status)
    },[props.status]);
    return (
        <div className={classes.blockStatus}>
            <div className={classes.inputWrapper}>
                <p>Status:</p>
                <input
                    onChange={onChangeStatus}
                    ref={currentRef}
                    autoFocus={true}
                    onKeyPress={pressEnter}
                    value={statusValue}
                />
            </div>
            <button onClick={()=>{updateStatus()}}>Submit</button>
        </div>
    );
}

export default SetStatusProfile;