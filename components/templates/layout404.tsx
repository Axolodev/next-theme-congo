import Head from "next/head";
import React from "react";
import { Footer, HybridHeader } from "../organisms";

export default function Layout404({ children }: React.PropsWithChildren) {
  return (
    <>
      <Head>
        <title>404 Page not found · La Matemaga</title>
      </Head>
      {/** @TODO Allow choosing between headers */}
      <HybridHeader />
      <main className="relative grow">{children}</main>
      <Footer />
    </>
  );
}
