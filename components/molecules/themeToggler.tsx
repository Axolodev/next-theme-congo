import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "../atoms";

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="ltr:mr-14 rtl:ml-14cursor-pointer text-sm text-neutral-700 hover:text-primary-600 dark:text-neutral dark:hover:text-primary-400">
      <button
        aria-label="Toggle theme"
        type="button"
        className="w-10 h-10 p-3 rounded dark:text-neutral-400 text-neutral-500"
        onClick={toggleTheme}
      >
        <Icon name={isDark ? "moon" : "sun"} />
      </button>
    </div>
  );
}
