import React, {Component} from 'react';
import {oauthSignIn} from "../../../util/GoogleApi";

export default class SignInComponent extends Component {
    render() {
        return (
            <div className={"signInComponent"}>
                <h1 onClick={oauthSignIn}>Sign In</h1>
            </div>
        );
    }
}