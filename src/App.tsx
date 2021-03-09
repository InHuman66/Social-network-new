import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from "./main/n1-ui/components/header/headerContainer";
import ProfileContainer from './main/n1-ui/components/Profile/profileContainer';
import SideBarContainer from "./main/n1-ui/components/sideBar/sideBarContainer";

function App() {
  return (
    <div>
      <div className={'container'}>
          <HeaderContainer/>
          <div className={'row'}>
              <div className={'col-3'}>
                  <SideBarContainer/>
              </div>
              <div className={'col-9'}>
                  <Route path={'/profile/:userId?'}
                         render={()=> <ProfileContainer/>}
                  />
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
