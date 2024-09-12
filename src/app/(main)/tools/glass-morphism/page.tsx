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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [intensity, setIntensity] = useState<number>(10);
  const [transparency, setTransparency] = useState<number>(1);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("255, 255, 255");

  // Handle the blur intensity based on the slider value
  const handleIntensityChange = (value: number) => {
    const change = document.getElementById("glass");
    if (change) {
      change.style.backdropFilter = `blur(${value}px)`;
    }
  };

  const handleCheck = (value: boolean) => {
    const change = document.getElementById("glass");
    if (change) {
      change.style.border = value ? "1px solid white" : "none";
    }
  };

  const onCheckedChange = (value: boolean) => {
    setChecked(value);
    handleCheck(value);
  };

  const handleColorChange = (e: string) => {
    function hexToRgb(hex: string) {
      // Remove '#' if present
      hex = hex.replace(/^#/, "");

      // Parse the hex string to RGB values
      let r = parseInt(hex.substring(0, 2), 16);
      let g = parseInt(hex.substring(2, 4), 16);
      let b = parseInt(hex.substring(4, 6), 16);

      return `${r}, ${g}, ${b}`;
    }
    setValue(hexToRgb(e));
  };

  return (
    <>
      <div className="bg-[url('/glass.png')] h-[720px] w-[1280px] bg-no-repeat md:grid grid-cols-2 flex flex-col relative ">
        <div className="">
          <Image
            src="/oval.svg"
            alt="oval"
            height={100}
            width={100}
            className="bg-blend-color-burn absolute"
            style={{ left: "10%", top: "20%" }} // Hardcoded position
          />
          <Image
            src="/oval.svg"
            alt="oval"
            height={100}
            width={100}
            className="bg-blend-color-burn absolute"
            style={{ left: "50%", top: "40%" }} // Hardcoded position
          />
          <Image
            src="/oval.svg"
            alt="oval"
            height={100}
            width={100}
            className="bg-blend-color-burn absolute"
            style={{ left: "70%", top: "70%" }} // Hardcoded position
          />
          <div
            className="glassmorphism flex items-center justify-center text-5xl rounded-full border-x-red-50 border-2 absolute"
            style={{ left: "30%", top: "10%", transform: "rotate(-12deg)" }} // Hardcoded position and rotation
          >
            🦄
          </div>
          <div
            className="glassmorphism w-32 h-32 rounded-3xl border-x-red-50 border-2 absolute"
            style={{ left: "60%", top: "50%", transform: "rotate(-12deg)" }} // Hardcoded position and rotation
          />
          <div
            id="glass"
            className="glassmorphism w-[500px] h-72 rounded-3xl border-x-red-50 border-2 absolute"
            style={{
              left: "10%",
              top: "60%",
              background: `rgba(${value}, ${transparency})`,
              transform: "rotate(-12deg)", // Hardcoded position and rotation
            }}
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <Card className="bg-green-300 w-[470px]">
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
              <label htmlFor="terms" className="font-semibold ">
                Color
              </label>
              <Input
                type="color"
                onChange={(e) => handleColorChange(e.target.value)}
              />
              <Checkbox
                id="outline"
                className="h-10 w-10"
                checked={checked}
                onCheckedChange={onCheckedChange}
              />
              <label htmlFor="outline" className="font-semibold ">
                Show Outline
              </label>
            </div>

            <CardContent className=" flex flex-col gap-2">
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
background: rgba(${value}, ${transparency});
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( ${intensity}px );
-webkit-backdrop-filter: blur(  ${intensity}px );
border-radius: 10px;

                  `}
              </SyntaxHighlighter>
              <Button>Copy</Button>
            </CardContent>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
