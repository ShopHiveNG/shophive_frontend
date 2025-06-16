import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

import allbrands from "../../../assets/home/svg/allbrands.svg";
import apple from "../../../assets/home/svg/apple.svg";
import canon from "../../../assets/home/svg/canon.svg";
import motorola from "../../../assets/home/svg/motorola.svg";
import samsung from "../../../assets/home/svg/samsung.svg";
import sony from "../../../assets/home/svg/sony.svg";

export default function Brands() {
  const brandsLogo = [
    apple,
    motorola,
    canon,
    samsung,
    sony,
    allbrands,
    motorola,
  ];
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    // Initial theme check
    updateTheme();

    // Watch for changes in theme via MutationObserver on <html> class
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Use rgba to handle opacity properly
  const gradientColor = isDarkMode
    ? { r: 31, g: 41, b: 55, a: 1 }
    : { r: 255, g: 255, b: 255, a: 1 };

  return (
    <div className="relative bg-white px-4 py-6 transition-colors duration-200 dark:bg-gray-800">
      <Marquee
        pauseOnHover
        autoFill
        gradient
        gradientColor={`rgba(${gradientColor.r},${gradientColor.g},${gradientColor.b},${gradientColor.a})`}
        gradientWidth={60}
        speed={70}
        pauseOnClick
      >
        {brandsLogo.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Brand logo"
            className="mx-4 h-28 w-48 rounded-2xl border border-gray-200 p-8 transition-colors duration-200 dark:border-gray-700"
          />
        ))}
      </Marquee>
    </div>
  );
}
