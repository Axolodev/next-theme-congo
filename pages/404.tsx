import type { GetStaticProps } from "next";
import Head from "next/head";
import { getConfig } from "../lib";
import type { ThemeSettings } from "../lib/types";

function NotFound({ settings }: { settings: ThemeSettings }) {
  /** @TODO add i18n support */
  return (
    <>
      <Head>
        <title>404 Page not found · La Matemaga</title>
      </Head>
      <h1 className="mb-3 text-4xl font-extrabold">Página no encontrada 😕</h1>
      <p className="mt-8 mb-12 text-neutral-400 dark:text-neutral-500">
        Error 404
      </p>
      <div className="prose dark:prose-invert">
        <p>Parece que la página que solicitaste no existe.</p>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const config = getConfig();

  return {
    props: {
      settings: config,
    },
  };
};

export default NotFound;
