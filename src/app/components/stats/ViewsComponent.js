import React, {Component} from 'react';

export default class ViewsComponent extends Component {
    render() {
        let views = 0;
        return (
            <div className={"component statsComponent viewsComponent"}>
                <h1 className={"componentTitle"}>Realtime Views</h1>
                <p className={"componentValue"}>{views}</p>
            </div>
        );
    }
}