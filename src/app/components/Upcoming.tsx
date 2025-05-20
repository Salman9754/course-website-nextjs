"use client";
import React from "react";
import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export const projects = [
  {
    title: "Full-Stack Web Development",
    description:
      "Master both frontend and backend development in this hands-on workshop covering React, Node.js, and MongoDB.",
    link: "#",
  },
  {
    title: "AI & Machine Learning Essentials",
    description:
      "Dive into machine learning concepts, build models, and explore real-world AI applications using Python and TensorFlow.",
    link: "#",
  },
  {
    title: "Frontend Mastery with React",
    description:
      "Level up your frontend skills by building dynamic, high-performance UIs using React and modern JavaScript.",
    link: "#",
  },
  {
    title: "Intro to DevOps & CI/CD",
    description:
      "Learn the foundations of DevOps and automate your development pipeline with tools like GitHub Actions and Docker.",
    link: "#",
  },
  {
    title: "Cybersecurity Fundamentals",
    description:
      "Understand key cybersecurity principles, threat modeling, and how to safeguard web apps against common attacks.",
    link: "#",
  },
  {
    title: "Cloud Computing with AWS",
    description:
      "Get hands-on with cloud architecture and services using Amazon Web Services — perfect for aspiring cloud engineers.",
    link: "#",
  },
];

const Upcoming = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Tech Workshops
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Level Up Your Tech Skills
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={projects} />
        </div>

        <div className="mt-10 text-center">
          <Button className="flex justify-center bg-white dark:bg-zinc-900  text-black dark:text-white border-neutral-200 dark:border-slate-800">
            <Link href={"#"}>View all webinars</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
