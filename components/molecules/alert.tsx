import { Icon } from "../atoms";

interface AlertProps {
  icon: string;
  content: string;
}

const Alert = ({
  icon = "triangle-exclamation",
  children,
  content,
}: React.PropsWithChildren<AlertProps>) => {
  return (
    <>
      <div className="molecule-alert flex px-4 py-3 rounded-md bg-primary-100 dark:bg-primary-900">
        <span className="text-primary-400 ltr:pr-3 rtl:pl-3">
          <Icon name={icon} />
        </span>
        &nbsp;
        <span className="dark:text-neutral-300">
          <style jsx>{`
            p {
              padding: 0 !important;
              margin: 0 !important;
            }
          `}</style>
          {content || children}
        </span>
      </div>
    </>
  );
};

export default Alert;
