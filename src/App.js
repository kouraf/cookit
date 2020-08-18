import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import Feed from './Feed';
import Profile from './Profile';
import './App.css';

function App({ setIsLogin }) {
  return (
    <div className="app container">
      <div className="row">
        {/* navigation sidebar */}
        <SideBar />
        <Feed />
        <Profile />
        {/* */}
        {/* */}
      </div>
    </div >
  );
}

export default App;
