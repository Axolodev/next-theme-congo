import Image from "next/image";

const AuthorImage = () => {
  return (
    <Image
      src="/images/author.jpg"
      alt="Author image"
      width={144}
      height={144}
      className="rounded-full"
    />
  );
};

export default AuthorImage;
