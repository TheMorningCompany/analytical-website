import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { accessToken, setAccessToken } from '../../../util/GoogleApi'

function useQuery() {
  return new URLSearchParams(useLocation().hash)
}

export const AuthComponent = () => {
  const history = useHistory()
  const query = useQuery()
  const token = query.get('access_token')
  if (token !== undefined && token !== '' && token !== null) {
    setAccessToken(token)
    setTimeout(() => {
      history.push('/')
    }, 5000)
    return (
      <div
        className={'successfullyAuthenticated'}
        style={{ textAlign: 'center' }}
      >
        <h1>
          {accessToken !== '' && accessToken !== undefined
            ? ''
            : 'there was an error signing you in.'}
        </h1>
      </div>
    )
  }
  return <div />
}
