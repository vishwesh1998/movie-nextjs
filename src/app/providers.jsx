'use client'

import {ThemeProvider} from 'next-themes'

export default function Providers({children}){
    return <ThemeProvider defaultTheme='system' attribute='class'>
        <div className='text-gray-600 dark:text-gray-200 dark:bg-gray-700 min-h-screen transition-colors duration-500 select-none'>
            {children}
            </div></ThemeProvider>
}