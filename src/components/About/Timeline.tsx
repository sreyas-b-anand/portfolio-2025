"use client";
import React from "react";
import { motion } from "framer-motion";

const Timeline = ({
  year,
  heading,
  description,
}: {
  year: string;
  heading: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-center gap-3 bg-transparent px-4 py-2 rounded-xl group"
    >
      <motion.div
        className="text-white/70 p-8 rounded-xl text-xl bg-violet-500/20 border border-violet-500/30 backdrop-blur-sm
                   group-hover:bg-violet-500/30 transition-all duration-300"
      >
        {year}
      </motion.div>

      <div
        className="flex flex-col bg-violet-700/20 border border-violet-700/30 backdrop-blur-sm py-2 px-8 rounded-xl
                      group-hover:bg-violet-700/30 transition-all duration-300 min-h-[6rem] min-w-[13rem]"
      >
        <h3 className="text-white/90 p-2 text-xl font-bold text-center">{heading}</h3>
        <p className="text-white/70 p-1 text-lg hidden sm:block">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Timeline;
