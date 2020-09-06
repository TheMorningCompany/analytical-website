import React, {Component} from 'react';
import {darkMode, useForceUpdate} from "../../../App";
import {BrowserRouter, Link} from "react-router-dom";

export let selectedScreen = 0;

export const selectScreen = (screen) => {
    selectedScreen = screen;
    let listEntries = document.getElementsByClassName("listEntry");
    for (let i = 0; i < listEntries.length; i++) {
        let element = listEntries[i];
        element.className = element.className.replace(" selected", "");
    }
    document.getElementsByClassName(screen.toString())[0].className += " selected";
}

export default class ViewSelectorComponent extends Component {
    render() {
        return (
            <div className={"viewSelectorContainer"}>
                <div className={"component viewSelectorComponent"}>
                        <ul>
                            <Link className={"listEntry 0 selected"} to={{pathname: "/"}}>Dashboard</Link>
                            <Link className={"listEntry 1"} to={{pathname: "/videos"}}>Videos</Link>
                            <Link className={"listEntry 2"} to={{pathname: "/playlists"}}>Playlists</Link>
                            <Link className={"listEntry 3"} to={{pathname: "/analytics"}}>Analytics</Link>
                            <Link className={"listEntry 4"} to={{pathname: "/commends"}}>Comments</Link>
                            <Link className={"listEntry 5"} to={{pathname: "/subtitles"}}>Subtitles</Link>
                            <Link className={"listEntry 6"} to={{pathname: "/monetization"}}>Monetization</Link>
                        </ul>
                </div>
            </div>
        );
    }
}