import React from 'react';
import classes from "./profile.module.scss";
import nonUserPhoto from "../../../n4-materials/default-user-img.jpg"

type propsType ={

}

const Profile:React.FC<propsType>= (props) => {

    return (
        <div className={classes.profile}>
            <div className={'row'}>
                <div className={'col-3 pl-sm-0 pr-sm-0'}>
                    <div className={classes.photoBar}>
                        <div className={classes.imgWrapper}>
                            <img alt={nonUserPhoto} src={nonUserPhoto}/>
                        </div>
                        <div className={classes.menuPhotoBar}>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className={classes.infoBlock + ' col-9'}>
                    <div className={classes.backGroundInfoBlock}>
                        <div className={classes.userName}>
                            <h1>Loki dontri</h1>
                        </div>
                        <div className={classes.userStatus}>
                            <span>Status: </span>
                            <p> pzdc</p>
                        </div>
                        <div className={classes.userStatus}>
                            <span>About Me:</span>
                            <p>awdawd wadaw da dawd aw</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;