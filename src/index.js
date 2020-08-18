import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import db from './config/fire';
import './index.css';
import LoginModal from './components/LoginModal';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


db.auth().onAuthStateChanged(userAuth => {
  if (userAuth) {
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
  }
  else {
    ReactDOM.render(
      <LoginModal modal={true} />,
      document.getElementById('root')
    );
  }
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
