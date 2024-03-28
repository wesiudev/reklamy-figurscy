import Image from "next/image";
import Link from "next/link";

export default function HeroItem({
  left,
  top,
  height,
  destination,
  img_src,
}: {
  left: string;
  top: string;
  height: string;
  destination: string;
  img_src: string;
}) {
  return (
    <Link href={destination}>
      <Image
        src={img_src}
        width={400}
        height={400}
        alt=""
        style={{ left: left, top: top, height: height }}
        className="absolute z-[50] w-auto 
        opacity-0 hover:opacity-100 duration-500
        "
      />
    </Link>
  );
}
// opacity-0 hover:opacity-100 duration-500
