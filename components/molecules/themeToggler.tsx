import { useTheme } from "next-themes";
import { Icon } from "../atoms";
import useIsMounted from "../atoms/useIsMounted";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mr-14 cursor-pointer text-sm text-neutral-700 hover:text-primary-600 dark:text-neutral dark:hover:text-primary-400">
      <button
        aria-label="Toggle theme"
        type="button"
        className="w-12 h-12 "
        onClick={toggleTheme}
      >
        <Icon name={isDark ? "sun" : "moon"} />
      </button>
    </div>
  );
}
