import React from "react";
import WorkCard from "@/components/WorkCard/WorkCard";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div>
      <div className="px-2 flex flex-row  flex-wrap gap-10  justify-center lg:justify-between mt-12">
        <Link href="portfolio/machine-learning">
          <WorkCard
            title="Machine-learning"
            image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          />
        </Link>
        <Link href="portfolio/websites">
          <WorkCard
            title="Websites"
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
          />
        </Link>
        <Link href="portfolio/applications">
          <WorkCard
            title="Applications"
            image="https://images.unsplash.com/photo-1558655146-605d86ed31b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80"
          />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
