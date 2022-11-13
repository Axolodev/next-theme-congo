export interface AuthorLinkProps {
  url: string;
  name: string;
  title?: string;
}

export default function AuthorLink({ url, name, title }: AuthorLinkProps) {
  /** @TODO transform icon name into logo */
  return (
    <div className="flex flex-wrap text-neutral-400 dark:text-neutral-500">
      <a
        className="px-1 transition-transform hover:scale-125 hover:text-primary-700 dark:hover:text-primary-400"
        href={url}
        target="_blank"
        aria-label={name || title}
        rel="me noopener noreferrer"
      >
        {name}
      </a>
    </div>
  );
}
