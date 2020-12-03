import React from 'react'
import { stats } from '../../../index'

export const UserDetailsComponent = () => {
  return (
    <div className={'userDetails'} style={{ left: 0 }}>
      {/* <img src={stats["channelBannerImage"] === undefined ? "" : stats["channelBannerImage"]} className={"bannerImage"}/> */}
      <img
        src={
          stats.channelProfilePicture === undefined
            ? ''
            : stats.channelProfilePicture
        }
        width={128}
        className={'profileImage'}
      />
      <h1>
        {stats.channelName === undefined ? 'Sign In!' : stats.channelName}
      </h1>
    </div>
  )
}
