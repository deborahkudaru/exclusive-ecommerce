import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import items from "@/constants/Items";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";

const Todays = () => {
  return (
    <>
      <div className="pl-48 pt-40 pr-5 font-poppins">
        <div>
          <div className="flex gap-2 mb-5">
            <div className="bg-customRed w-5 h-10 rounded-sm"></div>
            <h3 className="text-customRed font-semibold relative top-3">
              Today's
            </h3>
          </div>
          <div className="flex justify-between mb-7">
            <h2 className="text-4xl font-semibold">Flash Sales</h2>
            <div className="flex gap-2 text-4xl">
              <button>
                <GoArrowLeft className="bg-gray-100 rounded-3xl p-1" />
              </button>
              <button>
                <GoArrowRight className="bg-gray-100 rounded-3xl p-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {items.map((item) => (
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
                    {/* <button>
                  <FaHeart />
                </button> */}
                  </div>
                  <div>
                    <button className="text-xl bg-white rounded-full p-1">
                      <IoEyeOutline />
                    </button>
                    {/* <button><IoEyeSharp /></button> */}
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
        </div>
      </div>
      <button className="py-3 px-10 bg-customRed text-white font-medium rounded flex justify-center w-52 m-auto my-8">
        View All Products
      </button>
    </>
  );
};

export default Todays;
