import { Link, NavLink } from "react-router-dom";

import ShopHiveLogo from "../assets/shophive.webp";
import { Icons } from "./icons/Icon";
import LightDarkMode from "./LightDarkMode";

export default function NavBar() {
  const { CartIcon, SearchIcon, UserIcon } = Icons;

  const navLists = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between font-medium p-4 text-white bg-green-600 dark:bg-gray-800">
      <div className="size-12">
        <img
          src={ShopHiveLogo}
          alt="Shop Hive Logo"
          className="size-full object-cover"
        />
      </div>

      <div className="border-2 flex items-center gap-2 border-white px-2 py-1 rounded-2xl">
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

      <div className="flex gap-4 items-center">
        {navLists.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-white/50"
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      <div className="gap-2 text-[1.375rem] flex items-center">
        <LightDarkMode />

        <Link to="/cart">
          <CartIcon />
        </Link>

        <Link to="/login">
          <UserIcon />
        </Link>
      </div>
    </nav>
  );
}
