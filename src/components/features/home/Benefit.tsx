import type { ReactNode } from "react";

import { Icons } from "../../icons/Icon";

interface BenefitListsProp {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function Benefit() {
  const { TruckIcon, AtmCardIcon, ArrowReturnIcon, HeadsetIcon } = Icons;

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
      icon: <HeadsetIcon />,
      title: "24/7 Customer Support",
      description: "Friendly customer support",
    },
  ];

  return (
    <div
      aria-label="Benefits Lists"
      className="grid grid-cols-2 gap-x-2 gap-y-8 px-3 xl:grid-cols-4"
    >
      {benefitLists.map(({ icon, description, title }, i) => (
        <div
          key={i}
          className="flex size-full flex-col items-center gap-4 md:flex-row dark:text-white"
        >
          <div className="bg-secondary-fade grid aspect-square size-16 place-items-center rounded-2xl dark:bg-[#222934]">
            <span className="text-3xl">{icon}</span>
          </div>

          <div className="flex size-full flex-col justify-between text-center text-pretty md:justify-center md:text-left">
            <h3 className="font-bold">{title}</h3>

            <p className="text-sm font-light">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
