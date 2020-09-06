import React, {Component} from 'react';
import {oauthSignIn} from "../../../util/GoogleApi";
import {darkMode} from "../../../App";

export default class SignInComponent extends Component {
    render() {
        return (
            <div style={{background: darkMode ? "#fff" : "#000", color: darkMode ? "#000" : "#fff"}} className={"signInComponent"}>
                <h1 onClick={oauthSignIn}>Sign In</h1>
            </div>
        );
    }
}