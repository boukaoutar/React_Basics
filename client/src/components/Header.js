// src/components/Header.js

import React from 'react';
import Title from './Title.js';
import Description from './Description.js';

// importing logo from src folder - loaded as a file in the bundle
import logoFileFromSRC from '../logo.svg';
import UserInfo from './UserInfo.js';

// Logo served from the public folder (Production only)
// const logoPublicUrl = '/logo512.png';

// We don't need to specify the `props` argument as we are not using them in this component
function Header () {
  return (
      <header className="App-header">
        <img src={logoFileFromSRC} className="App-logo" alt="logo" />
        
      {/*       
          Use the <Title /> and <Description /> components
          and pass them the data via `props` or `props.children`.
      */}
      
      { <Title appTitle="Welcome To React, Ironhacker! " /> }
      { <Description> "You are ready to take this to the next level!" </Description> }
      { <UserInfo /> }


        
      </header>
  );
}

// export the component
export default Header;