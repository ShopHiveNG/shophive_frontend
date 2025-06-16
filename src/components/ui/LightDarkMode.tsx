import { useEffect, useState } from "react";

import { setLightMode, setDarkMode } from "../../utils/themeUtils";
import { Icons } from "../icons/Icon";

export default function LightDarkMode() {
  const { MoonIcon, SunIcon } = Icons;

  // Track the current theme in local state
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  useEffect(() => {
    // Function to update the theme based on localStorage or OS preference
    const updateTheme = () => {
      const darkMode =
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      document.documentElement.classList.toggle("dark", darkMode);
      setIsDarkMode(darkMode); // Update the state as well
    };

    // Initial theme update on component mount
    updateTheme();

    // Add event listener to update theme when OS preference changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateTheme);

    // Cleanup event listener on component unmount
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", updateTheme);
    };
  }, []);

  const handleThemeToggle = () => {
    if (isDarkMode) {
      setLightMode();
    } else {
      setDarkMode();
    }
    setIsDarkMode(!isDarkMode); // Toggle the state
  };

  return (
    <div className="flex">
      {/*Button toggle between Light/Dark Mode*/}
      <button
        onClick={handleThemeToggle}
        className="size-fit cursor-pointer rounded-xl"
      >
        {isDarkMode ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
}
