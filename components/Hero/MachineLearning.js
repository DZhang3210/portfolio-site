import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import ProjectCard from "../ProjectCard";
import TechList from "../TechList";
import { mlPaper, mlProjectsList } from "@/lib/ml-projects-list";

// The write-up reads as a paper: plain text and links, no card or screenshot.
const PaperEntry = ({ title, meta, desc, site, paper, code, tags }) => (
  <article className="flex flex-col gap-3">
    <div className="text-sm font-medium uppercase tracking-wider text-slate-500">{meta}</div>
    <a
      href={site}
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl font-semibold leading-tight text-slate-900 hover:text-blue-900 hover:underline underline-offset-4 decoration-2"
    >
      {title}
    </a>
    <p className="text-gray-700 text-lg leading-relaxed">{desc}</p>
    <div className="flex flex-wrap gap-x-6 gap-y-2 text-base font-semibold text-blue-900">
      <a href={site} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
        Read the write-up <ArrowUpRight className="w-4 h-4" />
      </a>
      {paper && (
        <a href={paper} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
          Full paper (PDF) <ArrowUpRight className="w-4 h-4" />
        </a>
      )}
      <a href={code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:underline">
        <SiGithub className="w-4 h-4" /> Code
      </a>
    </div>
    <div className="pt-2">
      <TechList tags={tags} />
    </div>
  </article>
);

const MachineLearning = () => {
  return (
    <div className="flex flex-col gap-5 w-full" id="machine-learning">
      <div className="text-5xl font-semibold text-gray-600">Machine Learning</div>
      <hr className="w-full" />

      {/* Paper on the left, its playable demo on the right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
        <PaperEntry {...mlPaper} />

        {mlProjectsList.map(({ image, metric, metricLabel, title, ...project }, i) => (
          <ProjectCard
            key={title}
            index={i + 1}
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
