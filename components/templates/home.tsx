import Head from "next/head";
import React from "react";
import { Footer, HybridHeader } from "../organisms";

export default function Home({ children }: React.PropsWithChildren) {
  return (
    <>
      <Head>
        <title>La Matemaga</title>
      </Head>
      {/** @TODO Allow choosing between headers */}
      <HybridHeader />
      <main className="flex flex-col grow items-center justify-center text-center h-full">
        {children}
      </main>
      <Footer />
    </>
  );
}
