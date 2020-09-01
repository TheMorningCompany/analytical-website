import React, {Component} from 'react';
import {kFormatter} from "../../../util/NumberUtil";

export default class TotalViewsComponent extends Component {
    render() {
        let views = 4200;
        return (
            <div className={"component statsComponent totalViewsComponent"}>
                <h1 className={"componentTitle"}>Total Views</h1>
                <p className={"componentValue"}>{kFormatter(views)}</p>
            </div>
        );
    }
}