import { AuthorImage, AuthorLinks } from "../molecules";
import type { SocialIcon } from "../molecules";
const authorLinks: SocialIcon[] = [
  {
    name: "twitter",
    url: "https://twitter.com/lamatemaga",
  },
  {
    name: "twitch",
    url: "https://twitch.tv/lamatemaga",
  },
  {
    name: "youtube",
    url: "https://youtube.com/lamatemaga",
  },
  {
    name: "github",
    url: "https://github.com/lamatemaga",
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/lamatemaga",
  },
  {
    name: "email",
    url: "https://linkedin.com/in/lamatemaga",
  },
];

export default function Profile({ children }: React.PropsWithChildren) {
  return (
    <>
      <article className="h-full flex flex-col items-center justify-center text-center">
        {/** @TODO Allow text config*/}
        <header className="flex flex-col items-center mb-3">
          <AuthorImage />
          <h1 className="text-4xl font-extrabold">Cynthia Castillo</h1>
          <h2 className="text-xl text-neutral-500 dark:text-neutral-400">
            Ciencia de datos 📈 & Bioinformática 🧬
          </h2>
          <div className="mt-1 text-2xl">
            <AuthorLinks socials={authorLinks} />
          </div>
        </header>
        <section className="prose dark:prose-invert">{children}</section>
      </article>
    </>
  );
}
