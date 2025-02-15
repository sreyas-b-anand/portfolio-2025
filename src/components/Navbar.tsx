"use client";

import React, { useState } from "react";
import { scrollToSection } from "@/utils/ScrollToView";
import { Download } from "lucide-react";
import { downloadResume } from "@/utils/DownloadFile";
import { Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar"; // Import the Sidebar component
import Image from "next/image";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  document.documentElement.addEventListener("touchstart", ()=>{
    setSidebarOpen(false)
  });
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-[#200d33]">
        <div className="flex items-center justify-around px-10"> 
        <div className="flex items-center justify-between  py-4 w-full px-8">
          <header className="flex items-center justify-center gap-3 ">
            <Image
              className="rounded-full hidden md:block"
              src={"/icons/logo.png"}
              alt=""
              width={40}
              height={40}
            />
            <p className="text-2xl font-semibold md:font-bold text-white">
              Sreyas B Anand
            </p>
          </header>

          <div className="hidden md:flex items-center justify-evenly gap-5 mr-28">
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
        </div>
        <div className="block md:hidden hover:cursor-pointer">
          <button>
            <Menu onClick={toggleSidebar} />
          </button>
        </div>
        </div>
      </nav>
      {isSidebarOpen && (
        <Sidebar
          isSideBarOpen={isSidebarOpen}
          setIsSideBarOpen={setSidebarOpen}
        />
      )}
    </>
  );
};

export default Navbar;
