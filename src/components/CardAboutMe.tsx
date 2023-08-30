"use client"

import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const CardAboutMe = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="w-9 h-9">
          <AvatarImage src="https://lh3.googleusercontent.com/a/AAcHTtc2u6Gw5ncvqmWSBOb0DPObVQ104kjfDvPk6h_00XWJF8g=s288-c-no"/>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="font-medium">
          My social networks
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>
          <a href="https://www.github.com/carlosmgonzalez" className="flex gap-2">
            <BsGithub className="w-5 h-5"/>
            GitHub
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem >
          <a href="https://www.linkedin.com/in/carlosmgonzalez1998/" className="flex gap-2">
            <BsLinkedin className="w-5 h-5"/>
            Linkedin
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem >
          <a href="https://twitter.com/gcarlosmario1" className="flex gap-2">
            <BsTwitter className="w-5 h-5"/>
            Twitter
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CardAboutMe