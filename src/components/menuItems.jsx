import Link from "next/link";

export default function MenuItems({title, address, icon}){
    return <Link href={address} className="hover:text-amber-500">
            {/* <Icon className='text-2xl'/> */}
            <span className="text-2xl sm:hidden">{icon}</span>
            <p className="text-sm font-semibold hidden sm:block">{title}</p>
        </Link>
    
}