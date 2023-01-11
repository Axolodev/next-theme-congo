import NextImage from "next/image";
import getIsAbsolutePath from "../../utils/getIsAbsolutePath";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

function Image({ src, alt, width, height, ...rest }: Props) {
  const isAbsolutePath = getIsAbsolutePath(src);
  let srcPath = src;
  if (isAbsolutePath) {
    srcPath = `/api/fetchImage?src=${src}`;
  }

  if (width && height) {
    return (
      <NextImage
        src={srcPath}
        alt={alt}
        object-fit="contain"
        width={width}
        height={height}
      />
    );
  }

  return <img className="w-full h-auto" src={srcPath} alt={alt} />;
}

export default Image;
