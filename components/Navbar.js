import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 shadow-md flex justify-between px-10 h-[5rem] items-center text-2xl bg-white z-[100]"
      id="navbar"
    >
      <div className="text-2xl text-main">David Zhang</div>
      <div className="flex gap-4 items-center">
        <Link
          href="https://www.linkedin.com/in/david-zhang-50b068210/"
          target="_blank"
        >
          <button className="border-2 border-gray-500 hover:bg-main hover:border-transparent hover:text-white transition rounded-lg p-2">
            <Linkedin className="w-7 h-7" />
          </button>
        </Link>
        <Link href="https://github.com/DZhang3210" target="_blank">
          <button className="border-2 border-gray-500 hover:bg-main hover:border-transparent hover:text-white transition rounded-lg p-2">
            <Github className="w-7 h-7" />
          </button>
        </Link>
        <Link href="mailto:davidzhang3210@gmail.com" target="_blank">
          <button className="bg-primary text-white px-2 sm:px-4 py-2 rounded-lg text-lg hover:text-black hover:bg-white hover:border-black border-2 border-transparent transition">
            <Mail className="w-7 h-7 sm:hidden" />
            <span className="hidden sm:inline">Contact Me</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
