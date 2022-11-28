import Link from "next/link";

interface Props {
  path: string;
  title: string;
}

function SubpathLink({ path, title }: Props) {
  return (
    <h3 className="flex items-center text-xl font-semibold">
      <Link
        className="text-neutral-800 decoration-primary-500 hover:underline hover:underline-offset-2 dark:text-neutral"
        href={path}
      >
        {title || path}
      </Link>
    </h3>
  );
}
export default SubpathLink;
