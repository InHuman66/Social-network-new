import React from 'react';
import classes from "./profile.module.scss";
import nonUserPhoto from "../../../n4-materials/default_user.png"
import Posts from "./Posts/posts";
import {ProfileInfoType} from "../../../n2-bll/n2-reducers/profile-reducer";

type propsType ={
    profileData:ProfileInfoType
    userStatus:string
    followed:boolean
    follow:(id:number)=>void
    unFollow:(id:number)=>void
    followingInProgress: Array<Number>
}

const Profile:React.FC<propsType>= (props) => {

    return (
        <div className={classes.profile}>
            <div className={'row'}>
                <div className={'col-3 pl-sm-0 pr-sm-0'}>
                    <div className={classes.photoBar}>
                        <div className={classes.imgWrapper}>
                            <img alt={nonUserPhoto} src={props.profileData.photos?.large != null ? props.profileData.photos.large : nonUserPhoto}/>
                        </div>
                        <div className={classes.followedBlock}>
                            {props.followed
                                ? <button
                                    className={classes.btnUnfollow}
                                    disabled={props.followingInProgress.some(id => id === props.profileData.userId)}
                                    onClick={() => {props.unFollow(props.profileData.userId)}}
                                >Unfollow</button>
                                : <button className={classes.btnFollow}
                                          disabled={props.followingInProgress.some(id => id === props.profileData.userId)}
                                          onClick={() => {props.follow(props.profileData.userId)}}
                                >Subscribe</button>
                            }
                        </div>
                    </div>
                </div>
                <div className={classes.infoBlock + ' col-9'}>
                    <div className={classes.backGroundInfoBlock}>
                        <div className={classes.userName}>
                            <h1>{props.profileData.fullName}</h1>
                        </div>
                        <div className={classes.userStatus}>
                            <span>Status: </span>
                            <p>{props.userStatus}</p>
                        </div>
                        <div className={classes.userStatus}>
                            <span>About Me:</span>
                            <p>{props.profileData.aboutMe}</p>
                        </div>
                    </div>
                    <Posts/>
                </div>
            </div>
        </div>
    );
}

export default Profile;