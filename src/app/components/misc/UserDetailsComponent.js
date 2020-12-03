import React, {Component} from 'react';
import {stats} from "../../../index";
import {darkMode} from "../../../App";

export const UserDetailsComponent = () => {
    let defaultIcon = "https://eu.ui-avatars.com/api/?size=128";
    let defaultBanner = "https://www.fillmurray.com/1024/1024"
    return (
        <div className={"userDetails"} style={{left: 0}}>
            {/*<img src={stats["channelBannerImage"] === undefined ? "" : stats["channelBannerImage"]} className={"bannerImage"}/>*/}
            <img src={stats["channelProfilePicture"] === undefined ? "" : stats["channelProfilePicture"]} width={128} className={"profileImage"}/>
            <h1>{stats["channelName"] === undefined ? "Sign In!" : stats["channelName"]}</h1>
        </div>
    );
}
