import { Link, NavLink } from "react-router-dom";

import ShopHiveLogo from "../../assets/shophive.webp";
import { Icons } from "../icons/Icon";
import LightDarkMode from "../ui/LightDarkMode";
import Drawer from "./Drawer";

export default function NavBar() {
  const { CartIcon, SearchIcon, UserIcon } = Icons;

  const navLists = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between font-medium p-4 text-white bg-gray-800">
      <div className="size-12">
        <img
          src={ShopHiveLogo}
          alt="Shop Hive Logo"
          className="size-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="border-2 hidden sm:flex items-center gap-2 border-white px-2 py-1 rounded-2xl">
        <label htmlFor="search">
          <SearchIcon />
        </label>

        <input
          type="text"
          placeholder="Search the products"
          id="search"
          className="outline-none bg-transparent"
        />
      </div>

      <div className="xs:flex hidden gap-4 items-center">
        {navLists.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray-400"
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-8">
        <div className="gap-3 text-[1.375rem] flex items-center">
          <LightDarkMode />
          <Link to="/cart">
            <CartIcon />
          </Link>
          <Link to="/login">
            <UserIcon />
          </Link>
        </div>

        <div className="text-[1.375rem] xs:hidden block">
          <Drawer />
        </div>
      </div>
    </nav>
  );
}
