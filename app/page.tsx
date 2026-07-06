import Navbar from "@/components/Navbar";
import HostInstitution from "@/components/HostInstitution";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyParticipate from "@/components/WhyParticipate";
import Tracks from "@/components/Tracks";
import Timeline from "@/components/Timeline";
import Prizes from "@/components/Prizes";
import Register from "@/components/Register";
import Committee from "@/components/Committee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
<main className="min-h-screen bg-[#6d88e3]">
    <Navbar />
      <Hero />
      <About />
      <HostInstitution />
      <WhyParticipate />
      <Tracks />
      <Timeline />
      <Prizes />
      <Register />
      <Committee />
      <FAQ />
      <Footer />
    </main>
  );
}
