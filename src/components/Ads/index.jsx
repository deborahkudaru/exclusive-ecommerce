import { FaApple } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Ads = () => {
  return (
    <div className="mt-10"> 
      <div className="bg-black text-white font-poppins flex">
        <div className="relative top-10 px-10 flex flex-col gap-5">
          <div className="flex gap-3">
            <FaApple className="text-4xl relative bottom-2"/>
            <p className="">iPhone 14 Series</p>
          </div>
          <h2 className="text-5xl w-72 font-semibold">Up to 10% off Voucher</h2>
          <Link href="/" className="flex gap-2 underline underline-offset-8">
            Shop Now <IoMdArrowForward className="text-xl mt-1"/>
          </Link>
        </div>

        <Image src="/images/iphoneads.png" alt="ads" width={496} height={352} />
      </div>
    </div>
  );
};

export default Ads;
