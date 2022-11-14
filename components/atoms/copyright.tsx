export default function Copyright() {
  /** @TODO Allow translation */
  /** @TODO Get author name from config file */
  return (
    <p className="text-sm text-neutral-500 dark:text-neutral-400">
      &copy; {new Date().getFullYear()}
      {` `}
      Cynthia Castillo
    </p>
  );
}
