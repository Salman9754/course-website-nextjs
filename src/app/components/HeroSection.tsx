import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-20 md:py-0 ">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <h1 className="mt-20 text-4xl md:text-7xl font-bold bg-gradient-to-b from-neutral-50 to-neutral-400 text-transparent bg-clip-text">
          Master in Programming
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          itaque eligendi soluta officiis omnis dolore dolorem culpa et delectus
          optio?
        </p>
        <div className="mt-6">
          <Button 
          borderRadius="1.75rem"
          className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
            Explore it
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
