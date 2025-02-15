"use client";

import React, { useState } from "react";
import { scrollToSection } from "@/utils/ScrollToView";
import { Download } from "lucide-react";
import { downloadResume } from "@/utils/DownloadFile";
import { Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar"; // Import the Sidebar component

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-[#200d33]">
        <div className="flex items-center justify-between px-10 py-5">
          <header className="flex items-center justify-center text-2xl font-semibold md:font-bold text-white">
            Sreyas B Anand
          </header>

          <div className="hidden md:flex items-center justify-center gap-8">
            <a
              className="hover:cursor-pointer text-[17px] hover:opacity-100 opacity-80 text-white"
              role="button"
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>
            <a
              className="hover:cursor-pointer text-[17px] hover:opacity-100 opacity-80 text-white"
              role="button"
              onClick={() => scrollToSection("about")}
            >
              About
            </a>
            <a
              className="hover:cursor-pointer text-[17px] hover:opacity-100 opacity-80 text-white"
              role="button"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </a>
            <a
              className="hover:cursor-pointer text-[17px] hover:opacity-100 opacity-80 text-white"
              role="button"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </a>
          </div>
          <div className="hidden md:block">
            <button
              className="flex items-center justify-center gap-2 opacity-80 border-2 border-white text-white hover:cursor-pointer hover:opacity-100 px-3 py-2 rounded-lg transition-opacity duration-300"
              onClick={downloadResume}
            >
              <Download />
              Resume
            </button>
          </div>
          <div className="block md:hidden hover:cursor-pointer">
            <button><Menu onClick={toggleSidebar} /></button>
          </div>
        </div>
      </nav>
      {isSidebarOpen && <Sidebar isSideBarOpen={isSidebarOpen} setIsSideBarOpen={setSidebarOpen} />} 
    </>
  );
};

export default Navbar;