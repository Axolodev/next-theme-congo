export interface FooterLinkProps {
  url: string;
  name: string;
  title: string;
}

export default function FooterLink({ name, url, title }: FooterLinkProps) {
  return (
    <li className="mb-1 sm:text-right sm:mb-0 sm:mr-7 sm:last:mr-0">
      <a
        className="decoration-primary-500 hover:underline hover:decoration-2 hover:underline-offset-2"
        href={url}
        title={title}
      >
        {name}
      </a>
    </li>
  );
}
