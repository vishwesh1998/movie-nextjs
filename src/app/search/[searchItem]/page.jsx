import Card from '@/components/card'
import React from 'react'

export default async function SearchPage({params}) {

let searchValue = params.searchItem

const apiKey = '9911b90ba56ed05e63fecdbc207d082d'

let data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${apiKey}&language=en-US&page=1`)
let res = await data.json()
let result = res.results

  return (
    <>
        {result.length !== 0 ? result.map(e=><div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-5xl mx-auto p-4'><Card movieInternalData={e} key={e.id}/></div>):<h1 className='mt-20 text-center text-xl font-bold dark:text-amber-600 p-4'>No Result Found, Please Try Again ... !</h1>}
        </>
  )
}
