import Link from "next/link";

export default function ContentButton() {
  return (
    <div className="">
      <button
        className={`${!productInfo.text2Desc && "add_content_btn"} mt-4`}
        onClick={() => setCurrentInput({ type: "html", title: "text3Desc" })}
      >
        {!productInfo.text2Desc}Opis tekstu 2 <br />
        <span className="text-sm font-normal">(opcjonalnie)</span>
      </button>
    </div>
  );
}
