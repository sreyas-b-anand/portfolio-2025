"use client";
import grammrImg from "/public/grammr.jpg";
import fauxImg from "/public/faux.png";
import eventOnImg from "/public/eventon.png";
import taskerImg from "/public/tasker.jpg";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const grammr = {
    header: "Grammr",
    desc: "I have created a simple grammar checker using the Gemini API.",
    gitlink: "https://github.com/sreyas-b-anand/grammr",
    weblink: "https://grammr.vercel.app/",

    id: 1,
    imageUrl: grammrImg,
    techStack: ["Next.js", "Gemini API", "Tailwind CSS"],
  };

  const faux = {
    header: "Faux",
    desc: "A chrome extension that helps you spot fake images and videos while browsing the web.",
    gitlink: "https://github.com/ABHAY-100/faux-detector",
    weblink: "https://fauxdetect.vercel.app/",
    id: 2,
    imageUrl: fauxImg,
    techStack: ["Chrome extension", "Tensorflow", "html", "css", "js"],
  };

  const eventOn = {
    header: "eventOn",
    desc: "I have created a dynamic event calendar application.",
    gitlink: "https://github.com/sreyas-b-anand/eventOn",
    weblink: "https://event-on.vercel.app/",
    id: 3,
    imageUrl: eventOnImg,

    techStack: ["React", "Tailwind CSS", "Shadcn UI", "TypeScript"],
  };
  const tasker = {
    header: "Tasker",
    desc: "I have created a simple to-do app using MERN stack.",
    gitlink: "https://github.com/sreyas-b-anand/todo-mern",
    weblink: "https://todo-mern-pearl.vercel.app",
    id: 4,
    imageUrl: taskerImg,
    techStack: ["MERN", "Chakra UI", "Tailwind CSS"],
  };
  const projects = [tasker, grammr, faux, eventOn];
  return (
    <>


        <div id="projects" className=" w-screen min-h-screen p-5 flex flex-col justify-center items-center">
        <motion.div className="flex flex-col gap-10 items-center justify-center">
            <motion.div className="text-4xl font-bold  ">Projects</motion.div>

            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </motion.div>
        </div>

    </>
  );
};

export default Projects;


/**/