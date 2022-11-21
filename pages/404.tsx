import type { ReactElement } from "react";
import { Layout404 } from "../components";

function NotFound() {
  /** @TODO add i18n support */
  return (
    <>
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

NotFound.getLayout = function getLayout(page: ReactElement) {
  return <Layout404>{page}</Layout404>;
};

export default NotFound;
