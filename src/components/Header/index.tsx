"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPhoneVolume } from "react-icons/fa";
export default function Header() {
  const [hovered, setHovered] = useState(-1);
  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };
  const [isMenuShow, setMenuShow] = useState(false);
  const handleMouseLeave = () => {
    setHovered(-1);
  };
  const [activeItem, setActiveItem] = useState(-1);
  return (
    <>
      <div className="py-4 z-[500] sticky top-0 left-0 bg-white border-gray-300 border-b flex flex-row items-center w-full justify-between px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        <Link
          onClick={() => setActiveItem(-1)}
          title="Reklamy Figurscy"
          href="/"
        >
          <Image
            src="/logo.png"
            width={1024}
            height={1024}
            alt=""
            className="h-12 lg:h-16 xl:h-16 2xl:h-20 w-auto"
          />
        </Link>
        <div className="flex flex-row items-center space-x-3 font-semibold shadow-black relative">
          <div className="absolute left-0 top-0 h-2"></div>
          {destinations.map((item: any, i: any) => (
            <div key={i} className="w-max">
              <Link
                onClick={() => setActiveItem(i)}
                href={item.href}
                title={item.title}
                className={`${
                  activeItem === i
                    ? "border-t-[3px] border-[#020bb0] text-[#020bb0]"
                    : "hover-underline-animation hover:text-[#020bb0]"
                } py-2 group text-zinc-800 drop-shadow-sm duration-500`}
              >
                {item.title}
              </Link>
            </div>
          ))}

          <Link
            href="tel:564624985"
            title="Zadzwoń"
            className="flex flex-row items-center"
          >
            <FaPhoneVolume className="mr-1" />
            <div className="hover:text-[#020bb0] duration-300">
              {" "}
              564 624 985
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

const destinations = [
  {
    title: "Kasetony",
    href: "/kasetony",
  },
  {
    title: "Litery 3D",
    href: "/litery-3d",
  },
  {
    title: "Pylony",
    href: "/pylony",
  },
  {
    title: "Ostatnie Realizacje",
    href: "/realizacje",
  },
  {
    title: "Wszystkie produkty",
    href: "/produkty",
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
];