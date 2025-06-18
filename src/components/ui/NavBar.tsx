import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import ShopHiveLogo from "../../assets/shophive.webp";
import { Icons } from "../icons/Icon";
import LightDarkMode from "../ui/LightDarkMode";
import Drawer from "./Drawer";

export default function NavBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus on Search when the page is in initial loads
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const { CartIcon, SearchIcon, UserIcon } = Icons;

  const navLists: { label: string; path: string }[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed z-[999] flex w-full items-center justify-between gap-4 bg-gray-800 p-4 font-medium text-white opacity-100">
      <div className="size-12">
        <Link to="/">
          <img
            src={ShopHiveLogo}
            alt="Shop Hive Logo"
            className="size-full object-cover"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="hidden w-[50%] items-center gap-2 rounded-2xl border-2 border-white px-2 py-1 sm:flex">
        <label htmlFor="search">
          <SearchIcon />
        </label>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search the products"
          id="search"
          className="bg-transparent outline-none"
        />
      </div>

      <div className="xs:flex hidden items-center gap-4">
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
        <div className="flex items-center gap-3 text-[1.375rem]">
          <LightDarkMode />

          <Link to="/cart">
            <CartIcon />
          </Link>

          <Link to="/login">
            <UserIcon />
          </Link>
        </div>

        <div className="xs:hidden block text-[1.375rem]">
          <Drawer />
        </div>
      </div>
    </nav>
  );
}
