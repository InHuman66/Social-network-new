import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderContainer from "./main/n1-ui/components/header/headerContainer";
import ProfileContainer from './main/n1-ui/components/Profile/profileContainer';
import SideBarContainer from "./main/n1-ui/components/sideBar/sideBarContainer";
import UsersContainer from './main/n1-ui/components/Users/usersContainer';
import {useDispatch, useSelector} from "react-redux";
import LoginContainer from './main/n1-ui/components/login/loginContainer';
import EditProfileHOC from "./main/n1-ui/components/edintProfile/editProfileHoc";
import {initialiseAppTC} from "./main/n2-bll/n2-reducers/app-reducer";
import {AppRootStateType} from "./main/n2-bll/n1-state/redux-state";

import InitializingAnim from "./main/n1-ui/features/Initializing/InitializingAnim";


function App() {
    const initial= useSelector<AppRootStateType, boolean>(state => state.appReducer.initialized)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(initialiseAppTC())
    },[])
    if (!initial){
        return <div>
            <InitializingAnim/>
        </div>
    }
  return (
    <div>
      <div className={'container'}>
          <HeaderContainer/>
              <Switch>
                  <Route exact  path={'/login'} render={()=>
                      <LoginContainer/>
                  }/>
                  <Route path={'/'} render={()=>
                      <div className={'row'}>
                          <div className={'col-3'}>
                              <SideBarContainer/>
                          </div>
                          <div className={'col-9'}>
                              <Route path={'/profile/:userId?'}
                                     render={()=> <ProfileContainer/>}
                              />
                              <Route path={'/users'} render={()=>
                                  <UsersContainer/>
                              }/>
                              <Route path={'/edit'} render={()=>
                                  <EditProfileHOC/>
                              }/>
                          </div>
                      </div>
                  }/>
              </Switch>
      </div>
    </div>
  );
}

export default App;
