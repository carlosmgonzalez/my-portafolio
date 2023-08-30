import ProjectCard from "@/components/ProjectCard";
import TechnologieCard from "@/components/TechnologieCard";
import { BiLogoReact, BiLogoTailwindCss, BiLogoDocker } from "react-icons/bi";
import {SiNextdotjs, SiNestjs, SiPrisma, SiPostgresql} from "react-icons/si"

export default function Home() {

  const projects = [
    {
      title: "Breddit",
      description: "Reddit clone",
      alt: "breddit icon",
      src: "/breddit.png",
      technologies: ["next", "prisma", "mysql", "docker"]
    },
    {
      title: "Teslo",
      description: "Online store",
      alt: "teslo icon",
      src: "/teslo.png",
      technologies: ["next", "mongo", "docker"]
    },
    {
      title: "Discord",
      description: "Discord clone",
      alt: "discord icon",
      src: "/discord.png",
      technologies: ["react", "node", "prisma", "mysql", "socket"]
    },
    {
      title: "Task App",
      description: "Create, edit and delete tasks",
      alt: "dicord icon",
      src: "/taskapp.png",
      technologies: ["react", "node", "mongo"]
    }
  ];

  

const technologies = [
  {
    title: "React",
    icon: <BiLogoReact className="w-10 h-10"/>
  },
  {
    title: "Tailwind",
    icon: <BiLogoTailwindCss className="w-10 h-10"/>
  },
  {
    title: "Docker",
    icon: <BiLogoDocker className="w-10 h-10"/>
  },
  {
    title: "Next.JS",
    icon: <SiNextdotjs className="w-10 h-10"/>
  },
  {
    title: "Nest.JS",
    icon: <SiNestjs className="w-10 h-10"/>
  },
  {
    title: "Prisma",
    icon: <SiPrisma className="w-10 h-10"/>
  },
  {
    title: "Postgresql",
    icon: <SiPostgresql className="w-10 h-10"/>
  }
];

  return (
    <>
      <div className="mb-5 mt-24 flex flex-col gap-2">
        <h1 className="text-6xl font-bold">
          Hi 🖐🏼
        </h1>
        <h2 className="text-4xl font-semibold">
          <span className="text-3xl font-medium">
            I&apos;m {` `}
          </span>
          Carlos Gonzalez
        </h2>
        <p>
          And I&apos;m a FullStack Web Developer in constant pursuit of new ways to create and learn.
        </p>
      </div>
      <h1 className="text-3xl font-semibold mt-10 mb-1">Projects</h1>
      <p className="mb-5">Here you can see some of my most outstanding projects</p>
      <div className="grid grid-cols-1 grid-flow-row gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {
          projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title} 
              description={project.description} 
              src={project.src} 
              alt={project.alt}
              technologies={project.technologies}
            />
          ))
        }
      </div>
      <h1 className="text-3xl font-semibold mt-10 mb-1">Technologies</h1>
      <p className="mb-5 "> These are the frameworks, libraries and technologies that I know and I know how to work well with each of them and together</p>
      <div
        className="grid grid-cols-3 gap-2 grid-flow-row md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        {
          technologies.map((technologie, index) => (
            <TechnologieCard
              key={index}
              title={technologie.title}
              icon={technologie.icon}
            />
          ))
        }
      </div>
    </>
  );
};
