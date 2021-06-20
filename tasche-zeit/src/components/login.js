import React from 'react'
import './login.css';

export default function Login(){
    return (
        <form action="" method="GET" className="pageLogin">
            <div className="login">
                <label>Login:</label>
                <input className="login_input" type="text" placeholder="Type in your login account"></input>
            </div>
            <div className="password">
                <label>Password:</label>
                <input className="pass_input" type="password" placeholder="Type in your password"></input>
            </div>
            <button className="logButton">Send</button>
        </form>
    );
}