import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import TechList from "./TechList";

const linkProps = { target: "_blank", rel: "noopener noreferrer" };

// A write-up shown like a paper: plain text and links, no card or screenshot.
// `showDemo` adds the demo link (off on the home page, where the demo card sits beside it).
// `compact` is the smaller list version used on /writing (no tech list).
const PaperEntry = ({ title, meta, desc, site, paper, code, demo, demoLabel = "Demo", tags, showDemo = false, compact = false }) => {
  const icon = compact ? "w-3.5 h-3.5" : "w-4 h-4";
  return (
    <article className={`flex flex-col ${compact ? "gap-1.5" : "gap-3"}`}>
      <div className={`font-medium uppercase tracking-wider text-slate-500 ${compact ? "text-xs" : "text-sm"}`}>{meta}</div>
      <a
        href={site}
        {...linkProps}
        className={`font-semibold leading-snug text-slate-900 hover:text-blue-900 hover:underline underline-offset-4 ${
          compact ? "text-xl" : "text-3xl leading-tight decoration-2"
        }`}
      >
        {title}
      </a>
      <p className={compact ? "text-gray-600 leading-relaxed" : "text-gray-700 text-lg leading-relaxed"}>{desc}</p>
      <div
        className={`flex flex-wrap gap-y-1 font-semibold text-blue-900 ${
          compact ? "gap-x-5 text-sm pt-0.5" : "gap-x-6 gap-y-2 text-base"
        }`}
      >
        <a href={site} {...linkProps} className="flex items-center gap-1 hover:underline">
          Read the write-up <ArrowUpRight className={icon} />
        </a>
        {paper && (
          <a href={paper} {...linkProps} className="flex items-center gap-1 hover:underline">
            Full paper (PDF) <ArrowUpRight className={icon} />
          </a>
        )}
        {showDemo && demo && (
          <a href={demo} {...linkProps} className="flex items-center gap-1 hover:underline">
            {demoLabel} <ArrowUpRight className={icon} />
          </a>
        )}
        {code && (
          <a href={code} {...linkProps} className="flex items-center gap-1.5 hover:underline">
            <SiGithub className={icon} /> Code
          </a>
        )}
      </div>
      {tags && !compact && (
        <div className="pt-2">
          <TechList tags={tags} />
        </div>
      )}
    </article>
  );
};

export default PaperEntry;
