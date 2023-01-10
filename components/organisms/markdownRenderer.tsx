import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { Icon, Image } from "..";

const components = {
  Alert: ({ children }: any) => <div className="alert">{children}</div>,
  Icon: ({ name }: any) => <Icon name={name} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props: any) => <Image {...props} />,
};

const MarkdownRenderer = ({
  content,
}: {
  content: MDXRemoteSerializeResult;
}) => <MDXRemote {...content} components={components} />;

export default MarkdownRenderer;
