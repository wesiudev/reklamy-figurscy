import Link from "next/link";

export default function GetQuote() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center bg-blue-500 w-full h-[30vh] px-24 py-12 lg:py-0">
      <div className="text-white text-xl  xl:text-3xl font-bold text-center flex items-center justify-center w-max">
        BEZPŁATNA WYCENA REKLAMY!
      </div>
      <Link
        href="/kontakt"
        className="text-zinc-800 font-bold drop-shadow-sm shadow-black rounded-3xl py-2 px-6 bg-white text-sm lg:text-lg w-max h-max my-auto mx-4 hover:bg-gray-300 duration-300"
      >
        UMÓW KONSULATCJĘ
      </Link>
    </div>
  );
}
