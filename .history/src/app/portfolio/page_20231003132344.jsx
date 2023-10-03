import React from "react";
import WorkCard from "@/components/WorkCard/WorkCard";
const Portfolio = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Our Gallery</h1>
  <div className="flex flex-row gap-5 justify-between">
  <WorkCard />
      <WorkCard />
      <WorkCard />
  </div>
    </div>
  );
};

export default Portfolio;
