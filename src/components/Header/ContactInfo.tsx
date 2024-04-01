"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function ContactInfo() {
  const [currentMailVisible, setCurrentMailVisible] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMailVisible((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="sticky top-0 left-0 z-20 bg-white py-1.5">
      <div className="w-full flex items-center justify-evenly relative">
        <div className="flex flex-row items-center xl:-ml-3">
          <Link
            href="tel:+48606136200"
            className="hover:bg-green-500 duration-200 rounded-l-3xl px-3 text-zinc-800 hover:text-white"
          >
            606 136 200
          </Link>
          <div className="flex items-center justify-center rounded-full bg-green-500 w-8 h-8 -mx-2">
            <FaPhoneAlt className="text-white" />
          </div>
          <Link
            href="tel:+48606136400"
            className="hover:bg-green-500 duration-200 rounded-r-3xl px-3 text-zinc-800 hover:text-white"
          >
            606 136 400
          </Link>
        </div>
        <Link
          href={`${
            currentMailVisible % 2 === 0
              ? "mailto:piotr@reklamy-figurscy.com.pl"
              : "mailto:wioletta@reklamy-figurscy.com.pl"
          }`}
          className="relative group ml-[100px] xl:ml-0"
        >
          <div className="absolute -left-[45%] top-1/2 -translate-y-1/2">
            <Image
              src="/assets/gmail.png"
              width={50}
              height={50}
              alt=""
              className="w-auto h-4"
            />
          </div>
          <div
            className={`${
              currentMailVisible % 2 === 0
                ? "opacity-100 -translate-y-1/2 top-1/2 duration-500"
                : "opacity-0 top-0 animation-move-to-bottom duration-500"
            } absolute left-0 -translate-x-[100%] group-hover:underline`}
          >
            piotr
          </div>
          <div
            className={`${
              currentMailVisible % 2 !== 0
                ? "opacity-100 -translate-y-1/2 top-1/2 duration-500"
                : "opacity-0 top-0 animation-move-to-bottom duration-500"
            } absolute left-0 -translate-x-[100%] group-hover:underline`}
          >
            wioletta
          </div>
          @reklamy-figurscy.com.pl
        </Link>
      </div>
    </div>
  );
}
