import * as React from "react";
import { Icon } from "../atoms";

interface Props {
  href: string;
  content: string;
  mode?: "internal" | "external";
  download?: string;
  rel?: string;
  icon?: string;
}

/**
 * @TODO Add download functionality
 */
function ctaButton({
  href,
  mode = "internal",
  children,
  content,
  icon,
}: React.PropsWithChildren<Props>) {
  let props: Props = {
    href,
    content,
  };

  if (mode === "external") {
    props.href = "_blank";
    props.rel = "noopener noreferrer";
  }

  return (
    <a
      className="inline-block !rounded-md bg-primary-600 px-4 py-1 !text-neutral !no-underline hover:!bg-primary-500 dark:bg-primary-800 dark:hover:!bg-primary-700"
      {...props}
    >
      {icon && <Icon name="github" className="mr-2 text-xl" />}
      {content || children}
    </a>
  );
}

export default ctaButton;
