"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import TechList from "./TechList";

const overlayButton =
  "flex items-center gap-2 px-4 py-2 rounded-full text-base font-semibold transition-transform duration-300 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto";

/**
 * Card shared by the Full Stack and Machine Learning sections.
 * `media` is what sits at the top (a screenshot, or a result panel).
 * Clicking the card opens `site` (or `code` if there is no site);
 * hovering shows buttons for both. `siteLabel` renames the site button (e.g. "Read write-up").
 */
const ProjectCard = ({ media, title, desc, tags, site, siteLabel = "Visit site", code, badge, index = 0, ...rest }) => {
  const primary = site ?? code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
      className={`group relative flex flex-col border rounded-2xl p-3 border-slate-300 gap-4 transition duration-300 ${
        primary
          ? "hover:border-blue-900/40 hover:shadow-[0_12px_32px_-4px_rgba(30,58,138,0.55)] focus-within:ring-2 focus-within:ring-blue-900/50"
          : ""
      }`}
      {...rest}
    >
      {/* Whole-card link, underneath the overlay buttons */}
      {primary && (
        <a
          href={primary}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} – ${site ? siteLabel : "source code"}`}
          className="absolute inset-0 z-10 rounded-2xl focus:outline-none"
        />
      )}

      <div className="relative overflow-hidden rounded-lg">
        {media}

        {primary && (
          <div className="absolute inset-0 z-20 flex [@media(hover:none)]:hidden items-center justify-center gap-3 bg-slate-950/55 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none">
            {site && (
              <a
                href={site}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                className={`${overlayButton} bg-white text-slate-900 hover:bg-blue-50`}
              >
                {siteLabel}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            )}
            {code && (
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className={`${overlayButton} border border-white/70 text-white hover:bg-white/15`}
              >
                <SiGithub className="w-5 h-5" />
                Code
              </a>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <div className="text-2xl font-semibold">{title}</div>
          {badge && (
            <span className="whitespace-nowrap text-xs font-medium uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
              {badge}
            </span>
          )}
        </div>
        <p className="text-gray-700">{desc}</p>

        {/* Touch screens can't hover, so show the links plainly there */}
        {(site || code) && (
          <div className="hidden [@media(hover:none)]:flex relative z-20 gap-5 text-sm font-semibold text-blue-900">
            {site && (
              <a href={site} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                {siteLabel} <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {code && (
              <a href={code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                <SiGithub className="w-4 h-4" /> Code
              </a>
            )}
          </div>
        )}
      </div>

      <div className="mt-auto pt-2">
        <TechList tags={tags} />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
