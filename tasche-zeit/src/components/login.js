import React from 'react'
import './login.css';

export default function Login(){
    return (
        <form action="" method="GET" className="pageLogin">
            <label className="login_label">Login:</label>
            <input className="login_input" type="text" placeholder="Type in your login account"></input>
            <input className="pass_input" type="password" placeholder="Type in your password"></input>
            <a href="www.google.com">Forgot your password?</a>
            
            <button className="continue">Continue</button>

            <p className="signUp">
                Dont have an account?
                <button>Sign Up</button>
            </p>
        </form>
    );
}