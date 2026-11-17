import Certificates from "@/components/Hero/Certificates";
import Hero from "@/components/Hero/Hero";
import HistoricProjects from "@/components/Hero/HistoricProjects";
import Profile from "@/components/Hero/Profile";
import MachineLearning from "@/components/Hero/MachineLearning";
import TechPage from "@/components/Hero/Tech";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main
      className="max-w-6xl mx-auto mt-28 sm:mt-32 flex flex-col gap-20 sm:gap-24 px-4"
      id="home"
    >
      <Hero />
      <MachineLearning />
      <Profile />
      <TechPage />
      {/* <Certificates /> */}
      {/* <HistoricProjects /> */}
      <Footer />
    </main>
  );
}
