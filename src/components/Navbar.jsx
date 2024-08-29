import NavbarItem from "./NavbarItem"


function Navbar() {
  return (
    <div className=" sm:flex gap-10 text-xl dark:bg-zinc-800 p-2  items-center justify-center  bg-zinc-500 text-white ">
        <NavbarItem title="Trending" param="fetchTrending"/>
        <NavbarItem title="Top Rated" param = "fetchTopRated" />
    </div>
  )
}

export default Navbar