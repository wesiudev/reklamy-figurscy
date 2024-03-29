import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaMapMarked,
  FaMapMarker,
  FaMarker,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full mt-12 py-12 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 grid grid-cols-1 lg:grid-cols-4 min-h-[300px] bg-[#242323]">
      {/* image & info */}
      <div className="p-3 flex flex-col text-center sm:text-left sm:items-start sm:justify-start lg:col-span-1">
        <Image
          src="/logowhite.png"
          width={150}
          height={100}
          alt=""
          className="w-full pr-3"
        />
        <div className="text-white text-sm mt-12 text-square">
          Nasza pasja i mocą napędową do ciągłego rozwoju. Z ponad 30-letnim
          doświadczeniem w projektowaniu, wykonaniu i montażu reklam, rozwijamy
          się nieustannie, kierując się wiarą w to, co robimy. Odkryj, co możemy
          zrobić dla Ciebie i Twojego biznesu!
        </div>
      </div>
      {/* contact */}
      <div className="p-3 flex flex-col text-center sm:text-left sm:items-start sm:justify-center lg:justify-start lg:col-span-1">
        <h2 className="border-b-2 border-[#B00285] pb-3 font-bold w-full text-center text-white">
          Kontakt
        </h2>
        <div className="flex flex-col p-6 space-y-3">
          <div className="icon-link">
            <FaEnvelope className="icon" />{" "}
            <span className="text-sm">reklamy@gmail.com</span>
          </div>
          <div className="icon-link">
            <FaPhone className="icon" />{" "}
            <span className="text-sm">564 624 985</span>
          </div>
          <div className="icon-link">
            <FaMapMarker className="icon" />
            <span className="text-sm">
              ul. Mickiewicza x/x 86-300 Grudziądz
            </span>
          </div>
        </div>
      </div>
      {/* products */}
      <div className="p-3 flex flex-col text-center sm:text-left sm:items-start sm:justify-start sm:col-span-2">
        <h2 className="border-b-2 border-[#009CE7] pb-3 font-bold w-full text-center text-white">
          Produkty
        </h2>
        <div className="grid gap-y-3 grid-cols-2 sm:grid-cols-3 w-full p-6 text-white text-sm">
          <div>Produkt 1</div>
          <div>Produkt 2</div>
          <div>Produkt 3</div>
          <div>Produkt 4</div>
          <div>Produkt 5</div>
          <div>Produkt 6</div>
          <div>Produkt 7</div>
          <div>Produkt 8</div>
          <div>Produkt 9</div>
          <div>Produkt 10</div>
          <div>Produkt 11</div>
          <div>Produkt 12</div>
          <div>Produkt 13</div>
          <div>Produkt 14</div>
          <div>Produkt 15</div>
          <div>Produkt 16</div>
          <div>Produkt 17</div>
          <div>Produkt 18</div>
        </div>
      </div>
    </div>
  );
}
