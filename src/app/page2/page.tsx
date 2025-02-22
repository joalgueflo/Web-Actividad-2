'use client'

import Image from "next/image";
import { useState } from "react";
import Rectangle from "../components/Rectangle";

export default function page2() {
    const [color, setColor] = useState("red");

    const handleClick = (newColor: string) => {
        setColor(newColor);
        console.log("Button Clicked, color changed to", newColor);
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
                <Rectangle color={color} />
                <div className="flex justify-center items-center sm:items-center gap-8">
                    <button onClick={() => handleClick("blue")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mt-4 text-lg">
                        Click me
                    </button>

                    <button onClick={() => handleClick("green")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded mt-4 text-lg">
                        Click me
                    </button>
                </div>

                <div className="flex justify-center items-center sm:items-center gap-8">
                    <button onClick={() => handleClick("yellow")} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded mt-4 text-lg">
                        Click me
                    </button>

                    <button onClick={() => handleClick("purple")} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded mt-4 text-lg">
                        Click me
                    </button>
                </div>
            </main>
        </div>
    );
}
