import HeroSection from "./components/HeroSection";
import FeaturesCourses from "./components/FeaturesCourses";
export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesCourses />
      </main>
    </>
  );
}
