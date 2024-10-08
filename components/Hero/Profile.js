import { File, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";
import RecentProjects from "./RecentProjects";

const Profile = () => {
  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="text-5xl font-semibold uppercase">Profile</div>
      <hr className="h-[3px] w-full bg-primary" />
      <div className="grid grid-cols-1 xl:grid-cols-2 justify-center gap-8">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/Profile_Pic.jpg"
            alt="Profile-Pic"
            width={517}
            height={702}
            className="rounded-2xl border-2 border-black"
          />
        </div>
        <RecentProjects />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-center w-full">
        {[
          [<Mail key="index1" />, "Email", "mailto:davidzhang3210@gmail.com"],
          [
            <Linkedin key="index2" />,
            "LinkedIn",
            "https://www.linkedin.com/in/david-zhang-50b068210/",
          ],
          [<Github key="index3" />, "Github", "https://github.com/DZhang3210"],
          [<File key="index4" />, "Resume", "Documents/David-Zhang-Resume.pdf"],
        ].map(([icon, title, href], i) => (
          <a
            className="flex gap-2 justify-center border rounded-lg py-8 px-5 text-xl transition hover:bg-blue-900 hover:text-white cursor-pointer border-primary items-center"
            key={i}
            href={href}
            target="_blank"
          >
            <div>{icon}</div>
            <span>{title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;
