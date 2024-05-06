import NavItems from "./navItems";

export default function NavBar(){
    return <div className="flex gap-5 justify-center bg-amber-100 dark:bg-gray-600 p-4 lg:text-lg font-semibold">
        <NavItems title='Trending' params='popular'/>
        <NavItems title='Top Rating' params='top_rated'/>
    </div>
}