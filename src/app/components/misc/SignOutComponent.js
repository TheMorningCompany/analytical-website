import React from 'react'
import { signOut } from '../../../util/GoogleApi'

export const SignOutComponent = () => {
  return (
    <div className={'signInComponent'}>
      <h1 onClick={signOut}>Sign Out</h1>
    </div>
  )
}
