import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getConfig } from "../lib";
import getContentForPath from "./getContentForPath";
import getReadingTime from "./getReadingTime";

export interface SubpathsWithContent {
  path: string;
  mdxSource: MDXRemoteSerializeResult;
  readingTime: number;
}
type GetContentForSubpaths = (
  subaths: string[]
) => Promise<SubpathsWithContent[]>;

const getContentForSubpaths: GetContentForSubpaths = async (
  subpaths: string[]
) => {
  const config = await getConfig();
  const contentPath = config.content.path;
  const content = await Promise.all(
    subpaths.map(async (subpath) => {
      const { content } = await getContentForPath(subpath);
      const mdxSource = await serialize(content, { parseFrontmatter: true });
      const readingTimeMinutes = getReadingTime(mdxSource?.compiledSource);

      return {
        path: subpath.replace(contentPath, ""),
        mdxSource,
        readingTime: readingTimeMinutes,
      };
    })
  );

  return content;
};

export default getContentForSubpaths;
