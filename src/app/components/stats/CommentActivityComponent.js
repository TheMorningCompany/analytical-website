import React, {Component} from 'react';
import {kFormatter} from "../../../util/NumberUtil";

export default class CommentActivityComponent extends Component {
    render() {
        let comments = 12;
        return (
            <div className={"component statsComponent commentActivityComponent"}>
                <h1 className={"componentTitle"}>Comment Activity</h1>
                <p className={"componentValue"}>{kFormatter(comments)}</p>
            </div>
        );
    }
}