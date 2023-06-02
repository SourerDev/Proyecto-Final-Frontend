import React from 'react'
import loading from '../Loading-mercadopago/loading.gif'

export default function Loading() {
  return (
    <div className="">
      <img
        className="h-96 rounded-lg"
        src={loading}
        alt="loading"
        width="100%"
        height="100%"
      />
    </div>
  )
}
