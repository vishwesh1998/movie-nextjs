import MenuItems from "./menuItems";
import { IoHome } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header(){
    return <div className="flex justify-between max-w-6xl mx-auto p-4 items-center">
        <div className="flex gap-4">
            <MenuItems title='Home' address='/' icon={<IoHome/>}/>
            <MenuItems title='About' address='/about' icon={<BsFillInfoCircleFill/>}/>
        </div>
        <div className="">
        <span className="text-2xl font-semibold bg-amber-500 rounded-lg py-1 px-1">IMDb</span>
        <span className="hidden sm:inline">Clone</span>
        </div>
    </div>
}