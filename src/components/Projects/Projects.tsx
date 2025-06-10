"use client";
import grammrImg from "/public/projects/grammr.jpg";
import fauxImg from "/public/projects/faux.png";
import bidsnapImg from "/public/projects/bidsnap.png";
import privyImage from "/public/projects/privy.png";
import bunkrImg from "/public/projects/bunkr.png";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const bunkr = {
    header: "Bunkr",
    desc: "A modern alternative to Ezygo, our college's third-party legacy attendance system, built to offer a cleaner and more intuitive user experience.",
    gitlink: "https://github.com/ABHAY-100/bunkr-web",
    weblink: "https://bunkr-web.vercel.app/",
    id: 0,
    imageUrl: bunkrImg,
    techStack: ["Next.js", "Tailwind CSS", "Typescript", "Supabase"],
  };
  const grammr = {
    header: "Grammr",
    desc: "I have created a grammar checker using the Gemini API.",
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

  const privy = {
    header: "Privy",
    desc: "Ephemeral & Encrypted Messaging Platform.",
    gitlink: "https://github.com/ABHAY-100/fosshack-privy",
    weblink: "https://privy.abhayyy.tech/",
    id: 3,
    imageUrl: privyImage,

    techStack: ["Next JS", "Express JS", "socket.io", "JavaScript"],
  };
  const bidsnap = {
    header: "BidSnap",
    desc: "I have created online auction system using React , Flask , MySql.",
    gitlink: "https://github.com/sreyas-b-anand/dbms-mini-project",
    weblink: "https://github.com/sreyas-b-anand/dbms-mini-project",
    id: 4,
    imageUrl: bidsnapImg,
    techStack: ["React", "Python", "MySql", "Flask"],
  };
  const projects = [bidsnap, bunkr, grammr, faux, privy];
  return (
    <>
      <div
        id="projects"
        className=" w-screen min-h-screen p-5 flex flex-col justify-center items-center pt-40  "
      >
        <motion.div className="flex flex-col gap-10 items-center justify-center">
          <motion.div className="text-5xl font-bold  mb-10">
            Projects
          </motion.div>

          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
