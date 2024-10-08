import { FaStar } from "react-icons/fa";

const bestProducts = [
  {
    id: 1,
    // discount: "-25%",
    itemImage: "/images/pinkcoat.png",
    itemName: "The north coat",
    discountPrice: "$260",
    actualPrice: "$360",
    rate: <FaStar />,
    numOfRaters: "(65)",
  },
  {
    id: 2,
    // discount: "-25%",
    itemImage: "/images/bag.png",
    itemName: "Gucci duffle bag",
    discountPrice: "$960",
    actualPrice: "$1160",
    rate: <FaStar />,
    numOfRaters: "(65)",
  },
  {
    id: 3,
    // discount: "-25%",
    itemImage: "/images/cooler.png",
    itemName: "RGB liquid CPU Cooler",
    discountPrice: "$160",
    actualPrice: "$170",
    rate: <FaStar />,
    numOfRaters: "(65)",
  },
  {
    id: 4,
    // discount: "-25%",
    itemImage: "/images/bookshelf.png",
    itemName: "Small BookShelf",
    discountPrice: "",
    actualPrice: "$360",
    rate: <FaStar />,
    numOfRaters: "(65)",
  },
  // {
  //   id: 5,
  //   // discount: "-25%",
  //   itemImage: "/images/chair.png",
  //   itemName: "S-Series Comfort Chair",
  //   discountPrice: "$375",
  //   actualPrice: "$400",
  //   rate: <FaStar />,
  //   numOfRaters: "(99)",
  // },
]

export default bestProducts;