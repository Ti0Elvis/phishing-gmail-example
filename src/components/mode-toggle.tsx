"use client";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}>
      {theme === "dark" ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
    </Button>
  );
}
