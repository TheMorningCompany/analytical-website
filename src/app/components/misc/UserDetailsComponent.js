import React, {Component} from 'react';

export default class UserDetailsComponent extends Component {
    render() {
        let username = "The Morning Company";
        return (
            <div className={"userDetails"}>
                <img src={"https://eu.ui-avatars.com/api/?background=fff&color=000&size=128&name=The+Morning+Company&length=3&bold=true"} />
                <h1>{username}</h1>
            </div>
        );
    }
}