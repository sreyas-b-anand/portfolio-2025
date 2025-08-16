import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Download, X } from "lucide-react"; // added X icon
import { downloadResume } from "@/utils/DownloadFile";

const Sidebar = ({
  isSideBarOpen,
  setIsSideBarOpen,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({
      behavior : "smooth",
      block : "start"

    })
    setIsSideBarOpen(false); // close immediately
  };

  return (
    <>
      {/* Dark overlay for mobile */}
      {isSideBarOpen && (
        <div
          onClick={() => setIsSideBarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isSideBarOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.25 }}
        className="
          fixed top-0 left-0 h-full 
          w-full md:w-96 
          bg-[#1A0B38]
          shadow-xl z-50 
          flex flex-col
        "
      >
        {/* Header with Close Button */}
        <div className="py-6 px-6 border-b border-violet-700 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white">Sreyas B Anand</h1>
          <button
            onClick={() => setIsSideBarOpen(false)}
            className="text-white hover:text-violet-300 transition-colors"
          >
            <X size={32} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-8 py-6 px-6 text-white flex-1">
          <nav className="flex flex-col gap-8">
            <button
              onClick={() => handleScroll("home")}
              className="flex items-center gap-4 text-2xl font-bold hover:text-violet-300 transition-colors"
            >
              <FaHome size={28} /> Home
            </button>
            <button
              onClick={() => handleScroll("about")}
              className="flex items-center gap-4 text-2xl font-bold hover:text-violet-300 transition-colors"
            >
              <FaUser size={28} /> About
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className="flex items-center gap-4 text-2xl font-bold hover:text-violet-300 transition-colors"
            >
              <FaProjectDiagram size={28} /> Projects
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="flex items-center gap-4 text-2xl font-bold hover:text-violet-300 transition-colors"
            >
              <FaEnvelope size={28} /> Contact
            </button>
          </nav>

          {/* Resume Button */}
          <button
            onClick={() => {
              downloadResume();
              setIsSideBarOpen(false);
            }}
            className="mt-auto flex items-center gap-4 text-2xl font-extrabold bg-[#19052a] hover:bg-violet-600 px-6 py-4 rounded-xl transition-colors"
          >
            <Download size={28} /> Resume
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
