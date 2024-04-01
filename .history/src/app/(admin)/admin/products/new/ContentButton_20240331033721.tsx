import Link from "next/link";

export default function ContentButton({
  value,
  label,
  setInput,
  optional,
  title,
}: {
  value: any;
  label: string;
  setInput: Function;
  optional: boolean;
  title: string;
}) {
  return (
    <div className="">
      <button
        className={`${!value && "add_content_btn"} mt-4`}
        onClick={() => setInput({ type: "html", title: "text3Desc" })}
      >
        {!value && !optional && label}
        {value && value}
        {!value && optional && (
          <>
            <br />
            <span className="text-sm font-normal">(opcjonalnie)</span>
          </>
        )}
      </button>
    </div>
  );
}
