"use client";

import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    document.documentElement.addEventListener("touchstart", () => {
      setSidebarOpen(false);
    });
  }, []);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-[#200d33]">
        <div className="flex items-center justify-around px-10">
          <div className="flex items-center justify-between  py-4 w-full px-8">
            <header className="flex items-center justify-center gap-3 ">
              <Image
                className="rounded-full hidden md:block hover:cursor-pointer"
                src={"/icons/logo.png"}
                alt=""
                width={40}
                height={40}
              />
              <a
                role="button"
                onClick={() => scrollToSection("home")}
                className="flex items-center gap-2"
              >
                <p className="text-2xl font-semibold md:font-bold text-white">
                  Sreyas B Anand
                </p>
              </a>
            </header>

            <div className="hidden lg:flex items-center justify-evenly gap-5 mr-28">
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
            <div className="hidden lg:block">
              <button
                className="flex items-center justify-center gap-2 opacity-80 border-2 border-white text-white hover:cursor-pointer hover:opacity-100 px-3 py-2 rounded-lg transition-opacity duration-300"
                onClick={downloadResume}
              >
                <Download />
                Resume
              </button>
            </div>
          </div>
          <div className="block lg:hidden hover:cursor-pointer">
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
