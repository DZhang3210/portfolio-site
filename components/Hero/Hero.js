"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { FlipWords } from "../ui/flip-words";

const Hero = () => {
  const [title, setTitle] = useState(0);
  const words = ["Frontend", "Backend", "Fullstack"];
  return (
    <div className="w-full min-h-screen">
      <div className="text-8xl sm:text-9xl">David Zhang</div>
      <motion.div
        className="text-5xl sm:text-6xl"
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.2 },
        }}
      >
        <FlipWords words={words} />
        Developer
        {/* <span className="text-main">Fullstack</span> Engineer */}
      </motion.div>
      <div className="pt-8 flex flex-col sm:flex-row gap-4">
        <Link href="/Documents/David-Zhang-Resume.pdf" target="_blank">
          <button className="bg-primary text-white px-4 py-3 rounded-lg flex flex-row gap-2 items-center hover:text-black hover:bg-white hover:border-black border-2 border-transparent transition">
            Download Resume
            <Download className="w-5 h-5" />
          </button>
        </Link>

        <Link href="/#portfolio">
          <button className="bg-white border border-black px-4 py-3 rounded-lg flex flex-row gap-2 items-center hover:bg-main hover:border-transparent hover:text-white transition">
            See my work
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
