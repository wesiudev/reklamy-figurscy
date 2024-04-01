import Link from "next/link";

export default function TextInput({ title }: { title: string }) {
  return <input type="text" name={title} id={title} />;
}
