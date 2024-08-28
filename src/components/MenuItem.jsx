import Link from "next/link";

function MenuItem({ title, address, Icon }) {
  return (
    <>
     
        <Link href={address} className="hover:text-orange-600 font-bold ">
          <Icon className="text-2xl sm:hidden" />
          <p className="uppercase hidden sm:inline text-sm ">{title}</p>
        </Link>
     
    </>
  );
}

export default MenuItem;
