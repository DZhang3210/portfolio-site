import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";
import NavLink from "./NavLink";
const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 shadow-md flex justify-between gap-2 px-4 sm:px-10 h-[5rem] items-center text-2xl bg-white z-[100]"
      id="navbar"
    >
      <div className="flex items-center gap-4 sm:gap-8">
        <Link href="/" className="text-xl sm:text-2xl text-main whitespace-nowrap">
          David Zhang
        </Link>
        <NavLink href="/writing">
          Writing
        </NavLink>
      </div>
      <div className="flex gap-2 sm:gap-4 items-center">
        <Link
          href="https://www.linkedin.com/in/techdavidzhang1/"
          target="_blank"
        >
          <button className="border-2 border-gray-500 hover:bg-main hover:border-transparent hover:text-white transition rounded-lg p-1.5 sm:p-2">
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </Link>
        <Link href="https://github.com/DZhang3210" target="_blank">
          <button className="border-2 border-gray-500 hover:bg-main hover:border-transparent hover:text-white transition rounded-lg p-1.5 sm:p-2">
            <Github className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </Link>
        <Link href="mailto:davidzhang3210@gmail.com" target="_blank">
          <button className="bg-primary text-white px-1.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-lg hover:text-black hover:bg-white hover:border-black border-2 border-transparent transition">
            <Mail className="w-6 h-6 sm:hidden" />
            <span className="hidden sm:inline">Contact Me</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
