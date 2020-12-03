import axios from 'axios'

export let apiKey = ''
export const channelId = ''
export let accessToken = ''

export const setAccessToken = (token) => {
  accessToken = token
  localStorage.setItem('access_token', token)
}

export const init = async () => {
  console.log('INITIALIZING GOOGLE API')
  apiKey = process.env.REACT_APP_API_KEY
  const localToken = localStorage.getItem('access_token')
  if (localToken !== '' && localToken !== undefined && localToken !== null) {
    accessToken = localStorage.getItem('access_token')
  }
}

export const createUrlDataAPI = (endpoint) => {
  return `https://www.googleapis.com/youtube/v3/${endpoint}?mine=${true}&access_token=${accessToken}`
}

export const getChannel = async () => {
  if (accessToken === '' || accessToken === undefined) return undefined

  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()

  today = yyyy + '-' + mm + '-' + dd

  const metrics =
    'annotationClickThroughRate,annotationCloseRate,averageViewDuration,comments,dislikes,estimatedMinutesWatched,likes,shares,subscribersGained,subscribersLost,views'
  const url = `https://youtubeanalytics.googleapis.com/v2/reports?ids=channel==MINE&metrics=${metrics}&endDate=${today}&startDate=2005-02-14&access_token=${accessToken}`
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // console.log("MAKING REQUEST WITH URL", url);
  }
  return await axios.get(url).then((res) => {
    return res.data
  })
}

export const getChannel24H = async () => {
  if (accessToken === '' || accessToken === undefined) return undefined

  let today = new Date()
  let yesterday = new Date()
  yesterday.setDate(today.getDate() - 2)
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()
  const yesterday_dd = String(yesterday.getDate()).padStart(2, '0') // yesterday dd
  const yesterday_mm = String(yesterday.getMonth() + 1).padStart(2, '0') // yesterday mm
  const yesterday_yyyy = yesterday.getFullYear() // yesterday yyyy

  today = yyyy + '-' + mm + '-' + dd
  yesterday = yesterday_yyyy + '-' + yesterday_mm + '-' + yesterday_dd

  const metrics =
    'annotationClickThroughRate,annotationCloseRate,averageViewDuration,comments,dislikes,estimatedMinutesWatched,likes,shares,subscribersGained,subscribersLost,views'
  const url = `https://youtubeanalytics.googleapis.com/v2/reports?ids=channel==MINE&metrics=${metrics}&endDate=${today}&startDate=${yesterday}&access_token=${accessToken}`
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    console.log('MAKING REQUEST WITH URL', url)
  }
  return await axios.get(url).then((res) => {
    return res.data
  })
}

export const getChannelData = async () => {
  const url = createUrlDataAPI('channels') + '&part=snippet,brandingSettings'
  return await axios
    .get(url)
    .then((res) => {
      return res.data.items[0]
    })
    .catch((err) => console.log(err))
}

export const getChannelId = (dataObject) => {
  return dataObject.id
}

export const getChannelName = (dataObject) => {
  return dataObject.snippet.title
}

export const getChannelDescription = (dataObject) => {
  return dataObject.snippet.description
}

export const getChannelThumbnail = (dataObject, resolution = 'high') => {
  return dataObject.snippet.thumbnails[resolution].url
}

export const getBannerUrl = (dataObject, type = 'bannerImageUrl') => {
  console.log(dataObject)
  return dataObject.brandingSettings.image[type]
}

export const getStatIndex = (name, statsObject) => {
  const columnHeaders = statsObject.columnHeaders
  let i
  for (i = 0; i < columnHeaders.length; i++) {
    if (columnHeaders[i].name === name) return i
  }
}

export const getStatValue = (name, statsObject) => {
  return statsObject.rows[0][getStatIndex(name, statsObject)]
}

export const getViews = (statsObject = undefined) => {
  if (statsObject === undefined) {
    statsObject = getChannel()
  }

  return getStatValue('views', statsObject)
}

export const getSubscribersGained = (statsObject = undefined) => {
  if (statsObject === undefined) {
    statsObject = getChannel()
  }

  return getStatValue('subscribersGained', statsObject)
}

export const getSubscribersLost = (statsObject = undefined) => {
  if (statsObject === undefined) {
    statsObject = getChannel()
  }

  return getStatValue('subscribersLost', statsObject)
}

export const getSubscriberCount = (statsObject = undefined) => {
  if (statsObject === undefined) {
    statsObject = getChannel()
  }

  return getSubscribersGained(statsObject) - getSubscribersLost(statsObject)
}

export const getComments = (statsObject = undefined) => {
  if (statsObject === undefined) {
    statsObject = getChannel()
  }

  return getStatValue('comments', statsObject)
}

export const getMinutesWatched = (statsObject = undefined) => {
  if (statsObject === undefined) {
    statsObject = getChannel()
  }

  return getStatValue('estimatedMinutesWatched', statsObject)
}

export const getHoursWatched = (statsObject = undefined) => {
  if (statsObject === undefined) {
    statsObject = getChannel()
  }

  return getMinutesWatched(statsObject) / 60
}

export function oauthSignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth'

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  const form = document.createElement('form')
  form.setAttribute('method', 'GET') // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint)

  // Parameters to pass to OAuth 2.0 endpoint.
  const params = {
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri:
      !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/'
        : 'https://analytical.themorningcompany.net/',
    response_type: 'token',
    scope:
      'https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/yt-analytics.readonly',
    include_granted_scopes: 'false',
    state: 'pass-through value',
  }

  // Add form parameters as hidden input values.
  for (const p in params) {
    const input = document.createElement('input')
    input.setAttribute('type', 'hidden')
    input.setAttribute('name', p)
    input.setAttribute('value', params[p])
    form.appendChild(input)
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form)
  form.submit()
}

export function signOut() {
  localStorage.removeItem('access_token')
  window.location.reload(false)
}
