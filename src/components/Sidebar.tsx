"use client"

import Link from "next/link";

const Sidebar = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (value: boolean) => void}) => {

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
    <div 
      className={`absolute z-20 inset-x-0 mx-auto backdrop-blur-sm bg-primary-foreground/80 px-6 ${isOpen ? "w-[1024px] h-full block" : "hidden" }`}
    >
      <ul>
        {
          itemsMenu.map((item, index) => (
            <li key={index}>
              <Link href={item.path} onClick={() => setIsOpen(!isOpen)}>
                <p className="text-2xl">
                  {item.title}
                </p>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Sidebar