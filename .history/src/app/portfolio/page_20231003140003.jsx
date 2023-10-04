import React from "react";
import WorkCard from "@/components/WorkCard/WorkCard";
const Portfolio = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Our Gallery</h1>
  <div className="flex flex-row gap-5 justify-between mt-12">
  <WorkCard 
  title='Machi'
   image='https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' />
      <WorkCard />
      <WorkCard />
  </div>
    </div>
  );
};

export default Portfolio;