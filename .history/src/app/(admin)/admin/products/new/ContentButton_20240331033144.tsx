import Link from "next/link";

export default function ContentButton({
  value,
  label,
}: {
  value: any;
  label: string;
}) {
  return (
    <div className="">
      <button
        className={`${!value && "add_content_btn"} mt-4`}
        onClick={() => setInput({ type: "html", title: "text3Desc" })}
      >
        {!value}Opis tekstu 2 <br />
        <span className="text-sm font-normal">(opcjonalnie)</span>
      </button>
    </div>
  );
}
