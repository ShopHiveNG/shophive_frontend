import type { ReactNode } from "react";

import { Icons } from "@/components/icons/Icon";
// import ShopHiveLogo from "@/assets/shophive.webp";

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
    <footer className="bg-black-dark w-full p-9 px-4 text-white">
      <div className="xs:grid-cols-2 grid gap-x-2 gap-y-16 lg:grid-cols-4">
        {/*  ShopHive  */}
        <div className="space-y-4">
          <h6 className="text-xl font-semibold">ShopHive</h6>

          <div className="space-y-2.5 text-sm font-light text-gray-200">
            <p className="hover:text-secondary-light cursor-pointer transition-all duration-200">
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
                className="hover:text-secondary-light w-fit cursor-pointer capitalize transition-all duration-200"
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
                className="hover:text-secondary-light w-fit cursor-pointer capitalize transition-all duration-200"
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
                className="hover:text-secondary-light w-fit cursor-pointer capitalize transition-all duration-200"
              >
                {description}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* All Rights Reserved & Social Links */}
      <div className="mt-10 flex w-full flex-wrap items-center justify-between gap-2 border-t border-gray-200 pt-5 dark:border-slate-700">
        <p className="w-full text-center text-sm font-thin text-white sm:w-fit sm:text-left">
          © 2025 ShopHive. All Rights Reserved.
        </p>

        <div className="flex w-full items-center justify-center gap-2.5 sm:w-fit">
          {socialHandleLists.map(({ icon, link }, i) => (
            <a
              href={`https://${link}`}
              target="_blank"
              key={i}
              className="hover:bg-secondary cursor-pointer rounded-full p-1.5 text-[1.3rem] transition-all duration-300 hover:text-white dark:text-slate-400"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
