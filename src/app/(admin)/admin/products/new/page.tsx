"use client";
import Image from "next/image";
import Input from "@/components/AdminComponents/Input";
import Link from "next/link";
import { useState } from "react";
import {
  FaImage,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaTh,
} from "react-icons/fa";
import ContentButton from "../../../../../components/AdminComponents/ContentButton";

export default function Page() {
  const [selectedImages, setSelectedImages] = useState<any[]>([]);
  const [productInfo, setProductInfo] = useState<any>({
    title: "",
    shortDesc: "",
    text1Title: "",
    text1Desc: "",
    text2Title: "",
    text2Desc: "",
    text3Title: "",
    text3Desc: "",
    text4Title: "",
    text4Desc: "",
    imagesHeadingSmallText: "",
    imagesHeadingMainText: "",
  });
  const [currentInput, setCurrentInput] = useState({ type: "", title: "" });
  const handleImageChange = (e: any) => {
    const files = e.target.files;
    // Filter out non-image files if needed
    const imageFiles = Array.from(files).filter((file: any) =>
      file.type.startsWith("image/")
    );
    setSelectedImages([...selectedImages, ...imageFiles]);
  };
  function handleTextInput(e: any) {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  }
  return (
    <div className="p-24 w-full">
      <div
        className={`fixed flex items-center justify-center ${
          currentInput.type === "text" ? "z-10 block" : "-z-10 hidden"
        }`}
      >
        <Input
          value={productInfo[currentInput.title]}
          title={currentInput.title}
          handleChange={handleTextInput}
          type={currentInput.type}
        />
      </div>
      <div className="w-full bg-white min-h-screen">
        <Image
          src="/header.png"
          width={1980}
          height={1024}
          alt=""
          className="w-full h-auto border-b border-gray-400"
        />
        <div className="p-12">
          <div className="mx-auto text-center w-max mt-12">
            <ContentButton
              label="Nazwa produktu"
              value={productInfo.title}
              type="text"
              title="title"
              setInput={setCurrentInput}
              optional={false}
            />
          </div>
          <div className="grid grid-cols-2 mx-auto mt-12">
            <div className="flex flex-col items-center">
              <ContentButton
                label="Krótki opis"
                value={productInfo.shortDesc}
                type="html"
                title="shortDesc"
                setInput={setCurrentInput}
                optional={false}
              />
              <ContentButton
                label="Tytuł tekstu 1"
                value={productInfo.text1Title}
                type="text"
                title="text1Title"
                setInput={setCurrentInput}
                optional={true}
              />
              <ContentButton
                label="Opis tekstu 1"
                value={productInfo.text1Desc}
                type="html"
                title="text1Desc"
                setInput={setCurrentInput}
                optional={true}
              />
              <ContentButton
                label="Tytuł tekstu 2"
                value={productInfo.text2Title}
                type="text"
                title="text2Title"
                setInput={setCurrentInput}
                optional={true}
              />
              <ContentButton
                label="Opis tekstu 2"
                value={productInfo.text2Desc}
                type="html"
                title="text2Desc"
                setInput={setCurrentInput}
                optional={true}
              />
            </div>
            {/* image input */}
            <div className="flex flex-col items-center">
              <div className="w-full">
                <button
                  className="add_image_btn flex items-center justify-center text-zinc-800"
                  // CHOOSE IMAGE FROM LOCAL IMAGES (BLOB, NOT UPLOADED YET)
                >
                  <FaImage className="text-7xl" />
                </button>
              </div>{" "}
              <ContentButton
                label="Tytuł tekstu 3"
                value={productInfo.text2Desc}
                type="text"
                title="text3Title"
                setInput={setCurrentInput}
                optional={true}
              />
              <ContentButton
                label="Opis tekstu 3"
                value={productInfo.text3Desc}
                type="html"
                title="text3Desc"
                setInput={setCurrentInput}
                optional={true}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center bg-blue-500 w-full h-[30vh] mt-12 px-24 py-12 lg:py-0">
          <div className="text-white text-xl lg:text-lg xl:text-2xl font-bold text-center flex items-center justify-center w-max">
            BEZPŁATNA WYCENA REKLAMY!
          </div>
          <Link
            href="/kontakt"
            className="text-zinc-800 font-bold drop-shadow-sm shadow-black rounded-3xl py-2 px-6 bg-white text-sm lg:text-lg w-max h-max my-auto mx-4 hover:bg-gray-300 duration-300"
          >
            UMÓW KONSULATCJĘ
          </Link>
        </div>
        <div className="p-12 grid grid-cols-2">
          <div className="w-full">
            <button className="add_image_btn flex flex-col items-center justify-center text-zinc-800">
              <FaImage className="text-7xl" /> <br />{" "}
              <span className="text-sm font-normal">(opcjonalnie)</span>
            </button>
          </div>{" "}
          <div className="flex flex-col pl-4">
            <ContentButton
              label="Tytuł tekstu 4"
              value={productInfo.text4Title}
              type="text"
              title="text4Title"
              setInput={setCurrentInput}
              optional={true}
            />
            <ContentButton
              label="Opis tekstu 4"
              value={productInfo.text4Desc}
              type="html"
              title="text4Desc"
              setInput={setCurrentInput}
              optional={true}
            />
          </div>
        </div>

        <div className="p-12 flex flex-col items-center justify-center">
          <ContentButton
            label="Mały tekst nad tytułem zdjęć np. 30 lat doświadczenia / pracujemy z pasją / 1000 zadowolonych
              klientów"
            value={productInfo.imagesHeadingSmallText}
            type="text"
            title="imagesHeadingSmallText"
            setInput={setCurrentInput}
            optional={false}
          />
          <ContentButton
            label="Tytuł do zdjęć realizacji np. Nasze ostatnie realizacje - Flagi i
              Maszty"
            value={productInfo.imagesHeadingMainText}
            type="text"
            title="imagesHeadingMainText"
            setInput={setCurrentInput}
            optional={false}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
            {selectedImages?.map((image: any, i: any) => (
              <div
                className="flex items-center justify-center aspect-square w-full h-auto overflow-hidden"
                key={i}
              >
                <Image
                  width={500}
                  height={500}
                  src={URL.createObjectURL(image)}
                  alt=""
                />
              </div>
            ))}
            <label
              htmlFor="uploader"
              className="aspect-square h-full w-full py-3 px-12 border-2 border-dashed border-zinc-800 text-zinc-800 text-center justify-center items-center flex font-bold hover:bg-gray-300 duration-300"
            >
              Dodaj zdjecia
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              id="uploader"
              className="text-white hidden"
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center bg-blue-500 w-full h-[30vh] mt-12 px-24 py-12 lg:py-0">
          <div className="text-white text-xl lg:text-lg xl:text-2xl font-bold text-center flex items-center justify-center w-max">
            BEZPŁATNA WYCENA REKLAMY!
          </div>
          <Link
            href="/kontakt"
            className="text-zinc-800 font-bold drop-shadow-sm shadow-black rounded-3xl py-2 px-6 bg-white text-sm lg:text-lg w-max h-max my-auto mx-4 hover:bg-gray-300 duration-300"
          >
            UMÓW KONSULATCJĘ
          </Link>
        </div>
        <div className="!text-zinc-800 py-12 flex flex-row items-center justify-evenly">
          <div
            className="flex flex-row items-center"
            title="Link do poprzedniego produktu"
          >
            <FaLongArrowAltLeft className="mr-2" /> Poprzedni produkt
          </div>
          <div className="" title="Link do wszystkich produktów">
            <FaTh className="text-3xl" />
          </div>
          <div
            className="flex flex-row items-center"
            title="Link do następnego produktu"
          >
            Następny produkt
            <FaLongArrowAltRight className="ml-2" />
          </div>
        </div>
        <Image
          src="/footer.png"
          width={1920}
          height={1024}
          alt=""
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
