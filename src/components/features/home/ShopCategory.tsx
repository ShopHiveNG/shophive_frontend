import { Icons } from "../../icons/Icon";

export default function ShopCategory() {
  const {
    PhoneIcon,
    SmartWatchIcon,
    CameraIcon,
    HeadphoneIcon,
    ComputerIcon,
    GameIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
  } = Icons;

  const categoryLists = [
    { icon: <PhoneIcon />, name: "Phones" },
    { icon: <SmartWatchIcon />, name: "Smart Watches" },
    { icon: <CameraIcon />, name: "Cameras" },
    { icon: <HeadphoneIcon />, name: "Headphones" },
    { icon: <ComputerIcon />, name: "Computers" },
    { icon: <GameIcon />, name: "Gaming" },
  ];

  return (
    <div aria-label="Shop by category" className="space-y-4 px-4 text-gray-800">
      <div className="flex items-center justify-between dark:text-white">
        <h2 className="text-2xl font-bold">Shop by Category</h2>

        <div className="flex items-center text-2xl">
          <span>
            <ChevronLeftIcon />
          </span>
          <span>
            <ChevronRightIcon />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {categoryLists.map(({ icon, name }, index) => (
          <div
            key={index}
            className="flex h-30 w-full flex-col items-center justify-center gap-2 rounded-2xl bg-gray-100"
          >
            <div>
              <span className="text-5xl">{icon}</span>
            </div>

            <p className="text-sm text-gray-600">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
