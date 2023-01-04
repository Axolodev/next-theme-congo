import { ThemeProvider } from "next-themes";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/schemes/avocado.css";
import { DefaultLayout } from "../components";
import type { PageProps, ThemeSettings } from "../lib/types";
import { SettingsContextProvider } from "../components/molecules/settingsContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, settings?: ThemeSettings) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
/** @TODO Add RTL support */

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col min-h-screen px-6 m-auto text-lg leading-7 max-w-7xl bg-neutral text-neutral-900 dark:bg-neutral-800 dark:text-neutral sm:px-14 md:px-24 lg:px-32">
        {children}
      </div>
    </ThemeProvider>
  );
}

function getDefaultLayout(page: ReactElement, pageProps: PageProps) {
  return <DefaultLayout pageProps={pageProps}>{page}</DefaultLayout>;
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || getDefaultLayout;

  return (
    <SettingsContextProvider value={pageProps.settings}>
      <AppLayout>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </AppLayout>
    </SettingsContextProvider>
  );
}
