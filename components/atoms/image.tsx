import NextImage from "next/image";
import getIsAbsolutePath from "../../utils/getIsAbsolutePath";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

function Image({ src, alt, width = 300, height = 300 }: Props) {
  const isAbsolutePath = getIsAbsolutePath(src);
  let srcPath = src;
  if (isAbsolutePath) {
    srcPath = `/api/fetchImage?src=${src}`;
  }
  return <NextImage src={srcPath} alt={alt} width={width} height={height} />;
}

export default Image;
