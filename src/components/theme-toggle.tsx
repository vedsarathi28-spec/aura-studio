import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);
  return (
    <button
      onClick={() => setLight((v) => !v)}
      aria-label="Toggle theme"
      className="relative grid h-10 w-10 place-items-center rounded-full glass hover:scale-105 transition-transform"
    >
      {light ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
