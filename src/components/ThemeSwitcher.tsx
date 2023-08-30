"use client"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  const [change, setChange] = useState(false);
 
  useEffect(() => {
    if (change) {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }, [change, setTheme]);
  

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={() => setChange(!change)}
    >
      {
        theme === "light"
        ? <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        : <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      }
    </Button>
  );
};

export default ThemeSwitcher;