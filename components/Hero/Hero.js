"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FlipWords } from "../ui/flip-words";
import { mlProjectsList } from "@/lib/ml-projects-list";
import { recentProjectsList } from "@/lib/recent-projects-list";

// Whatever is flagged as a work in progress shows up as "Currently building".
const current = [...mlProjectsList, ...recentProjectsList].find((p) => p.badge);

const Hero = () => {
  const words = ["Full Stack", "Machine Learning"];
  return (
    <div className="w-full">
      <div className="text-8xl sm:text-9xl">David Zhang</div>
      <motion.div
        className="text-4xl sm:text-6xl"
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.2 },
        }}
      >
        {/* Fixed-height line for the rotating words, so "Developer" never moves */}
        <div className="relative h-[1.25em] -ml-2">
          <FlipWords words={words} />
        </div>
        <div>Developer</div>
      </motion.div>
      <div className="pt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-5 sm:gap-x-8">
        <div className="flex items-center gap-5">
          <Link href="/Documents/David-Zhang-Resume.pdf" target="_blank" className="self-start">
            <button className="bg-primary text-white px-4 py-3 rounded-lg flex flex-row gap-2 items-center hover:text-black hover:bg-white hover:border-black border-2 border-transparent transition">
              Resume
              <Download className="w-5 h-5" />
            </button>
          </Link>

          <a
            href="https://www.linkedin.com/in/techdavidzhang1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-main transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/DZhang3210"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 hover:text-main transition-colors"
          >
            <SiGithub className="w-6 h-6" />
          </a>
          <a
            href="mailto:davidzhang3210@gmail.com"
            className="text-gray-600 font-medium hover:text-main underline-offset-4 hover:underline transition-colors"
          >
            Email
          </a>
        </div>

        {current && (
          <a
            href={mlProjectsList.includes(current) ? "#machine-learning" : "#portfolio"}
            className="group self-start flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50/70 pl-4 pr-5 py-3 text-sm sm:text-base text-gray-600 transition duration-300 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-[0_6px_20px_-6px_rgba(16,185,129,0.45)]"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping [animation-duration:2.5s]" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span>
              Currently building{" "}
              <span className="font-semibold text-gray-900">{current.title}</span>
            </span>
            <ArrowDown className="w-4 h-4 text-emerald-700 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;
