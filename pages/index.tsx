import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

import { Profile } from "../components";
import { getConfig } from "../lib";

import type { NextPageWithLayout } from "./_app";

interface Props {
  content: MDXRemoteSerializeResult;
}

const Home: NextPageWithLayout<Props> = ({ content }: Props) => {
  return (
    <Profile>
      <div className="mb-9 text-xl lead">
        El sitio cool de la matemaga… kinda.
      </div>
      <MDXRemote {...content} components={{}} />
    </Profile>
  );
};

export async function getStaticProps() {
  const config = await getConfig();
  const indexPath = `${config.content.path}/${config.content.home}`;

  const file = fs.readFileSync(path.resolve(indexPath))?.toString();

  const mdxSource = await serialize(file, { parseFrontmatter: true });

  return {
    props: {
      content: mdxSource,
    },
  };
}

export default Home;
