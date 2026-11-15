import React from "react";
import { TECH } from "@/lib/tech";

export const TechItem = ({ name }) => {
  const [Icon, color] = TECH[name] ?? [];
  return (
    <li className="flex items-center gap-1.5">
      {Icon && <Icon className="w-4 h-4 shrink-0" style={{ color }} aria-hidden />}
      {name}
    </li>
  );
};

const TechList = ({ tags }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
        Technologies
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-gray-600">
        {tags.map((tag) => (
          <TechItem key={tag} name={tag} />
        ))}
      </ul>
    </div>
  );
};

export default TechList;
