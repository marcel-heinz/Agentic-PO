import HeroSection from "@/components/HeroSection";
import UploadSection from "@/components/UploadSection";
import ChartSection from "@/components/ChartSection";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 pb-16">
      <HeroSection />
      <UploadSection />
      <ChartSection />
    </main>
  );
}
