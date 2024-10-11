import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Line from "../Line";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <div>
      <div className="flex px-32 pt-10 pb-6 justify-between font-poppins">
        <Logo />
        <nav>
          <ul className="flex gap-12">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5">
          <div className="bg-gray-100 flex gap-5 text-lg px-5 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 text-xs outline-0"
            />
            <CiSearch />
          </div>
          <div className="flex gap-5 text-2xl font-light">
            <Link href="">
              <CiHeart />
            </Link>
            <Link href="">
              <AiOutlineShoppingCart />
            </Link>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default Navbar;
