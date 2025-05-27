"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
// @components
import { Button } from "./ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else if (theme === "dark") {
            setTheme("light");
          }
        }}>
        {theme === "dark" && (
          <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        )}
        {theme === "light" && (
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        )}
      </Button>
    </>
  );
}
