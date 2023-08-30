"use client"

import { BsGithub } from "react-icons/bs";
import { BiLogoReact, BiLogoTailwindCss, BiLogoDocker, BiLogoNodejs, BiLogoMongodb} from "react-icons/bi";
import {SiNextdotjs, SiNestjs, SiPrisma, SiPostgresql, SiMysql, SiSocketdotio} from "react-icons/si"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import Link from "next/link";


interface Props {
  title: string;
  description: string;
  alt: string;
  src: string;
  technologies: string[];
}

const ProjectCard = ({title, description, alt, src, technologies}: Props) => {

  const techsArray = technologies.map(technologie => {
    switch (technologie) {
      case "next":
        return { title: "Next.JS", icon: <SiNextdotjs/> };

      case "prisma": 
        return {title: "Prisma", icon: <SiPrisma/>};

      case "docker":
        return {title: "Docker", icon: <BiLogoDocker/>};

      case "node":
        return {title: "Node.JS", icon: <BiLogoNodejs/> };

      case "react":
        return {title: "React", icon: <BiLogoReact/>};

      case "mongo": 
        return {title: "MongoDB", icon: <BiLogoMongodb/>};

      case "mysql":
        return {title: "MySQL", icon: <SiMysql/>};

      case "postgresql":
        return {title: "Postgresql", icon: <SiPostgresql/>};

      case "socket":
        return {title: "SocketIo", icon: <SiSocketdotio/>}

      default:
        null;
    };
  }).filter(tech => tech !== undefined);

  return (
    <Card>

      <CardHeader>
        <CardTitle>
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>

      </CardContent>

      <CardFooter className="flex items-center justify-between">

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Info
            </Button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent>
            <DropdownMenuItem className="font-medium">
              Technologies
            </DropdownMenuItem>
            <DropdownMenuSeparator/>

            {
              techsArray.map((tech, index) => (
                <DropdownMenuItem key={index} className="flex gap-2">
                  {tech?.icon}
                  {tech?.title}
                </DropdownMenuItem>
              ))
            }

          </DropdownMenuContent>
        </DropdownMenu>

        <Button asChild>
          <Link href="https://www.github.com/carlosmgonzalez" className="flex items-center gap-2">
            <BsGithub className="w-5 h-5"/>
            Github
          </Link>
        </Button>

      </CardFooter>
    </Card>
  );
};

export default ProjectCard;