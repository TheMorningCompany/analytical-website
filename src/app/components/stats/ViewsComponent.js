import React, {Component} from 'react';
import {kFormatter} from "../../../util/NumberUtil";
import {darkMode} from "../../../App";

export default class ViewsComponent extends Component {
    render() {
        let views = 15665;
        return (
            <div className={"component statsComponent viewsComponent"}>
                <h1 className={"componentTitle"}>Realtime Views</h1>
                <p className={"componentValue"}>{kFormatter(views)}</p>
            </div>
        );
    }
}