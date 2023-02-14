import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  Icon,
  Image,
  Lead,
  AuthorEvents,
  CTAButton,
  Alert,
  ContactForm,
} from "..";

const components = {
  Alert: (props: any) => <Alert {...props} />,
  Icon: ({ name }: any) => <Icon name={name} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props: any) => <Image {...props} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props: any) => <Image {...props} />,
  ContactForm: () => <ContactForm />,
  Lead: (props: any) => <Lead {...props} />,
  Events: (props: any) => <AuthorEvents {...props} />,
  CTAButton: (props: any) => <CTAButton {...props} />,
};

const MarkdownRenderer = ({
  content,
}: {
  content: MDXRemoteSerializeResult;
}) => <MDXRemote {...content} components={components} />;

export default MarkdownRenderer;
