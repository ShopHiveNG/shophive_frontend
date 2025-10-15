import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Monitor } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="text-primary-1 relative overscroll-auto bg-transparent"
        >
          {/* Sun for light mode */}
          <Sun
            className={`h-[1.2rem] w-[1.2rem] transition-all ${
              theme === "dark" ? "scale-0 -rotate-90" : "scale-100 rotate-0"
            }`}
          />

          {/* Moon for dark mode */}
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
              theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"
            }`}
          />

          {/* Monitor for system mode */}
          <Monitor
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
              theme === "system" ? "scale-100 rotate-0" : "scale-0 rotate-90"
            }`}
          />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
