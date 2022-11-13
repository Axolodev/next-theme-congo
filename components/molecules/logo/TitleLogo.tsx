import Link from "next/link";

export default function TitleLogo({ url }: TitleLogoProps) {
  // TODO: Allow custom text through i18n
  const title = "La Matemaga";
  return (
    <Link
      className="decoration-primary-500 hover:underline hover:decoration-2 hover:underline-offset-2"
      rel="me"
      href={url}
    >
      {title}
    </Link>
  );
}

export interface TitleLogoProps {
  url: string;
}
