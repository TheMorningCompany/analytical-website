import React from 'react';
import {kFormatter} from "../../../util/NumberUtil";

export const CommentActivityComponent = ({ comments }) => {
    return (
        <div className={"component statsComponent commentActivityComponent"}>
            <h1 className={"componentTitle"}>Comment Activity</h1>
            <p className={"componentValue"}>{kFormatter(comments === undefined ? 0 : comments)}</p>
        </div>
    );
}
