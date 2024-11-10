import React from "react";
import RecentProjects from "./RecentProjects";

const Profile = () => {
  return (
    <div className="flex flex-col gap-5 items-start my-0" id="portfolio">
      <div className="text-5xl font-semibold text-gray-600">My Portfolio</div>
      <hr className="w-full" />

      <RecentProjects />
    </div>
  );
};

export default Profile;
