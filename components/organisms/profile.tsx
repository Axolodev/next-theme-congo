import { AuthorImage, AuthorLinks, useSettings } from "../molecules";

export default function Profile({ children }: React.PropsWithChildren) {
  const settings = useSettings();
  const author = settings?.content?.author;
  const authorLinks = author?.links ?? [];
  const { name = "", headline = "", image = "" } = author ?? {};

  return (
    <>
      <article className="h-full flex flex-col items-center justify-center text-center">
        {/** @TODO Allow text config*/}
        <header className="flex flex-col items-center mb-3">
          {image && <AuthorImage src={image} />}
          {name && <h1 className="text-4xl font-extrabold">{name}</h1>}
          {headline && (
            <h2 className="text-xl text-neutral-500 dark:text-neutral-400">
              {headline}
            </h2>
          )}
          {authorLinks.length > 0 && (
            <div className="mt-1 text-2xl">
              <AuthorLinks socials={authorLinks} />
            </div>
          )}
        </header>
        <section className="prose dark:prose-invert">{children}</section>
      </article>
    </>
  );
}
