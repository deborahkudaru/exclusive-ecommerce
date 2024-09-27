import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Top = () => {
  return (
    <div className="font-poppins font-light px-32 bg-black">
      <div className="text-white py-6 text-sm">
        <div className="flex justify-center gap-2">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
          </p>
          <Link href="/" className="underline underline-offset-1 font-semibold">
            ShopNow
          </Link>
        </div>
        {/* <button className="flex justify-end">
          English
          <IoIosArrowDown className="text-2xl" />
        </button> */}
      </div>
    </div>
  );
};

export default Top;
