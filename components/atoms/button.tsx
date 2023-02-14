interface ButtonProps {
  label: string;
  className?: string;
}

function Button({ label, className }: ButtonProps) {
  return (
    <button
      className={`inline-block font-semibold !rounded-md bg-primary-600 px-4 py-1 !text-neutral !no-underline hover:!bg-primary-500 dark:bg-primary-800 dark:hover:!bg-primary-700 ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
