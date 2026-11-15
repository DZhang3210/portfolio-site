import React from "react";
import { TECH_GROUPS } from "@/lib/tech";
import { TechItem } from "../TechList";

const TechPage = () => {
  return (
    <div className="flex flex-col gap-4 w-full" id="technologies">
      <h1 className="text-5xl font-semibold text-gray-600">Technologies</h1>
      <hr />
      <p className="text-base text-gray-500">
        Things I&apos;ve built with, from daily drivers to tools I&apos;ve picked
        up along the way.
      </p>
      <dl className="flex flex-col gap-4 sm:gap-3 pt-2">
        {TECH_GROUPS.map(([group, names]) => (
          <div key={group} className="flex flex-col sm:flex-row gap-1.5 sm:gap-6">
            <dt className="sm:w-48 shrink-0 pt-0.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
              {group}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-base text-gray-700">
                {names.map((name) => (
                  <TechItem key={name} name={name} />
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default TechPage;
