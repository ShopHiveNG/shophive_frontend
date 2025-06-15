import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";

const ResponsiveFooter = () => {
  return (
    <footer className="w-full bg-white px-4 shadow-md md:p-9 dark:bg-gray-900">
      <div className="flex w-full flex-wrap justify-between gap-[30px]">
        <div>
          <h3 className="mb-2 text-[1.2rem] font-semibold text-[#424242] dark:text-[#abc2d3]">
            ShopHive
          </h3>
          <div className="flex flex-col gap-[10px] text-black">
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Dribbble
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Behance
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Medium
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Instagram
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Facebook
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Twitter
            </p>
          </div>
        </div>

        <div className="">
          <h3 className="mb-2 text-[1.2rem] font-semibold text-[#424242] dark:text-[#abc2d3]">
            Services
          </h3>
          <div className="flex flex-col gap-[10px] text-black">
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              UI Components
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Website Templates
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Icons
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Opacity Palette
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Blocks
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-[1.2rem] font-semibold text-[#424242] dark:text-[#abc2d3]">
            Company
          </h3>
          <div className="flex flex-col gap-[10px] text-black">
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Service
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Features
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Our Team
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Portfolio
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Blog
            </p>
            <p className="cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8] dark:text-slate-400">
              Contact Us
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[40px] flex w-full flex-wrap items-center justify-between gap-[20px] border-t border-gray-200 pt-[20px] dark:border-slate-700">
        <img
          src="https://i.ibb.co/ZHYQ04D/footer-logo.png"
          alt="logo"
          className="w-[130px]"
        />

        <p className="text-[0.9rem] text-gray-600 dark:text-slate-500">
          © 2025 ShopHive. All Rights Reserved.{" "}
        </p>

        <div className="flex items-center gap-[10px] text-[#424242]">
          <a className="cursor-pointer rounded-full p-1.5 text-[1.3rem] transition-all duration-300 hover:bg-[#3B9DF8] hover:text-white dark:text-slate-400">
            <CgFacebook />
          </a>
          <a className="cursor-pointer rounded-full p-1.5 text-[1.2rem] transition-all duration-300 hover:bg-[#3B9DF8] hover:text-white dark:text-slate-400">
            <BsTwitter />
          </a>
          <a className="cursor-pointer rounded-full p-1.5 text-[1.2rem] transition-all duration-300 hover:bg-[#3B9DF8] hover:text-white dark:text-slate-400">
            <BsInstagram />
          </a>
          <a className="cursor-pointer rounded-full p-1.5 text-[1.2rem] transition-all duration-300 hover:bg-[#3B9DF8] hover:text-white dark:text-slate-400">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
