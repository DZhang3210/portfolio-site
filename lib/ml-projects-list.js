// Each entry: { image? | metric + metricLabel, title, desc, site?, code?, tags, badge? }
// Give an `image` (a screenshot) or a `metric` result panel.
// Same link rules as the projects list: `site` is the live app, `code` the source.
export const mlProjectsList = [
  {
    metric: "In progress",
    metricLabel: "Matches messy, free-form addresses to real locations",
    title: "Geocoding Address Matcher",
    desc: "Machine learning model that matches free-form addresses to the right location",
    code: "https://github.com/DZhang3210/ml-geocoding",
    tags: ["Python", "PyTorch", "scikit-learn", "XGBoost", "Pandas", "DuckDB", "Jupyter"],
    badge: "Work in progress",
  },
  {
    image: "/same-place-cropped.png",
    title: "Same Place?",
    desc: "A game where you guess whether two map records are the same place, then see how you stack up against the matching models",
    site: "https://addressmatcher.vercel.app/",
    code: "https://github.com/DZhang3210/address_matcher",
    tags: ["TypeScript", "React", "Vite", "Python", "scikit-learn", "PyTorch"],
  },
];
