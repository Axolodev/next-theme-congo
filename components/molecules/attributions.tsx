export default function Attributions() {
  /** @TODO Allow translation */
  /** @TODO Get author name from config file */
  return (
    <p className="text-xs text-neutral-500 dark:text-neutral-400">
      Desarrollado con{" "}
      <a
        className="hover:underline hover:decoration-primary-400 hover:text-primary-500"
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Next.js
      </a>
      &amp;
      <a
        className="hover:underline hover:decoration-primary-400 hover:text-primary-500"
        href="https://git.io/hugo-congo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Congo
      </a>
    </p>
  );
}
