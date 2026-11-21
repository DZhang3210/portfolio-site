// Each entry: { image? | metric + metricLabel, title, desc, site?, siteLabel?, code?, tags, badge? }
// Give an `image` (a screenshot) or a `metric` result panel.
// Same link rules as the projects list: `site` is the live app (or write-up), `code` the source.
// `siteLabel` renames the "Visit site" button, e.g. for a write-up.
export const mlProjectsList = [
  {
    image: "/address-matching-post-header.png",
    title: "Address Matching by Pair Type",
    desc: "Benchmark of tree models against a siamese BiLSTM, ESIM and DistilBERT on real Overture–Foursquare address pairs, scored by pair type. They differ most on matches with a missing house number: the trees find 94–96%, the neural models 63–76%",
    site: "https://dzhang3210.github.io/posts/address-matching/",
    siteLabel: "Read write-up",
    code: "https://github.com/DZhang3210/address-matching-by-pair-type",
    tags: ["Python", "PyTorch", "Transformers", "scikit-learn", "XGBoost", "Pandas", "DuckDB"],
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
