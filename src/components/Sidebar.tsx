import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Download } from "lucide-react";
import { scrollToSection } from "@/utils/ScrollToView";
import { downloadResume } from "@/utils/DownloadFile";
const Sidebar = ({isSideBarOpen , setIsSideBarOpen} : {
    isSideBarOpen : boolean | null, setIsSideBarOpen : Dispatch<SetStateAction<true | false>>
}) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 h-full w-64 bg-violet-800/95 shadow-lg z-50"
    >
      <div className="my-8 ">
        <h1 className="text-2xl font-semibold px-5">Sreyas B Anand</h1>
      </div>
      <div className="flex flex-col gap-6 items-start justify-start h-full text-white px-5">
        <nav className="flex flex-col gap-6">
          <a
            role="button"
            onClick={() => {scrollToSection("home")
                setIsSideBarOpen(!isSideBarOpen)
            }}
            className="flex items-center gap-2 text-lg  transition-colors"
          >
            <FaHome />
            Home
          </a>
          <a
            role="button"
            onClick={() => {scrollToSection("about")
                setIsSideBarOpen(!isSideBarOpen)
            }}
            className="flex items-center gap-2 text-lg  transition-colors"
          >
            <FaUser />
            About
          </a>
          <a
            role="button"
            onClick={() => {scrollToSection("projects")
                setIsSideBarOpen(!isSideBarOpen)
            }}
            className="flex items-center gap-2 text-lg transition-colors"
          >
            <FaProjectDiagram />
            Projects
          </a>
          <a
            role="button"
            onClick={() => {scrollToSection("contact")
                setIsSideBarOpen(!isSideBarOpen)
            }}
            className="flex items-center gap-2 text-lg transition-colors"
          >
            <FaEnvelope />
            Contact
          </a>
        </nav>
        <button
          onClick={downloadResume}
          className="flex items-center gap-2 text-lg  transition-colors"
        >
          <Download /> Resume
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
