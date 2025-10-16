import GirlHeadset from "../../../assets/home/girl_with_headset.webp";
import { Icons } from "../../icons/Icon";

export default function Banner() {
  const { ArrowRightIcon } = Icons;

  return (
    <div
      aria-label="Banner"
      className="grid h-[calc(100dvh-120px)] grid-cols-1 items-center overflow-hidden bg-gradient-to-r from-blue-200 to-cyan-100 sm:grid-cols-2"
    >
      <div className="flex w-full flex-col items-center space-y-8 px-6 pt-8 sm:items-start lg:flex-col lg:items-start lg:py-0">
        <p className="text-gray-600">Feel the real quality sound</p>

        <div className="flex flex-col items-center gap-y-4 text-5xl font-bold text-gray-900 sm:items-start">
          <h1>Headphones</h1>
          <h1>ProMax</h1>
        </div>

        <button className="group bg-gray hover:bg-secondary-light flex cursor-pointer items-center gap-3 rounded-md px-10 py-4 font-medium text-white transition-colors duration-300 sm:px-4 sm:py-2">
          Shop now
          <span className="transition-transform duration-300 group-hover:-rotate-45">
            {<ArrowRightIcon />}
          </span>
        </button>
      </div>

      <div className="size-full">
        <img
          src={GirlHeadset}
          alt="Girl with Headset"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
