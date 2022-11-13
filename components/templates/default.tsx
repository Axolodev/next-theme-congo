import React from "react";
import { Footer, HybridHeader } from "../organisms";

export default function Default({ children }: React.PropsWithChildren) {
  return (
    <>
      {/** @TODO Allow choosing between headers */}
      <HybridHeader />
      <article className="flex flex-col items-center justify-center text-center h-full">
        {children}
      </article>
      <Footer />
    </>
  );
}
