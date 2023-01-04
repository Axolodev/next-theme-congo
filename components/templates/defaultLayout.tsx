import React from "react";
import { useSettings } from "../molecules/settingsContext";
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

export default function Default({ children }: React.PropsWithChildren) {
  const settings = useSettings();
  const footerLinks =
    settings?.menus.footer.sort((a, b) => a.weight - b.weight) ?? [];
  const headerLinks =
    settings?.menus.main.sort((a, b) => a.weight - b.weight) ?? [];

  const Header = getHeader(settings?.header.layout);

  return (
    <>
      {/** @TODO Allow choosing between headers */}
      <Header links={headerLinks} />
      <main className="relative grow">{children}</main>
      <Footer links={footerLinks} />
    </>
  );
}
