const axios = require('axios');

export let apiKey = "";
export let channelId = "";

export const init = async () => {
    console.log("INITIALIZING GOOGLE API");
    apiKey = process.env.REACT_APP_API_KEY;
}

export const createUrlDataAPI = (endpoint) => {
    return `https://www.googleapis.com/youtube/v3/${endpoint}?key=${apiKey}&id=${channelId}`;
}

export const getChannelStats = async () => {
    if (channelId === "") {
        return {};
    }
    let url = createUrlDataAPI('channels') + "&part=statistics";
    return await axios.get(url)
        .then((res) => {
            return res.data["items"][0]["statistics"];
        });
}

export const getViews = (statsObject = undefined) => {
    if (statsObject === undefined) {
        statsObject = getChannelStats();
    }
    if (!Object.keys(statsObject).includes("viewCount")) return 0;
    return statsObject["viewCount"];
}

export const getSubscriberCount = (statsObject = undefined) => {
    if (statsObject === undefined) {
        statsObject = getChannelStats();
    }
    if (!Object.keys(statsObject).includes("subscriberCount")) return 0;
    return statsObject["subscriberCount"];
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
        'redirect_uri': 'https://localhost:3000',
        'response_type': 'token',
        'scope': 'https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/yt-analytics.readonly',
        'include_granted_scopes': 'true',
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