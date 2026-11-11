import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "bunkie-theme";

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;

  try {
    const theme = window.localStorage.getItem(STORAGE_KEY);
    return theme === "light" || theme === "dark" ? theme : null;
  } catch {
    return null;
  }
}

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";

  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function ThemeToggle() {
  const [preference, setPreference] = useState<Theme | null>(null);
  const [systemTheme, setSystemTheme] = useState<Theme>("light");
  const [isReady, setIsReady] = useState(false);
  const theme = preference ?? systemTheme;

  useEffect(() => {
    setPreference(getStoredTheme());

    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const updateSystemTheme = () => setSystemTheme(mediaQuery.matches ? "dark" : "light");

      updateSystemTheme();
      if (typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", updateSystemTheme);
        return () => mediaQuery.removeEventListener("change", updateSystemTheme);
      }

      mediaQuery.addListener(updateSystemTheme);
      return () => mediaQuery.removeListener(updateSystemTheme);
    } catch {
      setSystemTheme("light");
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const root = document.documentElement;
    root.classList.toggle("theme-light", theme === "light");
    root.classList.toggle("theme-dark", theme === "dark");
    root.style.colorScheme = theme;

    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute("content", theme === "dark" ? "#000000" : "#ffffff");
  }, [isReady, theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setPreference(nextTheme);

    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // If storage is unavailable, the chosen theme still applies for this visit.
    }
  };

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid size-10 place-items-center rounded-full border border-line text-foreground transition-colors hover:bg-muted"
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
