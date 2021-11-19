import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, createUserWithEmailAndPassword, db } from './firebase';
import './SignIn.css'

export default function SignIn() {

    const amazonLogoBlack = 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.png';
    document.title = "Amazon Sign In";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
    }
    const register = (e) => {
        e.preventDefault();
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {

                console.log(auth);
                alert("user created");
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="sign-in-page">
            {/* logo */}
            <Link className="" to="/">
                <img className="header-logo signin" alt="" src={amazonLogoBlack} />
            </Link>

            <div className="sign-in container">
                <h1>Sign In</h1>
                <div>
                    <h5>Email</h5>
                    <input type="email" className="email-input" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <h5>Password</h5>
                    <input type="password" className="pass-input" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button className="button sign-in-button" type="submit" onClick={signIn}>Sign In</button>
                <div className="text">
                    By continuing you agree to Amazon clone's <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>
                </div>
            </div>
            <div className="divider">
                <h5>New to Amazon</h5>
            </div>

            <button onClick={register} className="secondary-button">
                Create an Account
            </button>
        </div>
    )
}
