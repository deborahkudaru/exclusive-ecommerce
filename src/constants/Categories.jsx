import { GiSmartphone } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { TbDeviceWatchStats } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import { PiHeadphonesLight } from "react-icons/pi";
import { TbDeviceGamepad } from "react-icons/tb";

const categories = [
  {
    id: 1,
    icon: <GiSmartphone />,
    categoryName: "Phones"
  },
  {
    id: 2,
    icon: <RiComputerLine />,
    categoryName: "Computers"
  },
  {
    id: 3,
    icon: <TbDeviceWatchStats />,
    categoryName: "SmartWatch"
  },
  {
    id: 4,
    icon: <CiCamera />,
    categoryName: "Camera"
  },
  {
    id: 5,
    icon: <PiHeadphonesLight />,
    categoryName: "HeadPhones"
  },
  {
    id: 6,
    icon: <TbDeviceGamepad />,
    categoryName: "Gaming"
  },
]

export default categories