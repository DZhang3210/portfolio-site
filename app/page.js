import Certificates from "@/components/Hero/Certificates";
import Hero from "@/components/Hero/Hero";
import HistoricProjects from "@/components/Hero/HistoricProjects";
import Profile from "@/components/Hero/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-20 mt-40 flex flex-col gap-32">
      <Hero/>
      <Profile/>
      <Certificates/>
      <HistoricProjects/>
    </main>
  );
}
