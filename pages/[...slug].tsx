import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

import { getConfig } from "../lib";
import { getAllPaths } from "../utils";
import getContentForPath from "../utils/getContentForPath";
import { Icon } from "../components";

interface Props {
  content: MDXRemoteSerializeResult;
}

const components = {
  Alert: ({ children }: any) => <div className="alert">{children}</div>,
  Icon: ({ name }: any) => <Icon name={name} />,
};

export default function RestPage({ content }: Props) {
  const { frontmatter = {} } = content;
  const { title } = frontmatter;

  return (
    <>
      <h1 className="mt-0 text-4xl font-extrabold text-neutral-900 dark:text-neutral">
        {title}
      </h1>
      <section className="flex flex-col max-w-full mt-0 prose dark:prose-invert lg:flex-row">
        <div className="min-w-0 min-h-0 max-w-prose grow">
          <MDXRemote {...content} components={components} />
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params;
  const config = await getConfig();
  const contentPath = config.content.path;
  const filepath = `${contentPath}/${slug.join("/")}`;

  const { content = "", isIndex } = await getContentForPath(filepath);

  const mdxSource = await serialize(content, { parseFrontmatter: true });

  return {
    props: {
      content: mdxSource,
      isIndex,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const config = await getConfig();

  const filePaths = await getAllPaths(config.content.path);

  /** @TODO allow mutlilanguage content */

  const filteredPaths = filePaths
    // Read only md and mdx files
    .filter((path) => path.endsWith(".md") || path.endsWith(".mdx"))
    // Remove the extension
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Remove "index" from the file path
    .map((path) => path.replace(/_?index$/, ""))
    // Remove the content path
    .map((path) => path.replace(`${config.content.path}/`, ""))
    // Remove base content folder
    .filter((path) => path);

  // Convert to the type Next.js expects
  const paths = filteredPaths.map((path) => ({
    params: {
      slug: path.split("/").filter((p) => p),
    },
  }));

  return {
    fallback: false,
    paths,
  };
};
