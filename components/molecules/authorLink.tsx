import { Icon } from "../atoms";
import type { IconProps } from "../atoms";

export interface SocialIcon extends IconProps {
  url: string;
}

export interface AuthorLinksProps {
  socials: SocialIcon[];
}

export default function AuthorLinks({ socials }: AuthorLinksProps) {
  return (
    <div className="flex flex-wrap text-neutral-400 dark:text-neutral-500">
      {socials.map(({ name, url }) => (
        <a
          className="px-1 transition-transform hover:scale-125 hover:text-primary-700 dark:hover:text-primary-400"
          href={url}
          target="_blank"
          aria-label={name}
          rel="me noopener noreferrer"
          key={name}
        >
          <Icon name={name} />
        </a>
      ))}
    </div>
  );
}
