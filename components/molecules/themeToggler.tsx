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
