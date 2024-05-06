'use client'

import {useTheme} from 'next-themes'
import { useEffect } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export default function DarkModeSwitch(){
    const {theme, setTheme, systemTheme} = useTheme()

    const currentTheme = theme === 'system' ? systemTheme : theme

    useEffect(()=>{
        console.log('theme', theme)
        console.log('Systemtheme', systemTheme)
    },[])

    return <div>
        {currentTheme === 'dark' ? <MdLightMode onClick={()=>setTheme('light')}/> : <MdDarkMode onClick={()=>setTheme('dark')}/>}

    </div>
}