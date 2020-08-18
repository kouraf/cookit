import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCcJwITIM4y3HbunapH0NbRTu94-b-8VOw",
    authDomain: "cookit-9b669.firebaseapp.com",
    databaseURL: "https://cookit-9b669.firebaseio.com",
    projectId: "cookit-9b669",
    storageBucket: "cookit-9b669.appspot.com",
    messagingSenderId: "143386148872",
    appId: "1:143386148872:web:51abde134d52aa518191bd",
    measurementId: "G-9Q1W4XQRGX"
};
const db = firebase.initializeApp(firebaseConfig);
export default db;