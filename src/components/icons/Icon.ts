import {
  IoChevronBack,
  IoChevronForward,
  IoClose,
  IoGameControllerOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { BsCreditCard2Front, BsRepeat } from "react-icons/bs";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { PiTruckLight, PiWechatLogoLight } from "react-icons/pi";
import { SlScreenSmartphone, SlUser } from "react-icons/sl";
import { TbDeviceWatchStats } from "react-icons/tb";

export const Icons = {
  SearchIcon: FiSearch,
  CartIcon: FiShoppingCart,
  UserIcon: SlUser,
  SunIcon: IoSunnyOutline,
  MoonIcon: IoMoonOutline,
  HamburgerIcon: HiMenuAlt3,
  CloseIcon: IoClose,
  ArrowRightIcon: FaArrowRight,
  TruckIcon: PiTruckLight,
  AtmCardIcon: BsCreditCard2Front,
  ArrowReturnIcon: BsRepeat,
  ChatIcon: PiWechatLogoLight,
  PhoneIcon: SlScreenSmartphone,
  SmartWatchIcon: TbDeviceWatchStats,
  CameraIcon: CiCamera,
  HeadphoneIcon: CiHeadphones,
  ComputerIcon: HiOutlineComputerDesktop,
  GameIcon: IoGameControllerOutline,
  ChevronRightIcon: IoChevronForward,
  ChevronLeftIcon: IoChevronBack,
};
