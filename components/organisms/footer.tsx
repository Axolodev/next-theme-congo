import { Copyright } from "../atoms";
import { ThemeToggler, FooterLink, Attributions } from "../molecules";

const footerLinks = [
  {
    name: "Etiquetas",
    url: "/tags",
    title: "Etiquetas",
  },
  {
    name: "Sobre mí",
    url: "/about",
    title: "Sobre mí",
  },
];

export default function Footer() {
  /** @TODO Allow hiding / showing footer from config */
  return (
    <footer className="py-10 print:hidden">
      <nav className="pb-4 text-base font-medium text-neutral-500 dark:text-neutral-400">
        <ul className="flex flex-col list-none sm:flex-row">
          {footerLinks.map((item) => (
            <FooterLink {...item} key={item.name} />
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-between">
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
