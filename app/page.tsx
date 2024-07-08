"use client";
import React from "react";
import Nav from "./components/nav"; 
import Footer from "./components/Footer"; 
import Quiz from "./components/Quiz"; 
import Instruction from "./components/Instruction"; 
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav/>
      <div className="flex-1 overflow-y-auto">
        <Quiz />
        <div className="flex flex-col items-center">
          <Image
            src="/img.jpeg" 
            alt="Images"
            width="400"
            height="500"
            className="rounded-md h-40"
          />
        </div>
        <Instruction/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
