import Link from "next/link";

export default function TextInput({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return <input type="text" name={title} id={title} value={value} />;
}
