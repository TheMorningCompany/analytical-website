import React, {Component} from 'react';
import {oauthSignIn} from "../../../util/GoogleApi";
import {darkMode} from "../../../App";

export const SignInComponent = () => {
    return (
        <div className={"signInComponent"}>
            <h1 onClick={oauthSignIn}>Sign In</h1>
        </div>
    );
}
