import React from 'react'
import { kFormatter } from '../../../util/NumberUtil'

export const TotalViewsComponent = ({ views }) => {
  return (
    <div className={'component statsComponent totalViewsComponent'}>
      <h1 className={'componentTitle'}>Total Views</h1>
      <p className={'componentValue'}>
        {kFormatter(views === undefined ? 0 : views)}
      </p>
    </div>
  )
}
