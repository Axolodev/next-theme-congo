import { ThemeProvider } from "next-themes";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/schemes/congo.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
/** @TODO Add RTL support */

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col h-screen px-6 m-auto text-lg leading-7 max-w-7xl bg-neutral text-neutral-900 dark:bg-neutral-800 dark:text-neutral sm:px-14 md:px-24 lg:px-32">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>;
}
