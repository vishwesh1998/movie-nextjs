import React from 'react'
import Card from './card'

export default function MovieItem({movieData}) {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto p-4'>
      {movieData.map(e=><Card movieInternalData={e}/>)}
    </div>
  )
}