import React from 'react'
import Card from './card'

export default function MovieItem({movieData}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-5xl mx-auto p-4'>
      {movieData.map(e=><Card movieInternalData={e} key={e.id}/>)}
    </div>
  )
}