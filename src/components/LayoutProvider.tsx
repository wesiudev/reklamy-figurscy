"use client";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import StoreProvider from "@/redux/Provider";
import { usePathname } from "next/navigation";

export default function LayoutProvider({ children }: { children: any }) {
  const pathname = usePathname();
  return (
    <>
      {!pathname.includes("admin") && <Header />}
      <div className={``}>
        <StoreProvider>{children}</StoreProvider>
      </div>
      {!pathname.includes("admin") && <Footer />}
    </>
  );
}
