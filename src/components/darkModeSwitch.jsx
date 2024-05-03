'use client'

import {useTheme} from 'next-themes'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export default function DarkModeSwitch(){
    const {theme, setTheme, systemTheme} = useTheme()

    const currentTheme = theme === 'system' ? systemTheme : theme

    return <div>
        {currentTheme === 'dark' ? <MdLightMode onClick={()=>setTheme('light')}/> : <MdDarkMode onClick={()=>setTheme('dark')}/>}

    </div>
}