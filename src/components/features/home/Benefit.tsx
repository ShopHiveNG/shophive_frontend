import type { ReactNode } from "react";

import { Icons } from "../../icons/Icon";

interface BenefitListsProp {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function Benefit() {
  const { TruckIcon, AtmCardIcon, ArrowReturnIcon, ChatIcon } = Icons;

  const benefitLists: BenefitListsProp[] = [
    {
      icon: <TruckIcon />,
      title: "Free Shipping & Returns",
      description: "For all orders over $199.00",
    },
    {
      icon: <AtmCardIcon />,
      title: "Secure Payment Option",
      description: "We ensure secure payment",
    },
    {
      icon: <ArrowReturnIcon />,
      title: "Money Back Guarantee",
      description: "Returning money within 30 days",
    },

    {
      icon: <ChatIcon />,
      title: "24/7 Customer Support",
      description: "Friendly customer support",
    },
  ];

  return (
    <div
      aria-label="Benefits"
      className="grid grid-cols-2 gap-x-2 gap-y-8 px-3 xl:grid-cols-4"
    >
      {benefitLists.map(({ icon, description, title }, i) => (
        <div
          key={i}
          className="flex size-full flex-col items-center gap-2 md:flex-row"
        >
          <div>
            <div className="flex size-21.5 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
              <span className="text-3xl text-gray-900 dark:text-white">
                {icon}
              </span>
            </div>
          </div>

          <div className="flex size-full flex-col justify-between text-center text-pretty md:justify-center md:text-left">
            <h3 className="font-semibold dark:text-white">{title}</h3>

            <p className="text-sm font-light text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
