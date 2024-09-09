"use client";
import Image from "next/image";
import "@/styles/glass.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Page() {
  const [intensity, setIntensity] = useState<number>(10);
  const [transparency, setTransparency] = useState<number>(20);

  // Handle the blur intensity based on the slider value
  const handleIntensityChange = (value: number) => {
    const change = document.getElementById("glass");
    if (change) {
      change.style.backdropFilter = `blur(${value}px)`;
    }
  };

  const handleTransparencyChange = (value: number) => {
    const change = document.getElementById("glass");
    if (change) {
      change.style.background = `rgba( 255, 255, 255, ${value} )`;
    }
  };

  return (
    <div className="bg-[url('/glass.png')] h-[720px] w-[1280px] bg-no-repeat md:grid grid-cols-2 flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <div className="absolute">
          <Image
            src={"/oval.svg"}
            alt="oval"
            height={100}
            width={100}
            className="bg-blend-color-burn relative translate-x-80"
          />
          <Image
            src={"/oval.svg"}
            alt="oval"
            height={100}
            width={100}
            className="bg-blend-color-burn -translate-y- -translate-x-40"
          />
          <Image
            src={"/oval.svg"}
            alt="oval"
            height={100}
            width={100}
            className="bg-blend-color-burn relative translate-y-20 translate-x-2"
          />
        </div>
        <div className="glassmorphism flex items-center justify-center text-5xl -rotate-12 w-20 bg-red-200 h-20 rounded-[100%] border-x-red-50 border-2 translate-y-24">
          🦄
        </div>
        <div className="glassmorphism -rotate-12 w-32 h-32 rounded-3xl border-x-red-50 border-2 translate-x-52" />
        <div
          id="glass"
          className="glassmorphism -rotate-12 w-[500px] bg-red-200 h-72 rounded-3xl border-x-red-50 border-2"
        />
      </div>
      <div className="flex justify-center p-10">
        <Card className="bg-red-200 w-[470px]">
          <CardHeader>
            <CardTitle className="text-5xl">Setting</CardTitle>
            <CardDescription>
              Scroll to see the magic of morphism
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <CardTitle>
              Transparency <span>{transparency}</span>
            </CardTitle>
            <Slider
              defaultValue={[20]}
              min={0}
              max={1}
              step={0.01}
              onValueChange={(e) => {
                setTransparency(e[0]);
                handleTransparencyChange(e[0]);
              }}
            />
            <CardTitle>
              Blur value <span>{intensity}</span>
            </CardTitle>
            <Slider
              defaultValue={[10]}
              min={0}
              max={20}
              step={1}
              onValueChange={(e) => {
                setIntensity(e[0]);
                handleIntensityChange(e[0]);
              }}
            />
            <div className="flex justify-center items-center gap-3">
              <Checkbox id="terms" className="h-10 w-10" />
              <label htmlFor="terms" className="font-semibold text-xl">
                Color
              </label>
              <Checkbox id="outline" className="h-10 w-10" />
              <label htmlFor="outline" className="font-semibold text-xl">
                Show Outline
              </label>
            </div>
            <div>
              <CardTitle>CSS</CardTitle>
              <CardContent>
                <SyntaxHighlighter
                  language="css"
                  style={docco}
                  customStyle={{
                    paddingLeft: 10,
                    borderRadius: "10px",
                    backgroundColor: "skyblue",
                  }}
                  wrapLines={true}
                  codeTagProps={{ style: { fontFamily: "inherit" } }}
                >
                  {`
background: rgba( 255, 255, 255, ${intensity} );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( ${transparency}px );
-webkit-backdrop-filter: blur(  ${transparency}px );
border-radius: 10px;

                  `}
                </SyntaxHighlighter>
              </CardContent>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
