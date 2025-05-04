import React from "react";
import Data from "@/app/data/data.json";

const page = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All courses ({Data.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        
      </div>
    </div>
  );
};

export default page;
