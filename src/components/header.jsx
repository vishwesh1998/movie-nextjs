import MenuItems from "./menuItems";
import { IoHome } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwtcih from '@/components/darkModeSwitch'
import Link from "next/link";

export default function Header(){
    return <div className="flex justify-between max-w-6xl mx-auto p-4 items-center">
        <div className="flex gap-4">
            <MenuItems title='Home' address='/' icon={<IoHome/>}/>
            <MenuItems title='About' address='/about' icon={<BsFillInfoCircleFill/>}/>
        </div>
        <div className="flex items-center">
        <span className="text-2xl mr-2 cursor-pointer hover:text-amber-500"><DarkModeSwtcih/></span>    
        <Link href='/'>
        <span className="text-2xl font-bold bg-amber-500 rounded-lg py-1 px-1">IMDb</span>
        <span className="hidden sm:inline">Clone</span>
        </Link>
        </div>
    </div>
}