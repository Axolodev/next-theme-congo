import fs from "fs";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import path from "path";
import { Profile } from "../components";
import MarkdownRenderer from "../components/organisms/markdownRenderer";
import { getConfig } from "../lib";
import getSerializedMarkdown from "../utils/getSerializedMarkdown";
import type { NextPageWithLayout } from "./_app";

interface Props {
  content: MDXRemoteSerializeResult;
}

const Home: NextPageWithLayout<Props> = ({ content }: Props) => {
  return (
    <Profile>
      <MarkdownRenderer content={content} />
    </Profile>
  );
};

export async function getStaticProps() {
  const config = getConfig();
  const indexPath = `${config.content.path}/${config.content.home}`;

  const fileContent = fs.readFileSync(path.resolve(indexPath))?.toString();

  const compiledContent = await getSerializedMarkdown(fileContent);

  return {
    props: {
      content: compiledContent,
      settings: config,
    },
  };
}

export default Home;
