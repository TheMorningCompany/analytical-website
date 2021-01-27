import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export let selectedScreen = 0

export const selectScreen = (screen) => {
  selectedScreen = screen;
  let entries = document.getElementsByClassName('listEntry');
  for (let i in entries) {
    let entry = entries[i];
    entry.className = entry.className.replace(' selected', '')
    if (i === selectedScreen) {
      entry.className = entry.className + ' selected';
    }
  }
  console.log(document.getElementsByClassName('listEntry'));
}

export const ViewSelectorComponent = () => {
  let [selectedScreen, setSelectedScreen] = useState(0);
  return (
    <div className={'viewSelectorContainer'}>
      <div className={'component viewSelectorComponent'}>
        <ul>
          <Link onClick={() => setSelectedScreen(0)} className={'listEntry entry-0' + (selectedScreen === 0 ? ' selected' : '')} to={{ pathname: '/' }}>
            dashboard
          </Link>
          <Link onClick={() => setSelectedScreen(1)} className={'listEntry entry-1' + (selectedScreen === 1 ? ' selected' : '')} to={{ pathname: '/videos' }}>
            videos
          </Link>
          <Link onClick={() => setSelectedScreen(2)} className={'listEntry entry-2' + (selectedScreen === 2 ? ' selected' : '')} to={{ pathname: '/playlists' }}>
            playlists
          </Link>
          <Link onClick={() => setSelectedScreen(3)} className={'listEntry entry-3' + (selectedScreen === 3 ? ' selected' : '')} to={{ pathname: '/analytics' }}>
            analytics
          </Link>
          <Link onClick={() => setSelectedScreen(4)} className={'listEntry entry-4' + (selectedScreen === 4 ? ' selected' : '')} to={{ pathname: '/commends' }}>
            comments
          </Link>
          <Link onClick={() => setSelectedScreen(5)} className={'listEntry entry-5' + (selectedScreen === 5 ? ' selected' : '')} to={{ pathname: '/monetization' }}>
            monetization
          </Link>
          <div class="bgContainer">
            <div class="bg"></div>
          </div>
        </ul>
      </div>
    </div>
  )
}
