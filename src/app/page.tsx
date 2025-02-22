'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {


  const [count, setCount]  = useState(0);
  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    setCount(count + 1);
    console.log("Button Clicked");
  }

  const handleSubmitLess = (e: React.FormEvent) =>{
    e.preventDefault();
    setCount(count - 1);
    console.log("Button Clicked");
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-4xl font-bold text-center">
          {count}
        </h1>
        <div className="flex gap-4">
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add 1
          </button>
          <button onClick={handleSubmitLess} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Rest -1
          </button>
        </div>
      </main>
    </div>
  );
}
