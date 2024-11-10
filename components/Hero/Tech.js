"use client";
import { techList } from "@/lib/tech-list";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const TechPage = () => {
  return (
    <div className="flex flex-col gap-4 w-full" id="technologies">
      <h1 className="text-5xl font-semibold text-gray-600">Technologies</h1>
      <hr />
      <p className="text-base text-gray-500 indent-2">
        I'm proficient in a range of modern technologies that empower me to
        build highly functional solutions. These are some of my main
        technologies.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {techList.map((tech, index) => (
          <TechCard tech={tech} index={index} key={tech.name} />
        ))}
      </div>
    </div>
  );
};

const TechCard = ({ tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-row gap-2 w-full border rounded-lg p-2"
    >
      <div className="w-14 h-14">
        <Image src={tech.image} alt={tech.name} width={64} height={64} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-xl font-semibold">{tech.name}</div>
        <p className="text-sm">{tech.description}</p>
      </div>
    </motion.div>
  );
};

export default TechPage;
