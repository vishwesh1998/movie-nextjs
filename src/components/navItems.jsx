'use client'

import { useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function NavItems({title, params}) {

    const param = useSearchParams() 
    const search = param.get('search')

    useEffect(()=>{
        console.log(search)
    })

  return (
    <div className="">
        <Link 
        className={`hover:text-amber-500 ${search === params ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg':''}`}
        href={`/?search=${params}`}>{title}</Link>
    </div>
  )
}
