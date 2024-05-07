import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaRegThumbsUp } from "react-icons/fa";


export default function Card({movieInternalData}) {
  return (
    <div className='my-3 sm:m-2 sm:border sm:border-slate-400 sm:p-4 rounded-lg sm:hover:shadow-slate-400 sm:shadow-lg transition-shadow duration-200'>
        <Link href={`/movies/${movieInternalData.id}`}>
        <Image
        src={`https://image.tmdb.org/t/p/original/${movieInternalData.backdrop_path || movieInternalData.poster_path}`} width={500} height={300}
        className='hover:opacity-80'></Image>
        </Link>
        <div>
            <p className='line-clamp-2'>{movieInternalData.overview}</p>
            <h1 className='text-lg font-bold truncate'>{movieInternalData.title || movieInternalData.name}</h1>
            <p className='flex'>
                {movieInternalData.popularity} <FaRegThumbsUp className='ml-4 mt-1 mr-1'/>
                {movieInternalData.vote_count}
                </p>
        </div>
    </div>
  )
}
