import React, {Component} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {accessToken, setAccessToken} from "../../util/GoogleApi";

function useQuery() {
    return new URLSearchParams(useLocation().hash);
}

export default function AuthPage() {
    let history = useHistory();
    let query = useQuery();
    let token = query.get("access_token");
    setAccessToken(token);
    setTimeout(() => {history.push("/")}, 5000);
    return (
        <div>
            <h1>{accessToken !== "" && accessToken !== undefined ? "Successfully Authenticated" : "An Error Occurred..."}</h1>
        </div>
    );
}