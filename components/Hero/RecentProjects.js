import { Github, Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import TagList from "../TagList";

const RecentProjects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4">
      {[
        [
          "/reddit.gif",
          "Reddit Clone",
          "Full Stack Reddit Clone",
          "https://reddit-clone-topaz-beta.vercel.app/",
          "https://github.com/DZhang3210/reddit-clone",
          [
            "NextJS",
            "Convex",
            "File Upload",
            "Rich-Text",
            "Real-Time",
            "Social-Media",
            "Typescript",
          ],
        ],
        [
          "/eCommerce.gif",
          "eCommerce",
          "Mobile-responsive eCommerce marketiplace utilizing postgresql and authenticated Users + Payment",
          "https://prisma-deploy-kohl.vercel.app/",
          "https://github.com/DZhang3210/prisma-deploy",
          ["NextJS", "Prisma", "Zod", "Typescript", "Stripe", "Resend"],
        ],

        [
          "/Upwork-gif.gif",
          "OfficeVibe",
          "Mobile-responsive front-end interface replicating the OfficeVibe platform",
          "https://workvibe.netlify.app/",
          "https://github.com/DZhang3210/work-vibe",
          ["NextJS", "React", "Tailwind", "Framer-Motion"],
        ],
        [
          "/Unsplash-gif.gif",
          "Unsplash",
          "Mobile-responsive front-end interface replicating the Unsplash platform",
          "https://unsplash-replica1.netlify.app/",
          "https://github.com/DZhang3210/unsplash",
          ["NextJS", "React", "Tailwind", "Framer-Motion"],
        ],
      ].map(([preview, title, desc, link, github, tags], i) => (
        <div
          className="flex flex-col border rounded-2xl p-5 border-secondary gap-4 transition hover:-translate-y-1 cursor-pointer"
          key={i}
        >
          <Image
            src={preview}
            alt={preview}
            width={100}
            height={50}
            className="w-full"
          />
          <div>
            <div className="text-xl font-semibold">{title}</div>
            <TagList tags={tags} />
            <p>{desc}</p>
          </div>
          <div className="flex pr-5 gap-2 text-white">
            <a
              className="flex gap-1 p-1 bg-[#2C3E50] transition hover:text-blue-400 rounded-lg items-center"
              href={link}
              target="_blank"
            >
              <Link />
              Link
            </a>
            <a
              className="flex gap-2 p-1 bg-[#333333] transition hover:text-blue-400 rounded-lg items-center"
              href={github}
              target="_blank"
            >
              <Github />
              Github
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentProjects;
