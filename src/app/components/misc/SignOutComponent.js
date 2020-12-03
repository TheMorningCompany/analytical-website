import React, {Component} from 'react';
import {oauthSignIn, signOut} from "../../../util/GoogleApi";
import {darkMode} from "../../../App";

export const SignOutComponent = () => {
    return (
        <div className={"signInComponent"}>
            <h1 onClick={signOut}>Sign Out</h1>
        </div>
    );
}
