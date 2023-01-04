import { AuthorImage, AuthorLinks, useSettings } from "../molecules";

export default function Profile({ children }: React.PropsWithChildren) {
  const settings = useSettings();
  const authorLinks = settings?.content?.author?.links ?? [];
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
