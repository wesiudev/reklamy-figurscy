import Link from "next/link";

export default function Input({
  title,
  value,
  handleChange,
}: {
  title: any;
  value: any;
  handleChange: any;
}) {
  return (
    <input
      type="text"
      name={title}
      id={title}
      value={value}
      onChange={(e: any) => handleChange(e)}
    />
  );
}
