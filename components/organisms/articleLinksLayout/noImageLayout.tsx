import { ReadingTime, SubpathLink } from "../../molecules";
import { ArticleLinksLayout } from "./types";

const noImageLayout: ArticleLinksLayout = ({ subpaths }) => {
  /** @TODO allow different layouts */
  /** @TODO Support reading time */
  return (
    <>
      {subpaths.map((subpath) => (
        <article className="flex flex-row mt-6 max-w-prose" key={subpath.path}>
          <div>
            <SubpathLink
              path={subpath.path}
              title={subpath.mdxSource?.frontmatter?.title || subpath.path}
            />
            <ReadingTime readingTime={subpath.readingTime} />
          </div>
        </article>
      ))}
    </>
  );
};

export default noImageLayout;
