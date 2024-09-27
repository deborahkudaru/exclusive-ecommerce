import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const SideMenu = () => {
  return (
    <div className="border-r-2">
      <ul className="mt-10 flex flex-col gap-3 font-poppins mr-10">
        <li className="flex justify-between">
          <Link href="">Women's Fashion</Link>
          <IoIosArrowForward className="text-xl relative left-6"/>
        </li>
        <li className="flex justify-between">
          <Link href="">Men's Fashion</Link>
          <IoIosArrowForward className="text-xl relative left-6"/>
        </li>
        <li>
          <Link href="">Electronics</Link>
        </li>
        <li>
          <Link href="">Home & Lifestyle</Link>
        </li>
        <li>
          <Link href="">Medicine</Link>
        </li>
        <li>
          <Link href="">Sports & Outdoor</Link>
        </li>
        <li>
          <Link href="">Baby's & Toys</Link>
        </li>
        <li>
          <Link href="">Groceries & Pets</Link>
        </li>
        <li>
          <Link href="">Health & beauty</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
