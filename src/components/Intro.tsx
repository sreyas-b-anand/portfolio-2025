"use client";
import { motion } from "framer-motion";
import { Suspense, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Loader from "./Loader/Loader";

const Intro = () => {
  const roles = useMemo(() => ["Mern Stack Developer", "UI/UX Designer", "ML enthusiast"], []);
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setText("");
    setIndex(0);
  }, [currentRole]);

  useEffect(() => {
    if (index < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[index]);
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, currentRole]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * roles.length);
      setCurrentRole(roles[randomIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles]);

  return (
    <div
      id="home"
      className=" flex flex-col-reverse md:flex-row items-center justify-evenly max-w-screen mx-auto px-4 min-h-screen py-32 sm:pt-40 overflow-hidden"
    >
      {/* Left Content */}
      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-2 px-3">
            <div className="h-1 w-10 bg-violet-500 rounded-full" />
            <p className="text-violet-400 font-medium">Portfolio</p>
          </div>

          <h1 className="text-6xl font-bold tracking-tight px-3 sm:text-7xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Creative
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-violet-500"
            >
              Developer
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          className="space-y-6 px-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xl text-white/70 max-w-md">
            Hi, I&apos;m{" "}
            <span className="text-white font-medium">Sreyas B Anand</span>. I
            transform ideas into elegant digital experiences.
          </p>

          <div className="flex items-center gap-2 text-lg">
            <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
            <p className="text-violet-300 font-medium">
              {text}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </p>
          </div>

          <div className="flex gap-4">
            {["Design", "Build", "Innovate"].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-violet-500/20 rounded-lg blur-lg group-hover:bg-violet-500/30 transition-all" />
                <div className="hover:cursor-pointer relative px-6 py-2 bg-black/20 rounded-lg border border-white/10 group-hover:border-violet-500/50 transition-all">
                  {text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Content - Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className=" block relative p-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-transparent blur-2xl" />
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl" />
          <div className="relative w-[200px] h-[200px] rounded-full sm:w-[320px] sm:h-[320px] md:rounded-lg overflow-hidden border border-white/10">
            <Suspense fallback={<Loader/>}>
            <Image
              loading="lazy"
              src="/me/me.jpg"
              alt="Sreyas B Anand"
              fill
              className="object-fill group-hover:scale-105 transition-all duration-500"
              sizes="auto auto"
            />
            </Suspense>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
