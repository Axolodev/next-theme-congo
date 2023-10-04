import type { GetStaticPaths, GetStaticProps } from "next";
import MarkdownRenderer from "../components/organisms/markdownRenderer";
import { getConfig } from "../lib";
import type { PageProps } from "../lib/types";
import {
  getAllPaths,
  getContentForPath,
  getContentForSubpaths,
  SubpathsWithContent,
} from "../utils";
import getArticleLinkLayout from "../utils/getArticleLinkLayout";
import getSerializedMarkdown from "../utils/getSerializedMarkdown";
import { getOSSeparator } from "../utils/getAllPaths";

export default function RestPage({
  content,
  isIndex,
  subpaths = [],
}: PageProps) {
  const { frontmatter = {} } = content;
  const { title } = frontmatter;

  const ArticleLinkLayout = getArticleLinkLayout(frontmatter.subpathsLayout);

  /** @TODO Add breadcrumbs */
  return (
    <>
      <h1 className="mt-0 text-4xl font-extrabold text-neutral-900 dark:text-neutral">
        {title}
      </h1>
      <section className="flex flex-col max-w-full mt-0 prose dark:prose-invert lg:flex-row">
        <div className="min-w-0 min-h-0 max-w-prose grow">
          <MarkdownRenderer content={content} />
        </div>
      </section>
      {isIndex && subpaths?.length > 0 && (
        <ArticleLinkLayout subpaths={subpaths} />
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params;
  const config = getConfig();
  const filepath = `${config.content.path}/${slug.join("/")}`;

  const { content = "", isIndex, subpaths } = await getContentForPath(filepath);

  const mdxSource = await getSerializedMarkdown(content);

  let subpathsWithData: SubpathsWithContent[] = [];

  if (isIndex) {
    subpathsWithData = await getContentForSubpaths(subpaths);
  }

  return {
    props: {
      content: mdxSource,
      isIndex,
      subpaths: subpathsWithData,
      settings: config,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();

  const filePaths = await getAllPaths(config.content.path);
  const separator = getOSSeparator();

  /** @TODO allow mutlilanguage content */

  const filteredPaths = filePaths
    // Read only md and mdx files
    .filter((path) => path.endsWith(".md") || path.endsWith(".mdx"))
    // Remove the extension
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Remove "index" from the file path
    .map((path) => path.replace(/_?index$/, ""))
    // Remove the content path
    .map((path) => path.replace(`${config.content.path}${separator}`, ""))
    // Remove base content folder
    .filter((path) => path);

  // Convert to the type Next.js expects
  const paths = filteredPaths.map((path) => ({
    params: {
      slug: path.split(separator).filter((p) => p),
    },
  }));

  console.log(paths.map((p) => p.params.slug));

  return {
    fallback: false,
    paths,
  };
};
