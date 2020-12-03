import React from 'react';
import {kFormatter} from "../../../util/NumberUtil";

export const WatchHoursComponent = ({ watchHours }) => {
    return (
        <div className={"component statsComponent watchHoursComponent"}>
            <h1 className={"componentTitle"}>Watch Hours</h1>
            <p className={"componentValue"}>{kFormatter(watchHours === undefined ? 0 : watchHours.toFixed(1))}</p>
        </div>
    );
}
