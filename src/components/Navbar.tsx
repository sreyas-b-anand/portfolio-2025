import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-2 h-16 ">
      <header className="flex items-center justify-center">
        Sreyas B Anand
      </header>

      <div className="flex items-center justify-center gap-8 ">
        <Link href={"#home"}>Home</Link>
        <Link href={"#about"}>About</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>

      <div>
        <button>Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;
