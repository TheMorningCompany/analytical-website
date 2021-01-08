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
	height={128}
        className={'profileImage'}
        alt={'User Profile'}
      />
      <h1>
        {stats.channelName === undefined ? 'you are signed out' : stats.channelName}
      </h1>
    </div>
  )
}
