import Link from "next/link";
import { TitleLogo } from "../../molecules";
import type { HeaderProps } from "./types";

function HybridHeader({ links }: React.PropsWithChildren<HeaderProps>) {
  return (
    <>
      <header className="py-6 font-semibold text-neutral-900 dark:text-neutral print:hidden sm:py-10">
        <nav className="flex items-start justify-between sm:items-center">
          {/* Site logo/title */}
          <div className="z-40 flex flex-row items-center">
            {/** @TODO Allow choosing between both logos */}
            <TitleLogo url="/" />
            {/** @TODO Allow translations */}
          </div>
          {/** @TODO Allow search */}
          {/* Basic menu */}
          <ul className="list-none flex-col sm:flex-row text-right sm:flex">
            {links?.map(({ name, pageRef, title }) => (
              <li className="mb-1 sm:mb-0 sm:mr-7 sm:last:mr-0" key={name}>
                <Link
                  className="decoration-primary-500 hover:underline hover:decoration-2 hover:underline-offset-2"
                  href={pageRef}
                  title={title || name}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default HybridHeader;
