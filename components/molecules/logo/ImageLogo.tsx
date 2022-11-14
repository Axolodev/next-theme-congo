import Image from "next/image";
import Link from "next/link";

export interface ImageLogoProps {
  src: string;
  url: string;
}

export default function ImageLogo({ src, url }: ImageLogoProps) {
  /** @TODO Add alt text */
  return (
    <Link href={url} className="mr-2">
      <Image
        src={src}
        width="200"
        height="100"
        className="max-h-[10rem] max-w-[10rem] object-scale-down object-left"
        alt="{{ .Site.Title }}"
      />
    </Link>
  );
}
