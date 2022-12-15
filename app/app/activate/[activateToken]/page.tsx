import React from 'react'

export default function page({ params } : { params: { activateToken: string } }) {
    const { activateToken } = params


  return (
    <div>Twój token aktywacyjny to: {activateToken}</div>
  )
}
