import Link from "next/link";

export default function Input({
  title,
  value,
  handleChange,
  type,
}: {
  title: any;
  value: any;
  handleChange: any;
  type: string;
}) {
  return (
    <>
      {type === "text" && (
        <input
          type="text"
          name={title}
          id={title}
          value={value}
          onChange={(e: any) => handleChange(e)}
        />
      )}
    </>
  );
}
