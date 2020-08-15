import React from 'react';
import SideBar from './SideBar';
import Feed from './Feed'
import './App.css';

function App() {
  return (
    <div className="app row">
      {/* navigation sidebar */}
      <SideBar />
      {/* recipes feed*/}
      <Feed />
      {/* */}
      {/* */}
    </div >
  );
}

export default App;
