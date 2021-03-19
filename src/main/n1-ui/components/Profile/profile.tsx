import React, {ChangeEvent} from 'react';
import classes from "./profile.module.scss";
import nonUserPhoto from "../../../n4-materials/default_user.png"
import Posts from "./Posts/posts";
import {ProfileInfoType} from "../../../n2-bll/n2-reducers/profile-reducer";
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import LoadingAnim from "../../features/loading/LoadingAnim";

type propsType ={
    profileData:ProfileInfoType
    userStatus:string
    followed:boolean
    follow:(id:number)=>void
    unFollow:(id:number)=>void
    followingInProgress: Array<Number>
    userId: number | null
    changePhoto:(e:ChangeEvent<HTMLInputElement>)=>void
    modalIsOpen: boolean
    closeModal:()=>void
    openModal:()=>void
    isLoading: boolean
    isLoadingPhoto:boolean
}
const customStyles = {
    overlay:{
        background: 'linear-gradient(180deg,rgba(45,45,58,.85) 0%,rgba(43,43,53,.98) 100%)',
    },
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        width: '600px',
        boxShadow: '0 0 20px rgba(0,0,0,0.5)',
    }
};
const Profile:React.FC<propsType>= (props) => {
    return (
        <div className={classes.profile}>
            <div className={classes.loadingWrapper}>
                {props.isLoading &&
                    <div className={classes.loading}>
                        <LoadingAnim/>
                    </div>}
                <Modal
                    ariaHideApp={false}
                    isOpen={props.modalIsOpen}
                    onRequestClose={props.closeModal}
                    style={customStyles}
                    contentLabel="Loki"
                >
                    <div className={classes.modalWindow}>
                        <div className={classes.titleModal}>
                            <h1>Load your photo </h1>
                            <button onClick={props.closeModal}>x</button>
                        </div>
                        <div className={classes.contentModal}>
                            <p>It will be easier for your friends to recognize you if you upload your real photo.
                                You can upload the image in JPG, GIF or PNG format
                            </p>
                            <input type={'file'} onChange={props.changePhoto}/>
                        </div>
                        <div className={classes.modalHint}>
                            <p>If you're having trouble uploading, try choosing a smaller photo.</p>
                        </div>
                    </div>
                </Modal>
                <div className={'row'}>
                    <div className={'col-3 pr-sm-0'}>
                        <div className={classes.photoBar}>
                            <div className={props.userId === props.profileData.userId ?  classes.setPhotoBar : classes.imgWrapper}>
                                <div className={classes.wrapperHover}>
                                    {props.isLoadingPhoto &&
                                    <div className={classes.loading}>
                                        <LoadingAnim/>
                                    </div>}
                                    <img alt={nonUserPhoto} src={props.profileData.photos?.large != null ? props.profileData.photos.large : nonUserPhoto}/>
                                    <div className={classes.setImgBlock}>
                                        <p onClick={()=>props.openModal()}>Change photo</p>
                                    </div>
                                </div>
                            </div>
                            {props.userId === props.profileData.userId
                                ?
                                <div className={classes.settingsBtn}>
                                    <NavLink to={'/edit'}>Settings</NavLink>
                                </div>
                                :
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

                            }
                        </div>
                    </div>
                    <div className={classes.infoBlock + ' col-9'}>
                        <div className={classes.backGroundInfoBlock}>
                            <div className={classes.userName}>
                                <h1>{props.profileData.fullName}</h1>
                            </div>
                            {props?.userStatus &&
                            <div className={classes.userStatus}>
                                <span>Status: </span>
                                <p>{props.userStatus}</p>
                            </div>}
                            <div className={classes.userStatus}>
                                <span>About Me:</span>
                                <p>{props.profileData.aboutMe}</p>
                            </div>
                            {props.profileData?.lookingForAJobDescription &&
                            <div className={classes.userStatus}>
                                <span>For job:</span>
                                <p>{props.profileData.lookingForAJobDescription}</p>
                            </div>}
                            {props.profileData.contacts?.github &&
                             <div className={classes.userStatus}>
                                <span>Github: </span>
                                <p>{props.profileData.contacts.github}</p>
                            </div>}
                            {props.profileData.contacts?.vk && <div className={classes.userStatus}>
                                <span>Vk: </span>
                                <p>{props.profileData.contacts.vk}</p>
                            </div>}
                            {props.profileData.contacts?.facebook &&
                            <div className={classes.userStatus}>
                                <span>Facebook: </span>
                                <p>{props.profileData.contacts.facebook}</p>
                            </div>}
                            {props.profileData.contacts?.instagram &&
                            <div className={classes.userStatus}>
                                <span>Instagram: </span>
                                <p>{props.profileData.contacts.instagram}</p>
                            </div>}
                            {props.profileData.contacts?.twitter &&
                            <div className={classes.userStatus}>
                                <span>Twitter: </span>
                                <p>{props.profileData.contacts.twitter }</p>
                            </div>}
                            {props.profileData.contacts?.website &&
                            <div className={classes.userStatus}>
                                <span>Website: </span>
                                <p>{props.profileData.contacts.website}</p>
                            </div>}
                            {props.profileData.contacts?.youtube &&
                            <div className={classes.userStatus}>
                                <span>Youtube: </span>
                                <p>{props.profileData.contacts.youtube}</p>
                            </div>}
                            {props.profileData.contacts?.mainLink &&
                            <div className={classes.userStatus}>
                                <span>MainLink: </span>
                                <p>{props.profileData.contacts.mainLink}</p>
                            </div>}
                        </div>
                        <Posts/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;