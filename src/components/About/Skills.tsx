"use client";

import { motion } from "framer-motion";
import { GrMysql } from "react-icons/gr";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { BiLogoFlask } from "react-icons/bi";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiCplusplus,
  SiC,
  SiAndroidstudio,
  SiDocker,
  SiSupabase,
} from "react-icons/si";

import { BiLogoFigma } from "react-icons/bi";
import { TbBrandVscode, TbBrandCSharp } from "react-icons/tb";
import { FaJs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { FaFlutter } from "react-icons/fa6";
import { DiDart } from "react-icons/di";
const Skills = () => {
  const skills = [
    // Frontend
    {
      name: "React",
      category: "Frontend",
      icon: <FaReact className="text-[#61DAFB]" />,
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: <SiNextdotjs className="text-white" />,
    },
    {
      name: "TypeScript",
      category: "Frontend",
      icon: <SiTypescript className="text-[#3178C6]" />,
    },
    {
      name: "Tailwind",
      category: "Frontend",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
    },
    {
      name: "HTML5",
      category: "Frontend",
      icon: <FaHtml5 className="text-[#E34F26]" />,
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: <FaCss3Alt className="text-[#1572B6]" />,
    },

    // Backend
    {
      name: "Node.js",
      category: "Backend",
      icon: <FaNodeJs className="text-[#339933]" />,
    },
    {
      name: "Express",
      category: "Backend",
      icon: <SiExpress className="text-white" />,
    },
    {
      name: "MongoDB",
      category: "Backend",
      icon: <SiMongodb className="text-[#47A248]" />,
    },
    {
      name: "Flask",
      category: "Backend",
      icon: <BiLogoFlask className="text-[#ffff]" />,
    },
    {
      name: "MySQL",
      category: "Backend",
      icon: <GrMysql className="text-[#ffff]" />,
    },
    {
      name: "REST APIs",
      category: "Backend",
      icon: <TbApi className="text-white" />,
    },

    // Tools
    {
      name: "Git",
      category: "Tools",
      icon: <FaGitAlt className="text-[#F05032]" />,
    },
    {
      name: "Docker",
      category: "Tools",
      icon: <SiDocker color="#00BFFF" />,
    },
    {
      name: "VS Code",
      category: "Tools",
      icon: <TbBrandVscode className="text-[#007ACC]" />,
    },
    {
      name: "Figma",
      category: "Tools",
      icon: <BiLogoFigma className="text-white" />,
    },
    {
      name: "Postman",
      category: "Tools",
      icon: <SiPostman className="text-[#FF6C37]" />,
    },
    {
      name: "Firebase",
      category: "Tools",
      icon: <IoLogoFirebase className="text-[#FFA611]" />,
    },
    {
      name: "Supabase",
      category: "Tools",
      icon: <SiSupabase className="text-[#3ECF8E]" />,
    },
    // Languages
    {
      name: "C",
      category: "Languages",
      icon: <SiC className="text-[#00599C]" />,
    },
    {
      name: "Python",

      category: "Languages",
      icon: <FaPython className="text-[#3776AB]" />,
    },
    {
      name: "Java",
      category: "Languages",
      icon: <FaJava className="text-[#007396]" />,
    },
    {
      name: "C++",
      category: "Languages",
      icon: <SiCplusplus className="text-[#00599C]" />,
    },
    {
      name: "JavaScript",
      category: "Languages",
      icon: <FaJs className="text-[#F7DF1E]" />,
    },
    {
      name: "C#",
      category: "Languages",
      icon: <TbBrandCSharp className="text-[#00599C]" />,
    },
    {
      name: "Flutter",
      category: "App Development",
      icon: <FaFlutter color="#00BFFF" />,
    },
    {
      name: "Dart",
      category: "App Development",
      icon: <DiDart color="#00BFFF" />,
    },
    {
      name: "Andriod Studio",
      category: "App Development",
      icon: <SiAndroidstudio color="#00BFFF" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-16 items-center justify-center">
      <div className="flex items-center justify-start flex-col group gap-1 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-violet-200"
        >
          What I know
        </motion.h2>
        <div className="h-1 rounded-full w-0 group-hover:w-40 transition-all duration-300 bg-violet-100" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {["Frontend", "Backend", "Tools", "Languages", "App Development"].map(
          (category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative "
            >
              <div className="absolute -left-4 top-0 w-1 h-full bg-violet-500/20 rounded-md" />
              <h3 className="text-xl font-semibold text-violet-400 mb-8 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-500" />
                {category}
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative hover:cursor-pointer "
                    >
                      <div className="absolute -inset-2 bg-violet-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-all">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-sm font-medium text-white/80 group-hover:text-violet-400 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
