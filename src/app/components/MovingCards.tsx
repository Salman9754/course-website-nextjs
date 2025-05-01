"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";

export function MovingCards() {
  return (
    <>
      <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-8 z-10">
          Voices of Success in Tech
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "This platform completely transformed the way I learn. The project-based approach helped me build real applications and gain the confidence I needed to enter the tech industry.",
    name: "Amina Tariq",
    title: "Frontend Developer at PixelPro",
  },
  {
    quote:
      "From HTML to React, every course was well-structured and up-to-date. The instructors explained complex topics in a simple, clear way that made learning enjoyable and effective.",
    name: "Jason Lee",
    title: "Software Engineer at CodeCraft",
  },
  {
    quote:
      "I appreciated how the curriculum focused on real-world challenges. It wasn’t just theory — I built projects I actually used to land freelance work and job interviews.",
    name: "Fatima Noor",
    title: "Full Stack Developer at DevNest",
  },
  {
    quote:
      "What stood out to me was the consistent support and updated content. Whether you're a beginner or brushing up your skills, this platform offers serious value.",
    name: "Rohan Mehta",
    title: "Backend Engineer at CloudCore",
  },
  {
    quote:
      "I started with zero coding experience. Thanks to the practical lessons and career advice, I now have a solid portfolio and a junior dev job I love.",
    name: "Sophia Kim",
    title: "Junior Developer at BrightTech",
  },
];
