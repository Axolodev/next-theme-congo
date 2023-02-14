export interface InputProps {
  id: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function Input({
  id,
  placeholder,
  type = "text",
  required = false,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={id}
      className="px-2 py-2 flex flex-col w-full max-w-3xl min-h-0 mx-auto border rounded-md top-20 border-neutral-200 bg-neutral dark:border-neutral-700 dark:bg-neutral-800"
      placeholder={placeholder}
      required={required}
    />
  );
}

export default Input;
