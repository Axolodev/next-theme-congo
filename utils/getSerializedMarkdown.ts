import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

async function getSerializedMarkdown(content: string) {
  const mdxSource = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: { remarkPlugins: [remarkGfm] },
  });
  return mdxSource;
}

export default getSerializedMarkdown;
