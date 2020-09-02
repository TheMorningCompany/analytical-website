import React, {Component} from 'react';
import {kFormatter} from "../../../util/NumberUtil";
import {stats} from "../../../index";

export default class CommentActivityComponent extends Component {
    render() {
        return (
            <div className={"component statsComponent commentActivityComponent"}>
                <h1 className={"componentTitle"}>Comment Activity</h1>
                <p className={"componentValue"}>{kFormatter(stats["comments"] === undefined ? 0 : stats["comments"])}</p>
            </div>
        );
    }
}