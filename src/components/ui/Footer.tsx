import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import ShopHiveLogo from "../../assets/shophive.webp";
import { Icons } from "../icons/Icon";

interface SocialHandle {
  icon: ReactNode;
  link: string;
}

export default function Footer() {
  const { InstagramIcon, LinkedInIcon, TwitterIcon } = Icons;
  const { ChevronDownIcon } = Icons;

  const socialHandleLists: SocialHandle[] = [
    { icon: <InstagramIcon />, link: "www.instagram.com" },
    { icon: <LinkedInIcon />, link: "www.linkedin.com" },
    { icon: <TwitterIcon />, link: "www.twitter.com" },
  ];

  const aboutCompanyLists = [
    "About company",
    "Our team",
    "Careers",
    "Contact us",
    "News",
  ];

  const accountLists = [
    "your account",
    "shipping rates & policies",
    "refunds & replacements",
    "delivery info",
    "order tracking",
    "taxes & fees",
  ];

  const customerServiceLists = [
    "payment methods",
    "money back guarantee",
    "product returns",
    "support center",
    "shipping",
    "term and conditions",
  ];

  return (
    <footer className="w-full bg-gray-800 p-9 px-4 text-white dark:bg-gray-900">
      <div className="xs:grid-cols-2 grid gap-x-2 gap-y-16 lg:grid-cols-4">
        {/*  ShopHive  */}
        <div className="space-y-4">
          <h6 className="text-xl font-semibold">ShopHive</h6>

          <div className="space-y-2.5 text-sm font-light text-gray-200">
            <p className="cursor-pointer transition-all duration-200 hover:text-[var(--color-secondary-light)]">
              Got question? Contact us 24/7
            </p>

            <p className="flex w-fit items-center gap-4 rounded bg-gray-700 px-5 py-2.5 text-gray-200">
              Help and Consultation
              <span>
                <ChevronDownIcon />
              </span>
            </p>
          </div>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h6 className="text-xl font-semibold">Company</h6>

          <div className="space-y-2.5 text-sm font-light text-gray-200">
            {aboutCompanyLists.map((description, i) => (
              <p
                key={i}
                className="cursor-pointer capitalize transition-all duration-200 hover:text-[var(--color-secondary-light)]"
              >
                {description}
              </p>
            ))}
          </div>
        </div>

        {/* Account */}
        <div className="space-y-4">
          <h6 className="text-xl font-semibold">Account</h6>

          <div className="space-y-2.5 text-sm font-light text-gray-200">
            {accountLists.map((description, i) => (
              <p
                key={i}
                className="cursor-pointer capitalize transition-all duration-200 hover:text-[var(--color-secondary-light)]"
              >
                {description}
              </p>
            ))}
          </div>
        </div>

        {/* Customer Service */}
        <div className="space-y-4">
          <h6 className="text-xl font-semibold">Customer Service</h6>

          <div className="space-y-2.5 text-sm font-light text-gray-200">
            {customerServiceLists.map((description, i) => (
              <p
                key={i}
                className="cursor-pointer capitalize transition-all duration-200 hover:text-[var(--color-secondary-light)]"
              >
                {description}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* All Rights Reserved & Social Links */}
      <div className="mt-10 flex w-full flex-wrap items-center justify-between gap-5 border-t border-gray-200 pt-5 dark:border-slate-700">
        <Link to="/">
          <img src={ShopHiveLogo} alt="logo" className="size-8 object-cover" />
        </Link>

        <p className="text-sm font-thin text-white">
          © 2025 ShopHive. All Rights Reserved.
        </p>

        <div className="flex items-center gap-2.5">
          {socialHandleLists.map(({ icon, link }, i) => (
            <a
              href={`https://${link}`}
              target="_blank"
              key={i}
              className="cursor-pointer rounded-full p-1.5 text-[1.3rem] transition-all duration-300 hover:bg-[var(--color-secondary)] hover:text-white dark:text-slate-400"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
