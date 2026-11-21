import { writingList } from "./writing-list";

const WRITEUP_URL = writingList[0].site;

// The home page leads with the newest write-up; the list lives in writing-list.js.
export const mlPaper = writingList[0];

// Each entry: { image? | metric + metricLabel, title, desc, site?, siteLabel?, code?, tags, badge?, label? }
// `badge` marks a work in progress (it also drives the hero's "Currently building" chip);
// `label` is a plain tag such as "Interactive demo".
// Give an `image` (a screenshot) or a `metric` result panel.
// Same link rules as the projects list: `site` is the live app (or write-up), `code` the source.
// `siteLabel` renames the "Visit site" button, e.g. for a write-up.
// `desc` can hold links; give them `relative z-20` so they sit above the whole-card link.
export const mlProjectsList = [
  {
    image: "/same-place-cropped.png",
    title: "Same Place?",
    label: "Interactive demo",
    desc: (
      <>
        The interactive version of the write-up{" "}
        <a
          href={WRITEUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-20 font-semibold text-blue-900 underline underline-offset-2 decoration-blue-900/40 hover:decoration-blue-900"
        >
          Same place or not?
        </a>{" "}
        Guess whether two map records are the same place, then see how you stack up against its models
      </>
    ),
    site: "https://addressmatcher.vercel.app/",
    siteLabel: "Play",
    code: "https://github.com/DZhang3210/address_matcher",
    tags: ["TypeScript", "React", "Vite", "Python", "scikit-learn", "PyTorch"],
  },
];
