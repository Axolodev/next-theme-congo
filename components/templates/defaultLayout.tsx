import React from "react";
import type { PageProps } from "../../lib/types";
import { ThemeHead } from "../molecules";
import { BasicHeader, Footer, HybridHeader } from "../organisms";

function getHeader(type?: string) {
  switch (type) {
    case "hybrid":
      return HybridHeader;
    case "basic":
      return BasicHeader;
    default:
      return HybridHeader;
  }
}

interface Props {
  pageProps: PageProps;
}

export default function Default({
  children,
  pageProps,
}: React.PropsWithChildren<Props>) {
  const { settings, content } = pageProps;
  const footerLinks =
    settings?.menus.footer.sort((a, b) => a.weight - b.weight) ?? [];
  const headerLinks =
    settings?.menus.main.sort((a, b) => a.weight - b.weight) ?? [];

  const Header = getHeader(settings?.header.layout);

  return (
    <>
      <ThemeHead content={content} settings={settings} />
      <Header links={headerLinks} />
      <main className="relative grow">{children}</main>
      <Footer links={footerLinks} />
    </>
  );
}
