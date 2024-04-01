"use client";
import { group } from "console";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaPhoneVolume } from "react-icons/fa";
import ContactInfo from "./ContactInfo";
export default function Header() {
  const [hovered, setHovered] = useState(-1);
  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };
  const handleMouseLeave = () => {
    setHovered(-1);
  };

  const [activeItem, setActiveItem] = useState(-1);

  const [menuShow, setMenuShow] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    const scrollListener = () => {
      const currentScrollPosition = window.scrollY;
      const isScrolledDown = previousScrollPosition < currentScrollPosition;
      previousScrollPosition = currentScrollPosition;

      setShowHeader(
        isScrolledDown && currentScrollPosition > 100 ? false : true
      );
    };

    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);
  return (
    <>
      <div
        className={`py-4 z-[500] sticky top-0 left-0 bg-white border-gray-300 border-b flex flex-row items-center w-full justify-between px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 ${
          showHeader || menuShow ? "-translate-y-0" : "-translate-y-[100%]"
        } duration-300`}
      >
        <Link
          onClick={() => setActiveItem(-1)}
          title="Reklamy Figurscy"
          href="/"
          className="flex flex-col"
        >
          <Image
            src="/logo.png"
            width={1024}
            height={1024}
            alt=""
            className="h-12 lg:h-16 xl:h-16 2xl:h-20 w-auto"
          />
          <div className="flex flex-row items-center justify-between w-full italic text-zinc-600 mt-3 text-sm">
            <div>projekt</div> - <div>wykonanie</div> - <div>montaż</div>
          </div>
        </Link>
        <div className="flex flex-col items-end justify-center">
          <div
            className={`fixed flex flex-col justify-center xl:justify-normal top-0 left-0 bg-white w-full h-max xl:w-auto xl:h-auto xl:flex-row items-center xl:space-x-3 xl:-ml-3 font-semibold shadow-black xl:relative ${
              menuShow
                ? "translate-y-[47%] z-10"
                : "z-[-10] opacity-0 -translate-y-[100%]"
            } duration-300 ${showHeader ? "" : ""}`}
          >
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
              href="tel:+48564624985"
              title="Zadzwoń"
              className="relative group text-white font-bold"
            >
              <div className="py-2 px-4 rounded-3xl bg-[#020cb1] ">
                DARMOWA WYCENA
              </div>
              <div
                className={`w-full h-full rounded-3xl justify-center bg-[#020cb1] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-row items-center group-hover:opacity-100 group-hover:scale-x-100 scale-x-0 opacity-0 duration-200`}
              >
                <FaPhoneVolume className="mr-1" />
                <div className="duration-300"> 564 624 985</div>
              </div>
            </Link>
          </div>
          <ContactInfo />
        </div>
        <button
          className={`relative !z-[2000] menu ${menuShow ? "opened" : ""}`}
          onClick={() => setMenuShow(!menuShow)}
          aria-expanded={menuShow}
          aria-label="Main Menu"
        >
          <svg width="65" height="65" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
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
];
