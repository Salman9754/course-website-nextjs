import HeroSection from "./components/HeroSection";
import FeaturesCourses from "./components/FeaturesCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import { MovingCards } from "./components/MovingCards";
import Upcoming from "./components/Upcoming";
import MeetInstructors from "./components/MeetInstructors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesCourses />
        <WhyChooseUs />
        <MovingCards />
        <Upcoming />
        <MeetInstructors />
        <Footer/>
      </main>
    </>
  );
}
