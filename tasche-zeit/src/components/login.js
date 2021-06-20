import React from 'react'
import './login.css';

export default function Login(){
    return (
        <div className="pageLogin">
            <input className="login" type="text" placeholder="Type in your login account"></input>
            <input className="passW" type="password" placeholder="Type in your password"></input>
        </div>
    );
}