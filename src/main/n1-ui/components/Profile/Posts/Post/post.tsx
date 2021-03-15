import React from 'react';
import classes from "./post.module.scss";
import userImg from "../../../../../n4-materials/default_user.png"
import { NavLink } from 'react-router-dom';

type propsType ={
    id:number
    message: string
    like:number
    img: string
}

const Post:React.FC<propsType>= (props) => {
    return (
        <div className={classes.post} key={props.id}>
            <div className={ classes.info + ' row col col-12'}>
                <NavLink to={'/profile/' + props.id}>
                    <img alt={'ups'} src={userImg}/>
                </NavLink>
                <p>{props.message}</p>
            </div>
            <p className={classes.like}>Likes: {props.like}</p>
        </div>
    );
}

export default Post;