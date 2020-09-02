import React, {Component} from 'react';
import {stats} from "../../../index";

export default class UserDetailsComponent extends Component {
    render() {
        let username = "The Morning Company";
        let defaultIcon = "https://yt3.ggpht.com/a/AATXAJyVevgwtCWaOXufmNNMSYhJM15KSLuKh-hxmTGC=s800-c-k-c0xffffffff-no-rj-mo";
        return (
            <div className={"userDetails"}>
                <img src={stats["profilePicture"] === undefined ? defaultIcon : stats["profilePicture"]} width={128}/>
                <h1>{stats["username"] === undefined ? "Sign In!" : stats["username"]}</h1>
            </div>
        );
    }
}