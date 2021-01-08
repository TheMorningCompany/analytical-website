import React from 'react'
import { Link } from 'react-router-dom'

export let selectedScreen = 0

export const selectScreen = (screen) => {
  selectedScreen = screen
  const listEntries = document.getElementsByClassName('listEntry')
  for (let i = 0; i < listEntries.length; i++) {
    const element = listEntries[i]
    element.className = element.className.replace(' selected', '')
  }
  document.getElementsByClassName(screen.toString())[0].className += ' selected'
}

export const ViewSelectorComponent = () => {
  return (
    <div className={'viewSelectorContainer'}>
      <div className={'component viewSelectorComponent'}>
        <ul>
          <Link className={'listEntry 0 selected'} to={{ pathname: '/' }}>
            dashboard
          </Link>
          <Link className={'listEntry 1'} to={{ pathname: '/videos' }}>
            videos
          </Link>
          <Link className={'listEntry 2'} to={{ pathname: '/playlists' }}>
            playlists
          </Link>
          <Link className={'listEntry 3'} to={{ pathname: '/analytics' }}>
            analytics
          </Link>
          <Link className={'listEntry 4'} to={{ pathname: '/commends' }}>
            comments
          </Link>
          <Link className={'listEntry 6'} to={{ pathname: '/monetization' }}>
            monetization
          </Link>
        </ul>
      </div>
    </div>
  )
}
