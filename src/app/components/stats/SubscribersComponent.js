import React, {Component} from 'react';

export default class SubscribersComponent extends Component {
    render() {
        let subscribers = 208;
        return (
            <div className={"component statsComponent subscribersComponent"}>
                <h1 className={"componentTitle"}>Subscribers</h1>
                <p className={"componentValue"}>{subscribers}</p>
            </div>
        );
    }
}