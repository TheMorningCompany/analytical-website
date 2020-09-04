import React, {Component} from 'react';
import {stats} from "../../../index";

export default class UserDetailsComponent extends Component {
    render() {
        let defaultIcon = "https://eu.ui-avatars.com/api/?size=128";
        return (
            <div className={"userDetails"}>
                <img src={stats["channelProfilePicture"] === undefined ? defaultIcon : stats["channelProfilePicture"]} width={128}/>
                <h1>{stats["channelName"] === undefined ? "Sign In!" : stats["channelName"]}</h1>
            </div>
        );
    }
}