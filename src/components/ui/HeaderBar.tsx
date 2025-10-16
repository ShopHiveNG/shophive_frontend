import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Icons } from "@/components/icons/Icon";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import LightDarkMode from "@/components/ui/LightDarkMode";
import ShopHiveLogo from "@/assets/shophive.webp";

import NavBar from "./NavBar";

export default function HeaderBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus on Search when the page is in initial loads
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const { CartIcon, SearchIcon, UserIcon } = Icons;

  return (
    <header className="dark:bg-black-light bg-secondary-fade fixed z-[999] w-full space-y-4 p-4 font-medium transition-colors dark:text-white">
      <div className="flex w-full items-center justify-between gap-4 font-medium">
        {/* LOGO */}
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

        {/* SEARCH INPUT */}
        <div className="border-black-dark hidden w-[50%] items-center gap-2 rounded-2xl border-2 px-2 py-1 sm:flex dark:border-2 dark:border-white dark:text-white">
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

        {/* FAVOURITE, USER, CART */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-[1.375rem]">
            <LightDarkMode />

            <Link to="/cart">
              <CartIcon />
            </Link>

            <Link to="/auth/login">
              <UserIcon />
            </Link>
          </div>

          <div className="xs:hidden block text-[1.375rem]">
            <HamburgerMenu />
          </div>
        </div>
      </div>

      <NavBar />
    </header>
  );
}
