import Marquee from "react-fast-marquee";

import allbrands from "../../../assets/home/svg/allbrands.svg";
import apple from "../../../assets/home/svg/apple.svg";
import canon from "../../../assets/home/svg/canon.svg";
import motorola from "../../../assets/home/svg/motorola.svg";
import samsung from "../../../assets/home/svg/samsung.svg";
import sony from "../../../assets/home/svg/sony.svg";

export default function Brands() {
  const brandsLogo = [apple, motorola, canon, samsung, sony, allbrands];

  return (
    <div aria-label="Brands Marquee" className="px-4">
      <Marquee pauseOnHover autoFill gradient pauseOnClick>
        {brandsLogo.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Brand logo"
            className="mx-4 h-28 w-49 rounded-2xl border border-gray-200 p-8"
          />
        ))}
      </Marquee>
    </div>
  );
}
