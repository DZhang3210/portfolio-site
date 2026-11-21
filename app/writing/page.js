import PaperEntry from "@/components/PaperEntry";
import Footer from "@/components/Footer";
import { writingList } from "@/lib/writing-list";

export const metadata = {
  title: "Writing -- David Zhang",
  description: "Write-ups and papers by David Zhang",
};

export default function Writing() {
  return (
    // Same width and left edge as the home page; fills the screen so the footer sits at the bottom
    <main className="max-w-6xl mx-auto mt-28 sm:mt-32 px-4 min-h-[calc(100vh-7rem)] sm:min-h-[calc(100vh-8rem)] flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-semibold text-gray-600">Writing</h1>
        <p className="text-lg text-gray-700">Write-ups and papers on the machine learning I&apos;ve been working on.</p>
        <hr className="w-full mt-2" />
      </div>

      {/* A plain list, newest first, split by thin rules */}
      <ul className="flex flex-col divide-y divide-slate-200 -mt-4">
        {writingList.map((entry) => (
          <li key={entry.title} className="max-w-3xl py-6">
            <PaperEntry {...entry} showDemo compact />
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
