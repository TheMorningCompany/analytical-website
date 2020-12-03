import React from 'react'

export const LatestVideoPerformanceComponent = () => {
  const videoTitle = 'VIDEO TITLE'
  const explanation =
    'In the first 6 days and 9 hours, this is how your video performed compared to your channel averages.'
  return (
    <div className={'component latestVideoPerformanceComponent'}>
      <h1 className={'componentTitle'}>Latest Video Performance</h1>
      <img
        className={'videoThumbnail'}
        src={'https://via.placeholder.com/300x166'}
        alt={'Video Thumbnail'}
      />
      <h1 className={'videoTitle'}>{videoTitle}</h1>
      <p className={'explanation'}>{explanation}</p>
      <ul className={'statsList'}>
        <li>
          <p className={'statTitle'}>View Ranking</p>
          <p className={'statValue'}>8 of 10</p>
          <div style={{ clear: 'both' }} />
        </li>
        <li>
          <p className={'statTitle'}>Views</p>
          <p className={'statValue'}>400</p>
          <div style={{ clear: 'both' }} />
        </li>
        <li>
          <p className={'statTitle'}>Impressions Clickthrough Rate</p>
          <p className={'statValue'}>12.2%</p>
          <div style={{ clear: 'both' }} />
        </li>
        <li>
          <p className={'statTitle'}>Average View Duration</p>
          <p className={'statValue'}>1:42</p>
          <div style={{ clear: 'both' }} />
        </li>
        <li>
          <p className={'statTitle'}>Like/Dislike Ratio</p>
          <p className={'statValue'}>100%</p>
          <div style={{ clear: 'both' }} />
        </li>
      </ul>
    </div>
  )
}
