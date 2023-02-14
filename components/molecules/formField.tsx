import { Input, TextArea } from "../atoms";
import type { InputProps } from "../atoms/input";

interface Props extends InputProps {
  label: string;
}

function FormField({ label, id, placeholder, type, required }: Props) {
  return (
    <div className="pb-3">
      <label htmlFor={id} className="pl-1 font-semibold">
        {label}
      </label>
      <div className="py-1"></div>
      {type === "textarea" ? (
        <TextArea id={id} required={required} placeholder={placeholder} />
      ) : (
        <Input
          id={id}
          required={required}
          placeholder={placeholder}
          type={type}
        />
      )}
    </div>
  );
}

export default FormField;
