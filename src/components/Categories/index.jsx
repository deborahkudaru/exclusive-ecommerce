import Line from "../Line";
import categories from "@/constants/Categories";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Categories = () => {
  return (
    <div className="px-32 font-poppins">
      <Line />
      <div className="mt-10">
        <div className="flex gap-2 mb-5">
          <div className="bg-customRed w-5 h-10 rounded-sm"></div>
          <h3 className="text-customRed font-semibold">Categories</h3>
        </div>
      </div>
      <div className="flex justify-between mb-7">
        <h2 className="text-4xl font-semibold">Browse By Category</h2>
        <div className="flex gap-2 text-4xl">
          <button>
            <GoArrowLeft className="bg-gray-100 rounded-3xl p-1" />
          </button>
          <button>
            <GoArrowRight className="bg-gray-100 rounded-3xl p-1" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-10 my-5">
        {categories.map((category) => (
          <button className="border text-center py-5 hover:text-white hover:bg-customRed rounded" key={category.id}>
            <p className="text-7xl text-">{category.icon}</p>
            <p>{category.categoryName}</p>
          </button>
        ))}
      </div>
      <Line />
    </div>
  );
};

export default Categories;
