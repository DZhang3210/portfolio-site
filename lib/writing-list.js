// Write-ups and papers, newest first. Shown on /writing, and the first one also
// leads the Machine Learning section on the home page.
// Each entry: { title, meta, desc, site, paper?, code?, demo?, demoLabel?, tags }
// `site` is the write-up, `paper` the full PDF, `demo` a playable companion.
export const writingList = [
  {
    title: "Same place or not? What breaks address-matching models",
    meta: "Write-up · Nov 2026",
    desc: "A benchmark of tree models against a siamese BiLSTM, ESIM and DistilBERT on real Overture–Foursquare address pairs, scored by pair type. The trees win clearly on one case: matches with a missing house number.",
    site: "https://dzhang3210.github.io/posts/address-matching/",
    paper: "https://github.com/DZhang3210/address-matching-by-pair-type/blob/main/paper/address-matching-by-pair-type.pdf",
    code: "https://github.com/DZhang3210/address-matching-by-pair-type",
    demo: "https://addressmatcher.vercel.app/",
    demoLabel: "Play the demo",
    tags: ["Python", "PyTorch", "Transformers", "scikit-learn", "XGBoost", "Pandas", "DuckDB"],
  },
];
