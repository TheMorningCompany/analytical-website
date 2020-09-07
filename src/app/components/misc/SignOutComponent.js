import React, {Component} from 'react';
import {oauthSignIn, signOut} from "../../../util/GoogleApi";
import {darkMode} from "../../../App";

export default class SignOutComponent extends Component {
    render() {
        return (
            <div className={"signInComponent"}>
                <h1 onClick={signOut}>Sign Out</h1>
            </div>
        );
    }
}