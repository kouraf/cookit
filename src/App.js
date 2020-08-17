import React from 'react';
import SideBar from './SideBar';
import Feed from './Feed'
import './App.css';

function App() {
  return (
    <div className="app container">
      <div className="row">
        {/* navigation sidebar */}
        <SideBar />
        {/* recipes feed*/}
        <Feed />
        {/* */}
        {/* */}
      </div>
    </div >
  );
}

export default App;
