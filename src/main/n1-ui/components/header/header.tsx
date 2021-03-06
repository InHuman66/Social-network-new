import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./header.module.scss";
import logo from "../../../n4-materials/conversation.png"
type propsType ={
    login:string | null
    logOut:()=>void
}

const Header:React.FC<propsType>= (props) => {

    return (
        <div className={'container'}>
            <div className={classes.bg_header + ' row'}>
                <div className={classes.logo_position + ' col col-3'}>
                    <div className={classes.logo}>
                        <img alt={logo} className={classes.img_logo} src={logo}/>
                        <h1 className={classes.logo_txt}>Social Network</h1>
                    </div>
                </div>
                <div className={classes.search_menu + ' col col-3 offset-1 '}>
                    <div className={classes.search}>
                        <button></button>
                        <input placeholder={"Search"}/>
                    </div>
                </div>
                <div className={classes.header_menu + ' col col-4'}>
                    <NavLink to={'/inDevelopment'}>Home</NavLink>
                    <NavLink to={'/inDevelopment'}>Newsfeed</NavLink>
                    <NavLink to={'/inDevelopment'}>All&nbsp;Pages</NavLink>
                    <NavLink to={'/inDevelopment'}>Contact</NavLink>
                </div>
                <div className={classes.loginBlock + ' col col-1'}>
                    { props.login ? <NavLink to={'/login'} onClick={()=>{props.logOut()}}>Log out</NavLink>: <NavLink to={'/login'}>Login</NavLink> }
                </div>
            </div>
        </div>
    );
}

export default Header;