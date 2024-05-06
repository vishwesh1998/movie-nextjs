'use client'

import {useEffect, useState} from 'react'
import { useSearchParams } from 'next/navigation'
// import dotenv from 'dotenv';
import MovieItem from '@/components/movieItem'

export default function Home(){
  // dotenv.config()
  const [movieData, setMovieData] = useState([])
  const param = useSearchParams()
  const urlPath = param.get('search')
  const apiKey = '9911b90ba56ed05e63fecdbc207d082d'

  let getApiData = async () => {
    let data = await fetch(`https://api.themoviedb.org/3/movie/${!urlPath ? 'popular' : urlPath}?api_key=${apiKey}&language=en-US&page=1`)
    if(data.ok){
      let result = await data.json()
      if(result)  
        // console.log(result)
        setMovieData(result.results)
    }
    else
    {
      throw new Error('Something went wrong !')
    }
  }

  // const results = result.results
  
  useEffect(()=>{
    // console.log(apiKey)
    getApiData()
  },[urlPath])

  return <div>
    <MovieItem movieData={movieData}/>
  </div>
}