import Link from "next/link";
import { BiBell, BiGlobe, BiNotepad, BiSearch } from "react-icons/bi";

const form = `
  bg-gray-700 flex items-center gap-2 rounded-md ml-auto pl-2
`;

const input = `
  bg-transparent h-[40px] outline-none
`;

export default function Navbar() {
  return (
    <nav className="text-white flex items-center px-8 py-4 bg-gray-800 rounded-md mt-8 mr-4">
      <span>Dashboard</span>
      <form role="search" className={form}>
        <BiSearch className="text-xl" />
        <input type="search" name="search" className={input} />
      </form>
      <div className="flex gap-2 ml-3 text-xl">
        <Link href="#">
          <BiNotepad />
        </Link>
        <Link href="#">
          <BiBell />
        </Link>
        <Link href="#">
          <BiGlobe />
        </Link>
      </div>
    </nav>
  );
}
