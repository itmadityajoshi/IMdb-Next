import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Header() {
  return (
    <div className="flex justify-between p-5 items-center bg-slate-400 mx-auto max-w-6xl">
      <div className="flex gap-5">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href={"/"} className="flex gap-1 items-center">
        <span className="font-bold bg-orange-600 p-2 rounded-lg ">IMDB</span>
        <span className="hidden sm:inline font-semibold">clone</span>
      </Link>
    </div>
  );
}

export default Header;
