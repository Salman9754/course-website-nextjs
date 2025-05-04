"use client";
import React from "react";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";
const content = [
  {
    title: "Expert Instructors",
    description:
      "Learn from seasoned industry professionals who bring years of experience and hands-on knowledge into each lesson. Our instructors ensure that you not only understand concepts but also know how to apply them in real-world scenarios.",
  },
  {
    title: "Project-Based Learning",
    description:
      "Our courses are centered around real-world projects that help reinforce learning through practice. You'll build a strong portfolio by working on hands-on tasks that reflect the challenges you'll face in actual tech roles.",
  },
  {
    title: "Updated Curriculum",
    description:
      "Technology evolves rapidly, and so do we. Our curriculum is constantly reviewed and updated to include the latest tools, frameworks, and best practices, ensuring you're always learning what's most relevant in the field.",
  },
  {
    title: "Career-Ready Skills",
    description:
      "Gain practical, job-ready skills that employers seek. From technical proficiency to portfolio development and interview preparation, we equip you with everything needed to succeed in today’s competitive tech landscape.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full hide-scrollbar">
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
