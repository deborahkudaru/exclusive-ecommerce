import bestProducts from "@/constants/BestProducts";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";

const SellingProducts = () => {
  return (
    <div className="px-32 mt-20">
      <div>
        <div className="flex gap-2 mb-5">
          <div className="bg-customRed w-5 h-10 rounded-sm"></div>
          <h3 className="text-customRed font-semibold relative top-3">
            This month
          </h3>
        </div>
        <div className="flex justify-between mb-7">
          <h2 className="text-4xl font-semibold">Best Selling Products</h2>
          <button className="bg-customRed text-white px-10 py-3 rounded">
            View All
          </button>
        </div>
      </div>
      {/* <div className="grid grid-cols-4 gap-5">
        {bestProducts.map((item) => (
          <div key={item.id}>
            <div className="bg-gray-100 flex justify-between pt-3 px-3 pb-10">
              <p className="bg-customRed text-white py-1 px-2 rounded-sm h-6 text-xs">
                {item.discount}
              </p>
              <Image
                src={item.itemImage}
                alt=""
                width={172}
                height={152}
                className="m-auto"
              />
              <div className="flex flex-col gap-4">
                <div>
                  <button className="text-xl bg-white rounded-full p-1">
                    <CiHeart />
                  </button>
                  <button>
                  <FaHeart />
                </button>
                </div>
                <div>
                  <button className="text-xl bg-white rounded-full p-1">
                    <IoEyeOutline />
                  </button>
                  <button><IoEyeSharp /></button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium">{item.itemName}</p>
              <div className="flex gap-3">
                <p className="text-customRed">{item.discountPrice}</p>
                <p className="text-gray-500">{item.actualPrice}</p>
              </div>
              <div className="flex gap-3">
                <p>{item.rate}</p>
                <p className="text-gray-500">{item.numOfRaters}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* ad card */}
      <div>
        <div className="bg-black text-white flex px-20 py-10">
          <div>
            <div className="flex flex-col justify-around mb-20">
              <p className="text-customGreen">categories</p>
              <h2 className="text-5xl">Enhance Your Music Experience</h2>
              {/* <div>
              <div className="bg-white inline">
                <p className="text-black inline">
                  05 <br /> Days
                </p>
              </div>

              <p className="bg-white text-black">
                23 <br />
                Hours
              </p>
              <p className="flex flex-col bg-white text-black">
                59 <span>Minutes</span>
              </p>
              <p className="flex flex-col bg-white text-black">
                35 <span>Seconds</span>
              </p>
             </div> */}
            </div>
            <button className="bg-customGreen text-white font-poppins px-10 py-2">
              Buy Now!
            </button>
          </div>

          <div
          //  className="bg-gradient-radial from-white  to-black py-20 rounded-full"
           >
            <Image
              src="/images/boombox.png"
              alt=""
              width={568}
              height={330}
              className="m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingProducts;
