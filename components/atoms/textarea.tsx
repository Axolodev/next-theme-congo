import type { InputProps } from "./input";

type TextAreaProps = Exclude<InputProps, "type">;

function TextArea({ id, placeholder }: TextAreaProps) {
  return (
    <textarea
      id={id}
      name={id}
      rows={5}
      className="px-2 py-2 resize-none flex flex-col w-full max-w-3xl min-h-0 mx-auto border rounded-md top-20 border-neutral-200 bg-neutral dark:border-neutral-700 dark:bg-neutral-800"
      placeholder={placeholder}
    />
  );
}

export default TextArea;
