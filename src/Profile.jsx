import React from 'react'
import db from './config/fire';
import './Profile'

export default function Profile() {
    return (
        <div className="col">
            <button onClick={() => {
                db.auth().signOut().then(() => {
                    console.log('logout')
                }).catch(function (error) {
                    console.log('/* An error happened.*/')
                });

            }}>logout</button>
        </div>
    )
}
