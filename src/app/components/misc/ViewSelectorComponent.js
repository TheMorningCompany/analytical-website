import React, {Component} from 'react';
import {useForceUpdate} from "../../../App";

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
            <div className={"component viewSelectorComponent"}>
                <ul>
                    <li className={"listEntry 0 selected"} onClick={() => selectScreen(0)}>Dashboard</li>
                    <li className={"listEntry 1"} onClick={() => selectScreen(1)}>Videos</li>
                    <li className={"listEntry 2"} onClick={() => selectScreen(2)}>Playlists</li>
                    <li className={"listEntry 3"} onClick={() => selectScreen(3)}>Analytics</li>
                    <li className={"listEntry 4"} onClick={() => selectScreen(4)}>Comments</li>
                    <li className={"listEntry 5"} onClick={() => selectScreen(5)}>Subtitles</li>
                    <li className={"listEntry 6"} onClick={() => selectScreen(6)}>Monetization</li>
                </ul>
            </div>
        );
    }
}