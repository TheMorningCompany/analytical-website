import React, {Component} from 'react';
import {stats} from "../../../index";

export default class SubscribersComponent extends Component {
    render() {
        return (
            <div className={"component statsComponent subscribersComponent"}>
                <h1 className={"componentTitle"}>Subscribers</h1>
                <p className={"componentValue"}>{stats["subscribers"] === undefined ? 0 : stats["subscribers"]}</p>
            </div>
        );
    }
}