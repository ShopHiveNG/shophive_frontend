import { MdOutlineMail } from "react-icons/md";

export default function Newsletter() {
  return (
    <section
      aria-label="Newsletter Form"
      className="relative w-full p-5 dark:bg-gray-700/50"
    >
      {/* email icon */}
      <div className="from-primary to-primary-light absolute top-[-30px] left-[50%] w-max translate-x-[-50%] transform rounded-full border-[3px] border-white bg-gradient-to-t p-1.5">
        <MdOutlineMail className="rounded-full border border-white p-1.5 text-5xl text-white" />
      </div>

      {/* content */}
      <div className="mx-auto w-full md:w-[70%] lg:w-[50%]">
        <h1 className="from-primary-light to-primary mt-8 bg-gradient-to-r bg-clip-text py-1 text-center text-5xl leading-[50px] font-[800] text-pretty text-transparent capitalize">
          Sign up to our newsletter
        </h1>
        <p className="mt-2 text-center text-2xl font-[300] text-balance text-gray-600 dark:text-gray-300">
          Receive our latest updates about our products & promotions
        </p>

        <form className="xs:flex-row xs:items-center mt-12 flex flex-col items-end justify-between gap-[15px]">
          <input
            placeholder="Email Address"
            className="caret-secondary w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:ring-0 dark:text-white dark:placeholder:text-white"
          />

          <button className="xs:w-max bg-primary hover:bg-primary-light w-full rounded-md px-8 py-3 text-white transition-all hover:scale-[1.05]">
            Subscribe
          </button>
        </form>

        <p className="mt-8 text-center text-[0.9rem] text-balance text-gray-500 dark:text-gray-300">
          Your email is safe with us, we don"t spam
        </p>
      </div>
    </section>
  );
}
