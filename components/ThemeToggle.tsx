import { useTheme } from "next-themes";
import { useState, useEffect, ReactNode } from "react";

interface ThemeToggleProps {
  renderIcon: (theme?: string) => ReactNode;
}

export const ThemeToggle = ({ renderIcon }: ThemeToggleProps) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="w-9 button p-2"
      aria-label="Toggle Dark Mode"
    >
      {renderIcon(resolvedTheme)}
    </button>
  );
};
