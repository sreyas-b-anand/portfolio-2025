import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Download } from "lucide-react";
import { scrollToSection } from "@/utils/ScrollToView";
import { downloadResume } from "@/utils/DownloadFile";

const Sidebar = ({
  isSideBarOpen,
  setIsSideBarOpen,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleScroll = async (id: string) => {
    setIsSideBarOpen(false); // Close sidebar first
    await new Promise((resolve) => setTimeout(resolve, 300)); // Small delay before scrolling
    scrollToSection(id);
  };

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isSideBarOpen ? "0%" : "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 h-full w-64 bg-violet-800/95 shadow-lg z-50 md:hidden" // Hide sidebar on larger screens
    >
      <div className="my-8">
        <h1 className="text-2xl font-semibold px-5">Sreyas B Anand</h1>
      </div>
      <div className="flex flex-col gap-6 items-start justify-start h-full text-white px-5">
        <nav className="flex flex-col gap-6">
          <button onClick={() => handleScroll("home")} className="flex items-center gap-2 text-lg transition-colors">
            <FaHome />
            Home
          </button>
          <button onClick={() => handleScroll("about")} className="flex items-center gap-2 text-lg transition-colors">
            <FaUser />
            About
          </button>
          <button onClick={() => handleScroll("projects")} className="flex items-center gap-2 text-lg transition-colors">
            <FaProjectDiagram />
            Projects
          </button>
          <button onClick={() => handleScroll("contact")} className="flex items-center gap-2 text-lg transition-colors">
            <FaEnvelope />
            Contact
          </button>
        </nav>
        <button onClick={()=>{downloadResume()
          setIsSideBarOpen(!isSideBarOpen)
        }} className="flex items-center gap-2 text-lg transition-colors">
          <Download /> Resume
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
