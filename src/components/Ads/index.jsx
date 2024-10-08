// import { FaApple } from "react-icons/fa";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import cards from "@/constants/CardAds";
// import { Swiper, SwiperSlide } from "swiper/react";

const Ads = () => {
  return (
    <div className="mt-10">
      {cards.map((card) => (
        <div className="bg-black text-white font-poppins flex" key={card.id}>
          <div className="relative top-10 px-10 flex flex-col gap-5">
            <div className="flex gap-3">
              <p className="text-4xl relative bottom-2">{card.icon}</p>
              <p className="">{card.cardName}</p>
            </div>
            <h2 className="text-5xl w-72 font-semibold">{card.discount}</h2>
            <Link
              href={card.itemURL}
              className="flex gap-2 underline underline-offset-8"
            >
              Shop Now <IoMdArrowForward className="text-xl mt-1" />
            </Link>
          </div>

          <Image src={card.cardImg} alt="ads" width={496} height={352} />
        </div>
      ))}
    </div>
  );
};

export default Ads;
