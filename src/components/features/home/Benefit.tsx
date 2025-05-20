import { Icons } from "../../icons/Icon";

export default function Benefit() {
  const { TruckIcon, AtmCardIcon, ArrowReturnIcon, ChatIcon } = Icons;

  const benefitLists = [
    {
      icon: <TruckIcon />,
      title: "Free Shipping & Returns",
      description: "For all orders over $199.00",
    },
    {
      icon: <AtmCardIcon />,
      title: "Secure Payment",
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
      className="grid grid-cols-2 gap-y-8 px-3 xl:grid-cols-4"
    >
      {benefitLists.map(({ icon, description, title }, i) => (
        <div key={i} className="flex flex-col items-center gap-2 md:flex-row">
          <div className="flex size-21.5 items-center justify-center rounded-full bg-gray-100">
            <span className="text-3xl text-gray-900">{icon}</span>
          </div>

          <div className="text-center text-pretty md:text-left">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
