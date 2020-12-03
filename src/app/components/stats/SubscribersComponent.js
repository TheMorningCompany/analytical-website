import React from 'react'
import PropTypes from 'prop-types'

export const SubscribersComponent = ({ subscribers }) => {
  return (
    <div className={'component statsComponent subscribersComponent'}>
      <h1 className={'componentTitle'}>Subscribers</h1>
      <p className={'componentValue'}>
        {subscribers === undefined ? 0 : subscribers}
      </p>
    </div>
  )
}

SubscribersComponent.propTypes = {
  subscribers: PropTypes.number,
}
