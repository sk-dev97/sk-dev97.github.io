import { useEffect, useState } from "react";

function readPreference(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

export default function usePortfolioTheme() {
  const [theme, setTheme] = useState(() => readPreference("portfolio-theme", "light"));
  const [neon, setNeon] = useState(() => readPreference("portfolio-neon", "false") === "true");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.neon = String(neon);
    try {
      localStorage.setItem("portfolio-theme", theme);
      localStorage.setItem("portfolio-neon", String(neon));
    } catch {
      // The selected theme still works when browser storage is unavailable.
    }
  }, [theme, neon]);

  function toggleTheme() {
    setTheme((current) => current === "dark" ? "light" : "dark");
    setNeon(false);
  }

  function toggleNeon() {
    setNeon((current) => !current);
    setTheme("dark");
  }

  return { theme, neon, toggleTheme, toggleNeon };
}
