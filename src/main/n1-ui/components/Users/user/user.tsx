import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./user.module.scss";
import nonUserPhoto from "../../../../n4-materials/default_user.png"
import {userType} from "../../../../n2-bll/n2-reducers/users-reducer";
type propsType = {
    users:userType
    follow:(id:number)=>void
    unFollow:(id:number)=>void
    followingInProgress: Array<Number>
}

const User:React.FC<propsType>= (props) => {

    return (
        <div key={props.users.id} className={classes.userBlock + ' row'}>
            <div className={classes.ImgFollowBlock + ' col-3'}>
                <NavLink to={'/profile/' + props.users.id}>
                    <img alt={''} src={props.users.photos.small != null ? props.users.photos.small : nonUserPhoto}/>
                </NavLink>
                {props.users.followed
                    ? <button
                        className={classes.btnUnfollow}
                        disabled={props.followingInProgress.some(id => id === props.users.id)}
                        onClick={() => {props.unFollow(props.users.id)}}
                    >Unfollow</button>
                    : <button className={classes.btnFollow}
                        disabled={props.followingInProgress.some(id => id === props.users.id)}
                        onClick={() => {props.follow(props.users.id)}}
                    >Follow</button>
                }
            </div>
            <div className={classes.contentBlock + ' col-9'}>
                <div className={classes.personalInfoBlock}>
                    <h1>{props.users.name}</h1>
                </div>
                <div className={classes.description}>
                    <p>{props.users.status != null ? props.users.status : ""}</p>
                </div>
            </div>
        </div>
    );
}

export default User;