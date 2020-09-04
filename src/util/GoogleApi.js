import {stats} from "../index";

const axios = require('axios');

export let apiKey = "";
export let channelId = "";
export let accessToken = "";

export const setAccessToken = (token) => {
    accessToken = token;
    localStorage.setItem("access_token", token);
}

export const init = async () => {
    console.log("INITIALIZING GOOGLE API");
    apiKey = process.env.REACT_APP_API_KEY;
    let localToken = localStorage.getItem("access_token");
    if (localToken !== "" && localToken !== undefined && localToken !== null)
        accessToken = localStorage.getItem("access_token");
}

export const createUrlDataAPI = (endpoint) => {
    return `https://www.googleapis.com/youtube/v3/${endpoint}?mine=${true}&access_token=${accessToken}`;
}

export const getChannel = async () => {
    if (accessToken === "" || accessToken === undefined) return undefined;


    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    let metrics = "annotationClickThroughRate,annotationCloseRate,averageViewDuration,comments,dislikes,estimatedMinutesWatched,likes,shares,subscribersGained,subscribersLost,views"
    let url = `https://youtubeanalytics.googleapis.com/v2/reports?ids=channel==MINE&metrics=${metrics}&endDate=${today}&startDate=2005-02-14&access_token=${accessToken}`;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        console.log("MAKING REQUEST WITH URL", url);
    }
    return await axios.get(url)
        .then((res) => {
            return res.data;
        });
}

export const getChannelData = async () => {

    let url = createUrlDataAPI('channels') + "&part=snippet";
    return await axios.get(url)
        .then((res) => {
            return res.data["items"][0];
        }).catch((err) => console.log(err));
}

export const getChannelId = (dataObject) => {
    return dataObject["id"];
}

export const getChannelName = (dataObject) => {
    return dataObject["snippet"]["title"];
}

export const getChannelDescription = (dataObject) => {
    return dataObject["snippet"]["description"];
}

export const getChannelThumbnail = (dataObject, resolution = "high") => {
    return dataObject["snippet"]["thumbnails"][resolution]["url"];
}

export const getStatIndex = (name, statsObject) => {
    let columnHeaders = statsObject["columnHeaders"];
    let i;
    for (i = 0; i < columnHeaders.length; i++) {
        if (columnHeaders[i]["name"] === name) return i;
    }
}

export const getStatValue = (name, statsObject) => {
    return statsObject["rows"][0][getStatIndex(name, statsObject)];
}

export const getViews = (statsObject = undefined) => {
    if (statsObject === undefined)
        statsObject = getChannel();

    return getStatValue("views", statsObject);
}

export const getSubscribersGained = (statsObject = undefined) => {
    if (statsObject === undefined)
        statsObject = getChannel();

    return getStatValue("subscribersGained", statsObject);
}

export const getSubscribersLost = (statsObject = undefined) => {
    if (statsObject === undefined)
        statsObject = getChannel();

    return getStatValue("subscribersLost", statsObject);
}

export const getSubscriberCount = (statsObject = undefined) => {
    if (statsObject === undefined)
        statsObject = getChannel();

    return getSubscribersGained(statsObject) - getSubscribersLost(statsObject);
}

export const getComments = (statsObject = undefined) => {
    if (statsObject === undefined)
        statsObject = getChannel();

    return getStatValue("comments", statsObject);
}

export const getMinutesWatched = (statsObject = undefined) => {
    if (statsObject === undefined)
        statsObject = getChannel();

    return getStatValue("estimatedMinutesWatched", statsObject);
}

export const getHoursWatched = (statsObject = undefined) => {
    if (statsObject === undefined)
        statsObject = getChannel();

    return getMinutesWatched(statsObject) / 60;
}

export function oauthSignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': process.env.REACT_APP_CLIENT_ID,
        'redirect_uri': !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://analytical.themorningcompany.net/',
        'response_type': 'token',
        'scope': 'https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/yt-analytics.readonly',
        'include_granted_scopes': 'false',
        'state': 'pass-through value'};

    // Add form parameters as hidden input values.
    for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
}

export function signOut() {
    localStorage.removeItem("access_token");
    window.location.reload(false);
}