import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Login.css';
import { auth, provider } from '../../../firebase';
import * as ActionTypes from '../../../Context/actionTypes';
import { useStateValue } from '../../../Context/StateProvider';


const Login = (props) => {
    const [state, dispatch] = useStateValue();

    const logIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type: ActionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1605997942/facebook-clone/Color/PNG/f_logo_RGB-Blue_100_a01j34.png"
                    alt="facebook logo" />


                <img
                    src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
                    alt='Facebook Logo'
                />
                <div className="login__disclaimer">
                    <h3>Clone</h3>
                    <h5>Please note that this is a facebok mock app.
                    Demostrative for writing posts and user authentication.
                        You can register using your Google Account.<br />
                        <small>Version 1.0.0 -- Desktop only</small></h5>
                </div>


            </div>
            <Button
                type="submit"
                onClick={logIn}
            >Log in</Button>
        </div>
    )
}

export default Login;
