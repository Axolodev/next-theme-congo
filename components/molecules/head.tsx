import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import type { ThemeSettings } from "../../lib/types";

interface Props {
  content: MDXRemoteSerializeResult;
  settings?: ThemeSettings;
}

function head({ content, settings }: Props) {
  const pageTitle = content?.frontmatter?.title || settings?.content?.title;
  const pageDescription =
    content?.frontmatter?.description || settings?.content?.description;
  return (
    <Head>
      <title>{pageTitle}</title>
      {pageDescription && <meta name="description" content={pageDescription} />}
    </Head>
  );
}

export default head;
