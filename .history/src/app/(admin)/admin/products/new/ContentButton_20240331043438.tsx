export default function ContentButton({
  value,
  label,
  setInput,
  optional,
  title,
  type,
}: {
  value: any;
  label: string;
  setInput: Function;
  optional: boolean;
  title: string;
  type: string;
}) {
  return (
    <button
      className={`${!value && "add_content_btn"} mt-4`}
      onClick={() => setInput({ type: type, title: title })}
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
  );
}
