import { useTheme } from "next-themes";
import { useState, useEffect, ReactNode } from "react";

interface ThemeToggleProps {
  renderIcon: (theme?: string) => ReactNode;
}

export const ThemeToggle = ({ renderIcon }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-gray-400 w-9  hover:bg-opacity-20 bg-opacity-10 dark:bg-opacity-30 dark:hover:bg-opacity-50 p-2 rounded-xl"
      aria-label="Toggle Dark Mode"
    >
      {renderIcon(theme)}
    </button>
  );
};
