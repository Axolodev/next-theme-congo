import React from "react";
import { Footer, HybridHeader } from "../organisms";

export default function Default({ children }: React.PropsWithChildren) {
  return (
    <>
      {/** @TODO Allow choosing between headers */}
      <HybridHeader />
      <main className="relative grow">{children}</main>
      <Footer />
    </>
  );
}
