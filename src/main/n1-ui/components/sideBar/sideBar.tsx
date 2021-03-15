import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./sideBar.module.scss";
type propsType ={
    userId:number | null
    isAuth:boolean
}

const SideBar:React.FC<propsType>= (props) => {
    let userId:number | string = ''
    if (props.userId === null || undefined){
        userId = ''
    }else {
        userId = props.userId
    }
    return (
        <div className={classes.side_bar}>
            <div className={classes.side_bar_position}>
                <div className={classes.button}>
                    <NavLink
                        to={props.isAuth ? "/profile/" + userId : "/login"}
                        className={classes.txt_s}
                        activeClassName={classes.active}
                    >Profile</NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink
                        to="/users"
                        className={classes.txt_s}
                        activeClassName={classes.active}
                    >Users</NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink
                        to="/messages"
                        className={classes.txt_s}
                        activeClassName={classes.active}
                    >Messages</NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink
                        to="/news"
                        className={classes.txt_s}
                        activeClassName={classes.active}
                    >News</NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink
                        to="/music"
                        className={classes.txt_s}
                        activeClassName={classes.active}
                    >Music</NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink
                        to="/settings"
                        className={classes.txt_s}
                        activeClassName={classes.active}
                    >Settings</NavLink>
                </div>
            </div>
        </div>
    );
}

export default SideBar;