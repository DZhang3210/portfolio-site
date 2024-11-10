import Certificates from "@/components/Hero/Certificates";
import Hero from "@/components/Hero/Hero";
import HistoricProjects from "@/components/Hero/HistoricProjects";
import Profile from "@/components/Hero/Profile";
import TechPage from "@/components/Hero/Tech";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main
      className="max-w-6xl mx-auto mt-40 flex flex-col gap-32 px-4"
      id="home"
    >
      <Hero />
      <TechPage />
      {/* <Certificates /> */}
      <Profile />
      {/* <HistoricProjects /> */}
      <Footer />
    </main>
  );
}
