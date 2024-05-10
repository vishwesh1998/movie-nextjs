'use client'

import Image from 'next/image'
import React from 'react'

export default async function MoviePage({params}) {

  const movieId = params.id  
  const apiKey = '9911b90ba56ed05e63fecdbc207d082d'

    let res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)

    let data = await res.json()
    console.log(data)

    console.log('hi')
  return (
    <div className='flex md:flex-row flex-col max-w-6xl mx-auto p-5 '>
      <Image 
      src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`} width={500} height={300} className='rounded-lg'
      >
      </Image>
      <div className='flex flex-col p-5 ml-3'>
      <h2 className='text-lg font-bold mb-3'>{data.title || data.name}</h2>
      <p className='text-md mb-3'>{data.overview}</p>
      <p className='font-bold mb-3'>
        <span className='mr-1'>Date Released :</span>
        {data.release_date}
      </p>
      <p  className='font-bold mb-3'>
        <span className='mr-1'>Ratings :</span>
        {data.vote_count}
      </p>
      </div>
    </div>
  )
}
