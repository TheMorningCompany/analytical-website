import React from 'react'
import { kFormatter } from '../../../util/NumberUtil'

export const ViewsComponent = ({ views }) => {
  return (
    <div className={'component statsComponent viewsComponent'}>
      <h1 className={'componentTitle'}>Realtime Views</h1>
      <p className={'componentValue'}>{kFormatter(views)}</p>
    </div>
  )
}
