import React, {Component} from 'react';
import {kFormatter} from "../../../util/NumberUtil";

export default class WatchHoursComponent extends Component {
    render() {
        let watchHours = 37.2;
        return (
            <div className={"component statsComponent watchHoursComponent"}>
                <h1 className={"componentTitle"}>Watch Hours</h1>
                <p className={"componentValue"}>{kFormatter(watchHours)}</p>
            </div>
        );
    }
}