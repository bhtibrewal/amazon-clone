import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth, db} from './firebase';
import './SignIn.css'

export default function SignIn() {

    const amazonLogoBlack = 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.png';
    document.title = "Amazon | Sign In";
    //store the user email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    // sign in current users 
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                
                alert("Signed in Sucessfully!!");
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    // create a new user with email and password 
    // shows a alert on sucess and redirects to the home page
    const register = (e) => {
        e.preventDefault();
        // console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {

                alert("User Created Sucessfully!!");
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="sign-in-page">
            {/* logo */}
            <Link className="logo-black" to="/">
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
