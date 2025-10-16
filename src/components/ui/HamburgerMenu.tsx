import { useEffect, useState } from "react";

import { Icons } from "@/components/icons/Icon";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const { HamburgerIcon, CloseIcon } = Icons;

  const toggleDrawer = () => setIsOpen((prev) => !prev);

  // Disable scroll when drawer is open
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    // Cleanup when component unmounts or state changes
    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      {/* Menu Button */}
      <button onClick={toggleDrawer} className="ext-white">
        <HamburgerIcon />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 z-40 bg-black/70"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            ShopHive
          </h2>

          <button
            onClick={toggleDrawer}
            className="text-gray-700 dark:text-gray-200"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="space-y-4 p-4 text-gray-800 dark:text-gray-100">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            About
          </a>
          <a href="#" className="block">
            Services
          </a>
          <a href="#" className="block">
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}
