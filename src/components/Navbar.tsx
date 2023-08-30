"use client"
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "./ui/button";
import {X, Equal} from "lucide-react"
import Link from "next/link";
import {usePathname} from "next/navigation";
import CardAboutMe from "./CardAboutMe";

const Navbar = () => {

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const itemsMenu = [
    {
      path: "/",
      title: "Home" 
    },
    {
      path: "/projects",
      title: "Projects"
    },
    {
      path: "/contact",
      title: "Contact"
    }
  ];

  return (
    <>
      <nav
        className={
          `fixed z-10 inset-x-0 top-0 
          container mx-auto px-6 py-2 bg-primary-foreground border-b border-b-secondary`
        }
      >
        <div className="flex justify-between items-center">

          <div className="flex items-center gap-x-2">
            <Button 
              onClick={() => setIsOpen(!isOpen)}
              variant="outline"
              className="relative sm:hidden"
              size="icon"
            >
              <X className={`mx-auto transition duration-300 absolute ${isOpen ? "scale-y-100" : "scale-y-0"}`}/>
              <Equal className={`mx-auto transition duration-300 absolute ${isOpen ? "scale-y-0" : "scale-y-100"}`}/>
            </Button>
            <Link href="/">
              <p className="font-semibold text-lg">I DONI&apos;T HAVE LOGO</p>
            </Link>
          </div>

          <ul className="hidden sm:flex sm:gap-x-5">
            {
              itemsMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    <p className={`${pathname === item.path && "font-medium underline underline-offset-2"}`}>{item.title}</p>
                  </Link>
                </li>
              ))
            }
          </ul>
          
          <div className="flex gap-3 justify-center items-center">
            <ThemeSwitcher/>
            <CardAboutMe/>
          </div>

        </div>
      </nav>

      <div 
        className={
          `fixed z-20 inset-x-0 top-[57px] mx-auto px-6
          transition-all duration-300 ease-in-out
          backdrop-blur-sm bg-primary-foreground/80 
          ${isOpen ? "h-[calc(100vh-57px)]" : "h-0"}
          sm:h-0`
        }
      >
        <ul className={
          `flex flex-col gap-3 w-full h-[calc(100ch-200px)] items-center justify-center
           ${isOpen ? "" : "hidden"}`
          }
        >
          {
            itemsMenu.map((item, index) => (
              <li 
                key={index}  
                className={
                  `transition-all duration-300 ease-linear flex 
                  ${isOpen ? "scale-y-100" : "scale-y-0"}
                  sm:scale-y-0`
                }
              >
                <Link href={item.path} onClick={() => setIsOpen(!isOpen)}>
                  <p className={`text-4xl ${pathname === item.path && "font-medium underline underline-offset-2"}`}>
                    {item.title}
                  </p>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
};

export default Navbar;
