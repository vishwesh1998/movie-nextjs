import React from 'react'

export default function MovieItem({movieData}) {
  return (
    <div>{movieData.map(e=><p>{e.original_title}</p>)}</div>
  )
}