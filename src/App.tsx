import React from 'react';
import './App.css';
import HeaderContainer from "./main/n1-ui/components/header/headerContainer";
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
          </div>
      </div>
    </div>
  );
}

export default App;
