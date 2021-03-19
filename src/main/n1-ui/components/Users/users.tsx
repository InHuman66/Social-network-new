import React from 'react';
import classes from "./users.module.scss";
import { userType } from '../../../n2-bll/n2-reducers/users-reducer';
import User from "./user/user";
import ReactPaginate from 'react-paginate';
import LoadingAnim from "../../features/loading/LoadingAnim";
type propsType ={
    users: Array<userType>
    currentPage:number
    onPageChanged: (data:{selected:number})=>void
    pageCount: number
    follow:(id:number)=>void
    unFollow:(id:number)=>void
    followingInProgress: Array<Number>
    isLoadingUsers:boolean
}


const Users:React.FC<propsType>= (props) => {
    return (
        <div className={classes.users}>
                <div>
                    <ReactPaginate
                        forcePage={props.currentPage -1}
                        onPageChange={props.onPageChanged}
                        activeLinkClassName={classes.activePAge}
                        previousClassName={classes.liNextBtn}
                        nextLinkClassName={classes.nextBtn}
                        nextClassName={classes.liNextBtn}
                        breakClassName={classes.liStyle}
                        breakLinkClassName={classes.linkName}
                        pageClassName={classes.liStyle}
                        pageLinkClassName={classes.linkName}
                        containerClassName={classes.pagination}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={7}
                        pageCount={props.pageCount}/>
                    <div>
                    </div>
                    {props.isLoadingUsers
                        ?
                        <div className={classes.loadingWrapper}>
                            <LoadingAnim color={'dark'}/>
                        </div>
                        :
                        props.users.map(u =>
                            <User
                                followingInProgress={props.followingInProgress}
                                key={u.id}
                                users={u}
                                unFollow={props.unFollow}
                                follow={props.follow}
                            />)
                    }
                </div>
            </div>
    );
}

export default Users;