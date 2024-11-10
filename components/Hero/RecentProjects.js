"use client";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import TagList from "../TagList";
import { recentProjectsList } from "@/lib/recent-projects-list";
import { motion } from "framer-motion";

const RecentProjects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4">
      {recentProjectsList.map(([preview, title, desc, link, tags], i) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          className="flex flex-col border rounded-2xl p-3 border-transparent gap-6 transition cursor-pointer"
          key={i}
        >
          <Image
            src={preview}
            alt={preview}
            width={100}
            height={50}
            className="w-full"
          />
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-semibold">{title}</div>
            <TagList tags={tags} />
            <p>{desc}</p>
          </div>
          <div className="flex justify-end pr-5 gap-2 text-white">
            <a
              className="flex gap-1 p-4 bg-main rounded-md items-center hover:bg-blue-600 transition"
              href={link}
              target="_blank"
            >
              <MoveUpRight className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RecentProjects;
