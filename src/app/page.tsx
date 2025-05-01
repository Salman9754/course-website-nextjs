import HeroSection from "./components/HeroSection";
import FeaturesCourses from "./components/FeaturesCourses";
import WhyChooseUs from "./components/WhyChooseUs";
export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesCourses />
        <WhyChooseUs />
      </main>
    </>
  );
}
