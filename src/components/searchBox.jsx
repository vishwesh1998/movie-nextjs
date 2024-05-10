'use client'

import React from 'react'
import {useState} from 'react'
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'

export default function SearchBox() {

const [searchValue, setSearchValue] = useState('')
const router = useRouter()

let handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search/${searchValue}`)
}

  return (
    <div className='max-w-5xl mx-auto m-4'>
        <form className='flex justify-center' onSubmit={handleSubmit}>
        <input placeholder='Search Keywords ...' className='h-10 bg-transparent outline-none flex-1 pl-6' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
        <button className='pr-6 text-sm lg:text-md font-bold text-amber-500 disabled:text-gray-400' disabled={!searchValue}>Search</button>
        </form>
    </div>
  )
}
