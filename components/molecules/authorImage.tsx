import Image from "next/image";

const AuthorImage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="Author image"
      width={144}
      height={144}
      className="rounded-full mb-2 w-36 h-36"
    />
  );
};

export default AuthorImage;
