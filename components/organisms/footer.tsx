import React from "react";
import type { MenuItem } from "../../lib/types";
import { Copyright } from "../atoms";
import { ThemeToggler, FooterLink, Attributions } from "../molecules";

interface Props {
  links: MenuItem[];
}

export default function Footer({ links }: React.PropsWithChildren<Props>) {
  /** @TODO Allow hiding / showing footer from config */
  return (
    <footer className="py-10 print:hidden">
      <nav className="pb-4 text-base font-medium text-neutral-500 dark:text-neutral-400">
        <ul className="flex flex-col list-none sm:flex-row">
          {links?.map((item) => (
            <FooterLink
              url={item.pageRef}
              name={item.name}
              title={item.name}
              key={item.title || item.name}
            />
          ))}
        </ul>
      </nav>
      <div className="flex justify-between">
        <div>
          {/** @TODO Allow showing / hiding theme attribution and copyright */}
          <Copyright />
          <Attributions />
        </div>
        <ThemeToggler />
      </div>
    </footer>
  );
}
