import React, {Component} from 'react';
import {kFormatter} from "../../../util/NumberUtil";
import {stats} from "../../../index";

export default class TotalViewsComponent extends Component {
    render() {
        return (
            <div className={"component statsComponent totalViewsComponent"}>
                <h1 className={"componentTitle"}>Total Views</h1>
                <p className={"componentValue"}>{kFormatter(stats["views"] === undefined ? 0 : stats["views"])}</p>
            </div>
        );
    }
}