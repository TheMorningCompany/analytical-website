import React, {Component} from 'react';

export default class SubscribersComponent extends Component {
    render() {
        let subscribers = 0;
        return (
            <div className={"component statsComponent viewsComponent"}>
                <h1 className={"componentTitle"}>Subscribers</h1>
                <p className={"componentValue"}>{subscribers}</p>
            </div>
        );
    }
}