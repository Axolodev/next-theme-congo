import { TitleLogo } from "../../molecules/logo";

const BasicHeader = () => {
  return (
    <header className="py-6 font-semibold text-neutral-900 dark:text-neutral print:hidden sm:py-10">
      <nav className="flex items-start justify-between sm:items-center">
        <div className="flex flex-row items-center">
          <TitleLogo url="/" />
        </div>
      </nav>
    </header>
  );
};

export default BasicHeader;
