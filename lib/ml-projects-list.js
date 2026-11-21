const WRITEUP_URL = "https://dzhang3210.github.io/posts/address-matching/";

// The research write-up, shown as a text entry (like a publication listing), not a card.
// `paper` is the full PDF.
export const mlPaper = {
  title: "Same place or not? What breaks address-matching models",
  meta: "Write-up · Nov 2026",
  desc: "A benchmark of tree models against a siamese BiLSTM, ESIM and DistilBERT on real Overture–Foursquare address pairs, scored by pair type. The trees win clearly on one case: matches with a missing house number.",
  site: WRITEUP_URL,
  paper: "https://github.com/DZhang3210/address-matching-by-pair-type/blob/main/paper/address-matching-by-pair-type.pdf",
  code: "https://github.com/DZhang3210/address-matching-by-pair-type",
  tags: ["Python", "PyTorch", "Transformers", "scikit-learn", "XGBoost", "Pandas", "DuckDB"],
};

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
