import React from "react";
import Image from "next/image";
import ProjectCard from "../ProjectCard";
import { mlProjectsList } from "@/lib/ml-projects-list";

const MachineLearning = () => {
  return (
    <div className="flex flex-col gap-5 w-full" id="machine-learning">
      <div className="text-5xl font-semibold text-gray-600">Machine Learning</div>
      <hr className="w-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {mlProjectsList.map(({ image, metric, metricLabel, title, ...project }, i) => (
          <ProjectCard
            key={title}
            index={i}
            title={title}
            {...project}
            media={
              image ? (
                <Image
                  src={image}
                  alt={title}
                  width={1200}
                  height={800}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  quality={90}
                  className="w-full h-auto"
                />
              ) : (
                // Result panel takes the place of a screenshot
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-lg px-6 py-8">
                  <div className="text-5xl sm:text-6xl font-bold tracking-tight text-blue-950">
                    {metric}
                  </div>
                  <div className="mt-1 text-base text-slate-500">{metricLabel}</div>
                </div>
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MachineLearning;
