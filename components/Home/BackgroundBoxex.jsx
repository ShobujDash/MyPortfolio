"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import MyPic from "@/public/asstes/MyPic.jpg"
import MyPic from "@/public/asstes/mypicnew.jpg"
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Button } from "../ui/button";

const words = `🌟 Presenting the Most Interesting and Programming Enthusiastic Character: Shobuj Das 🌟`;


export function BackgroundBoxes({ children }) {
  
  return (
    <div className="h-[90vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <Boxes />
      <div className="hidden sm:flex sm:flex-row justify-center items-center">
        <div className="w-1/2">
          <TextGenerateEffect words={words} />
          <p className="text-white mt-3 relative z-20">
            A young mind who loves coding and builds amazing things — that's
            Shobuj Das!
          </p>
          <div className="mt-7 flex gap-4 relative z-20">
            <Button className="bg-green-400">Expole More </Button>
            <Button className="bg-yellow-400">Show Here</Button>
          </div>
        </div>
        <div className="w-[300px] h-[400px] self-center relative z-20">
          <Image
            src={MyPic}
            alt="My pic"
            placeholder="blur"
            className="border-4 border-sky-500 rounded-lg "
          />
        </div>
      </div>
      <div className="flex flex-col sm:hidden justify-center items-center gap-2">
        <div className="w-[200px] h-[300px] self-center">
          <Image
            src={MyPic}
            alt="My pic"
            placeholder="blur"
            className="border-4 border-sky-500 rounded-lg z-10"
          />
        </div>
        <div className="text-center px-4 flex items-center justify-center flex-col">
          <TextGenerateEffect words={words} />
          <p className="text-white mt-3">
            A young mind who loves coding and builds amazing things — that's
            Shobuj Das!
          </p>
          <div className="mt-7 flex gap-4 ">
            <Button className="bg-green-400">Expole More </Button>
            <Button className="bg-yellow-400">Show Here</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
