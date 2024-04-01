import Link from "next/link";

export default function ContentButton({
  value,
  label,
  setInput,
}: {
  value: any;
  label: string;
  setInput: Function;
}) {
  return (
    <div className="">
      <button
        className={`${!value && "add_content_btn"} mt-4`}
        onClick={() => setInput({ type: "html", title: "text3Desc" })}
      >
        {!value && label}
        {value && value}
      </button>
    </div>
  );
}
