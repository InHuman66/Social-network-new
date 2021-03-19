import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderContainer from "./main/n1-ui/components/header/headerContainer";
import ProfileContainer from './main/n1-ui/components/Profile/profileContainer';
import SideBarContainer from "./main/n1-ui/components/sideBar/sideBarContainer";
import UsersContainer from './main/n1-ui/components/Users/usersContainer';
import {useDispatch} from "react-redux";
import {authMeTC} from "./main/n2-bll/n2-reducers/auth-reducer";
import EditProfileContainer from "./main/n1-ui/components/edintProfile/editProfileContainer";
import LoginContainer from './main/n1-ui/components/login/loginContainer';
import EditProfileHOC from "./main/n1-ui/components/edintProfile/editProfileHoc";


function App() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(authMeTC())
    },[])
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
