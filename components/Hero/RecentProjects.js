"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import ProjectCard from "../ProjectCard";
import { recentProjectsList } from "@/lib/recent-projects-list";

// How much of the second row peeks out under the fade while collapsed.
const PEEK = 220;
// Padding (with matching negative margin) so hover shadows aren't clipped.
const PAD = 16;

const RecentProjects = () => {
  const [expanded, setExpanded] = useState(false);
  const [opened, setOpened] = useState(false); // expand animation finished
  const [collapsedHeight, setCollapsedHeight] = useState(null);
  const [fullHeight, setFullHeight] = useState(null);
  const gridRef = useRef(null);

  // Collapsed height = bottom of the first row + a peek of the next one.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const measure = () => {
      const cards = [...grid.children];
      const firstTop = cards[0]?.offsetTop ?? 0;
      const firstRowBottom = Math.max(
        ...cards
          .filter((c) => c.offsetTop === firstTop)
          .map((c) => c.offsetTop + c.offsetHeight)
      );
      setCollapsedHeight(firstRowBottom + PEEK);
      setFullHeight(grid.scrollHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
  }, []);

  const canCollapse = collapsedHeight !== null && fullHeight > collapsedHeight;
  const collapsed = !expanded && canCollapse;

  let maxHeight;
  if (collapsed) maxHeight = collapsedHeight + PAD;
  else if (expanded && !opened) maxHeight = fullHeight + PAD * 2;

  return (
    <div className="relative w-full">
      <div
        className={`-mx-4 px-4 -mt-4 pt-4 pb-4 transition-[max-height] duration-700 ease-in-out ${
          opened ? "" : "overflow-hidden"
        }`}
        style={{ maxHeight }}
        onTransitionEnd={(e) => {
          if (expanded && e.target === e.currentTarget) setOpened(true);
        }}
      >
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recentProjectsList.map(({ image, title, ...project }, i) => (
            <ProjectCard
              key={title}
              index={i}
              title={title}
              {...project}
              inert={collapsed && i >= 2 ? true : undefined}
              media={
                <Image
                  src={image}
                  alt={title}
                  width={1200}
                  height={800}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  quality={90}
                  className="w-full h-auto"
                />
              }
            />
          ))}
        </div>
      </div>

      {/* Blurred fade over the peeking row, with the Show more control on top */}
      <div
        className={`absolute inset-x-0 bottom-0 h-56 z-30 flex items-end justify-center pb-6 transition-opacity duration-500 ${
          collapsed ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!collapsed}
      >
        <div className="absolute inset-0 backdrop-blur-[3px] [mask-image:linear-gradient(to_bottom,transparent,black_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/80 to-white" />
        <button
          type="button"
          onClick={() => setExpanded(true)}
          tabIndex={collapsed ? 0 : -1}
          className="relative flex items-center gap-1.5 px-5 py-2 rounded-full bg-white border border-slate-300 text-gray-700 font-medium shadow-sm hover:border-blue-900/40 hover:shadow-[0_6px_20px_-4px_rgba(30,58,138,0.45)] transition duration-300"
        >
          Show more
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default RecentProjects;
