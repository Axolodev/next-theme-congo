import Head from "next/head";
import type { ReactElement } from "react";
import { HomeLayout } from "../components";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>La Matemaga</title>
      </Head>
      <HomeLayout />
      {page}
    </>
  );
};

export default Home;
