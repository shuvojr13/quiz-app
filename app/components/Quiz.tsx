import React from "react";
import Link from "next/link";
import Image from "next/image";

const Quiz = () => {
  return (
    <div className="border rounded-lg p-2 m-4 flex flex-col items-center bg-blue-50">
      <h1 className="md:text-4xl text-indigo-900 p-2 text-center font-bold mx-6 my-2">
        Welcome to QuizMaster
      </h1>
      
      <p className="md:text-lg text-white bg-indigo-900 rounded-md p-2 m-2 text-center">
        Challenge your knowledge and have fun!
      </p>
      <Link href="/quiz" className="rounded-2xl bg-violet-600 text-white p-4 font-bold text-center">
          Start Quiz
      </Link>
    </div>
  );
};

export default Quiz;
