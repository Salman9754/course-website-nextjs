"use client";
import React from "react";
import courseData from "@/app/data/data.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";

interface Data {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturesCourses = () => {
  const Featured = courseData.courses.filter(
    (item: Data) => item.isFeatured === true
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {Featured.map((item, index) => {
            return (
              <div key={index} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow gap-3">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {item.title}
                    </p>
                    <p className=" text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {item.description}
                    </p>
                  <div className="mt-3">
                  <Button className="flex justify-center">
                      <Link href={`/courses`}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                  </div>
                </BackgroundGradient>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-20 text-center">
      <Button className="flex justify-center bg-white dark:bg-zinc-900  text-black dark:text-white border-neutral-200 dark:border-slate-800">
                      <Link href={'/courses'}>
                       View All Courses
                      </Link>
                    </Button>
      </div>
    </div>
  );
};

export default FeaturesCourses;
