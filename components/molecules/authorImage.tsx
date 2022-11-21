import Image from "next/image";
import placeholder from "../../public/author.jpg";

const AuthorImage = () => {
  return (
    <Image
      src={placeholder}
      alt="Author image"
      width={144}
      height={144}
      className="rounded-full mb-2 w-36 h-36"
      placeholder="blur"
    />
  );
};

export default AuthorImage;
