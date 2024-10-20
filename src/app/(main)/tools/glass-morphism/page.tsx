"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CodeHighlight from "@/components/code-highlight";

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

  const [copyCode, setCopyCode] = useState<{ css: string; tailwind: string }>({
    css: `
background: rgba(${value}, ${transparency});
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( ${intensity}px );
-webkit-backdrop-filter: blur(  ${intensity}px );
border-radius: 10px;`,
    tailwind: `h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100`,
  });

  return (
    <>
    <h1 className="text-3xl font-bold font-passion ">Glass Morphism</h1>
      <p className="max-w-2xl text-md text-muted-foreground mb-8">
      Copy and paste this Glassmorphism CSS snippet into your frontend project for an amazing CSS glass effect.
      </p>
    <main className=" flex flex-col justify-evenly md:flex-row">
      
      <section className="relative bg-gradient-to-tr from-indigo-600  to-purple-500 bg-no-repeat w-[340px] h-[480px] overflow-hidden">
        <div
          className="flex items-center justify-center text-5xl rounded-lg  border-red-50 border-2 absolute"
          style={{ transform: "rotate(-12deg)", left: "70%", top: "70%" }} // Hardcoded position and rotation
        >
          🦄
        </div>
        <div
          className=" w-32 h-32 rounded-3xl border-red-50 border-2 absolute top-5 left-5"
          style={{ transform: "rotate(-12deg)" }} // Hardcoded position and rotation
        />
        <div
          id="glass"
          className=" w-[70%] h-96 rounded-3xl border-red-50 border-2 absolute top-10 left-10"
          style={{
            background: `rgba(${value}, ${transparency})`,
          }}
        />
      </section>
      <Card className="md:max-w-96">
        <CardHeader>
          <CardTitle className="text-2xl">Setting</CardTitle>
          <CardDescription className="">
            Scroll to see the magic of morphism
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-start gap-4">
          <p>
            Transparency <span>{transparency}</span>
          </p>
          <Slider
            defaultValue={[20]}
            min={0}
            max={1}
            step={0.01}
            className="scale-75"
            onValueChange={(e) => {
              setTransparency(e[0]);
            }}
          />
          <p>
            Blur value <span>{intensity}</span>
          </p>
          <Slider
            defaultValue={[10]}
            min={0}
            max={20}
            step={1}
            className="scale-75"
            onValueChange={(e) => {
              setIntensity(e[0]);
              handleIntensityChange(e[0]);
            }}
          />
          <div className="flex items-center gap-2">
            <Label htmlFor="terms" className="font-semibold ">
              Color
            </Label>
            <Input
              className="w-24"
              type="color"
              onChange={(e) => handleColorChange(e.target.value)}
            />
            <Label
              htmlFor="outline"
              className="text-sm flex items-center gap-1"
            >
              <Checkbox
                id="outline"
                className=""
                checked={checked}
                onCheckedChange={onCheckedChange}
              />
              Show Outline
            </Label>
          </div>

          <CardFooter className="flex flex-col w-full max-h-72  p-0 relative">
            <CodeHighlight className="w-full" code={copyCode.css} />
            <CodeHighlight className="w-full mt-4" code={copyCode.tailwind} />
          </CardFooter>
        </CardContent>
      </Card>
    </main>
    </>
  );
}

// const CodeHighlighter = (code: string) => {
//   return (
//     <pre className=" pl-3 mt-6 overflow-x-auto w-full rounded-lg border bg-black text-white pb-4">
//       {code}
//       <Button
//         onClick={() => {

//         }}
//         className="absolute top-10 right-2 "
//         size={"icon"}
//       >
//         <Clipboard size={14} />
//       </Button>
//     </pre>
//   );
// };
