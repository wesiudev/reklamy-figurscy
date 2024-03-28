import Image from "next/image";
import Link from "next/link";
import HeroItem from "./HeroItem";

export default function Hero() {
  return (
    <div className="w-full h-auto relative">
      <Image
        src="/heroModal/heroBackground.png"
        width={1920}
        height={1024}
        alt=""
        className="w-full h-auto"
      />
      {/* bilboardy */}
      <HeroItem
        top="8.5%"
        left="3.03%"
        height="30.79%"
        img_src="/heroModal/bilboardy.png"
        destination="/bilboardy"
      />
      {/* kasetony */}
      <HeroItem
        top="42.35%"
        left="29.08%"
        height="12.79%"
        img_src="/heroModal/kasetony.png"
        destination="/kasetony"
      />
      {/* litery blokowe */}
      <HeroItem
        top="4.15%"
        left="26.65%"
        height="24.25%"
        img_src="/heroModal/litery-blokowe.png"
        destination="/litery-blokowe"
      />
      {/* szyldy */}
      <HeroItem
        top="24.5%"
        left="41.25%"
        height="11.4%"
        img_src="/heroModal/szyldy.png"
        destination="/szyldy"
      />
      {/* magazyn */}
      <HeroItem
        top="57.1%"
        left="35.35%"
        height="17.78%"
        img_src="/heroModal/drzwi-magazyn.png"
        destination="/naklejki-na-drzwi"
      />
      {/* windery */}
      <HeroItem
        top="54.1%"
        left="41.19%"
        height="31.45%"
        img_src="/heroModal/windery.png"
        destination="/windery"
      />
      {/* poligrafia */}
      <HeroItem
        top="48.28%"
        left="46.55%"
        height="5.6%"
        img_src="/heroModal/poligrafia.png"
        destination="/poligrafia"
      />
      {/* projekty oklejanie witryn dekoracje */}
      <HeroItem
        top="53.8%"
        left="55.84%"
        height="22.4%"
        img_src="/heroModal/projekty-oklejanie.png"
        destination="/projekty-oklejanie"
      />
      {/* banery */}
      <HeroItem
        top="32.75%"
        left="64.12%"
        height="23.75%"
        img_src="/heroModal/banery.png"
        destination="/banery"
      />
      {/* reklamy na autach */}
      <HeroItem
        top="70.39%"
        left="63.28%"
        height="19.55%"
        img_src="/heroModal/reklamy-na-autach.png"
        destination="/reklamy-na-autach"
      />
      {/* flagi góra */}
      <HeroItem
        top="22.85%"
        left="84.63%"
        height="34.2%"
        img_src="/heroModal/flagi-gora.png"
        destination="/maszty-i-flagi"
      />
      {/* flagi góra */}
      <HeroItem
        top="1%"
        left="92.12%"
        height="46%"
        img_src="/heroModal/flagi-dol.png"
        destination="/maszty-i-flagi"
      />
      {/* maszty */}
      <HeroItem
        top="13.3%"
        left="88.12%"
        height="37.65%"
        img_src="/heroModal/maszty.png"
        destination="/maszty-i-flagi"
      />
    </div>
  );
}
