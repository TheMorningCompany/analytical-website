import React from 'react'
import { oauthSignIn } from '../../../util/GoogleApi'

export const SignInComponent = () => {
  return (
    <div className={'signInComponent'}>
      <h1 onClick={oauthSignIn}>Sign In</h1>
    </div>
  )
}
