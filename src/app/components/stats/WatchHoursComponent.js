import React, {Component} from 'react';
import {kFormatter} from "../../../util/NumberUtil";
import {stats} from "../../../index";

export default class WatchHoursComponent extends Component {
    render() {
        return (
            <div className={"component statsComponent watchHoursComponent"}>
                <h1 className={"componentTitle"}>Watch Hours</h1>
                <p className={"componentValue"}>{kFormatter(stats["hoursWatched"] === undefined ? 0 : stats["hoursWatched"].toFixed(1))}</p>
            </div>
        );
    }
}