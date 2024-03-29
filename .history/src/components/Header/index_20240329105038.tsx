"use client";
import { group } from "console";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaPhoneVolume } from "react-icons/fa";
export default function Header() {
  const [hovered, setHovered] = useState(-1);
  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };
  const [isMenuShow, setMenuShow] = useState(false);
  const handleMouseLeave = () => {
    setHovered(-1);
  };

  const [currentMailVisible, setCurrentMailVisible] = useState(0);
  const [activeItem, setActiveItem] = useState(-1);

  const [showHeader, setShowHeader] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMailVisible((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
+  useEffect(() => {
+    let previousScrollPosition = window.scrollY;
+
+    const scrollListener = () => {
+      const currentScrollPosition = window.scrollY;
+      const isScrolledDown = previousScrollPosition < currentScrollPosition;
+      previousScrollPosition = currentScrollPosition;
+
+      setShowHeader(isScrolledDown && currentScrollPosition > 100 ? false : true);
+    };
+
+    window.addEventListener("scroll", scrollListener);
+
+    return () => window.removeEventListener("scroll", scrollListener);
+  }, []);
-  useEffect(() => {
-    let previousScrollPosition = window.scrollY;
-
-    const scrollListener = () => {
-      const currentScrollPosition = window.scrollY;
-      const isScrolledDown = previousScrollPosition < currentScrollPosition;
-      previousScrollPosition = currentScrollPosition;
-
-      setShowHeader(currentScrollPosition > 100 ? true : false);
-    };
-
-    window.addEventListener("scroll", scrollListener);
-
-    return () => window.removeEventListener("scroll", scrollListener);
-  }, []);
<<<<<<<  10f0bcf1-f636-4448-9d29-20b98084be8c  >>>>>>>
  return (
    <>
      <div
        className={`py-4 z-[500] sticky top-0 left-0 bg-white border-gray-300 border-b flex flex-row items-center w-full justify-between px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 ${
          showHeader ? "-translate-y-0" : "-translate-y-[100%]"
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
          <div className="flex flex-row items-center justify-between w-full italic text-zinc-700 mt-3 text-sm">
            <div>projekt</div> - <div>wykonanie</div> - <div>montaż</div>
          </div>
        </Link>
        <div className="flex flex-col items-end justify-center ">
          <div className="flex flex-row items-center space-x-3 -ml-3 font-semibold shadow-black relative">
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
              className="relative group text-white font-bold"
            >
              <div className="py-2 px-4 rounded-3xl bg-[#020cb1] ">
                DARMOWA WYCENA
              </div>
              <Link
                href={"tel:+48564624985"}
                className={`w-full h-full rounded-3xl justify-center bg-[#020cb1] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-row items-center group-hover:opacity-100 group-hover:scale-x-100 scale-x-0 opacity-0 duration-200`}
              >
                <FaPhoneVolume className="mr-1" />
                <div className="duration-300"> 564 624 985</div>
              </Link>
            </Link>
          </div>
          <div className="w-full flex items-center justify-between mt-3 relative">
            <div className="flex flex-row items-center -ml-3">
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
              className="relative group"
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
