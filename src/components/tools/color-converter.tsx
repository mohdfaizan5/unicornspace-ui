"use client";

import { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CopyButton from "../copy-button";
import { hexToRgb, hslToRgb, rgbToHex, rgbToHsl } from "@/lib/utils";
// import { useToast } from "@/components/ui/use-toast"

export default function ColorConverter() {
  const [color, setColor] = useState("#afed02");
  const [rgb, setRgb] = useState({ r: 175, g: 237, b: 2 });
  const [hsl, setHsl] = useState({ h: 76, s: 99, l: 47 });
  // const { toast } = useToast()

  useEffect(() => {
    updateColorValues(color);
  }, [color]);

  const updateColorValues = (hexColor: string) => {
    const rgbColor = hexToRgb(hexColor);
    const hslColor = rgbToHsl(rgbColor.r, rgbColor.g, rgbColor.b);
    setRgb(rgbColor);
    setHsl(hslColor);
  };

  const parseColorInput = (input: string, type: "hex" | "rgb" | "hsl") => {
    input = input.toLowerCase().replace(/[^0-9a-f,.%]/g, "");

    if (type === "hex") {
      if (!input.startsWith("#")) input = "#" + input;
      if (input.length === 4)
        input =
          "#" + input[1] + input[1] + input[2] + input[2] + input[3] + input[3];
      if (/^#[0-9A-Fa-f]{6}$/.test(input)) {
        setColor(input);
      }
    } else if (type === "rgb") {
      const values = input.split(",").map((v) => parseInt(v.trim()));
      if (values.length === 3 && values.every((v) => v >= 0 && v <= 255)) {
        const newColor = rgbToHex(values[0], values[1], values[2]);
        setColor(newColor);
      }
    } else if (type === "hsl") {
      const values = input.split(/,|\s/).map((v) => parseFloat(v.trim()));
      if (
        values.length === 3 &&
        values[0] >= 0 &&
        values[0] <= 360 &&
        values[1] >= 0 &&
        values[1] <= 100 &&
        values[2] >= 0 &&
        values[2] <= 100
      ) {
        const rgbColor = hslToRgb(values[0], values[1], values[2]);
        const newColor = rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b);
        setColor(newColor);
      }
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Colour picker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex h-48">
          <div className="w-1/2" style={{ backgroundColor: color }} />
          <div className="w-1/2">
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="hex">HEX</Label>
            <div className="flex">
              <Input
                id="hex"
                value={color}
                onChange={(e) => parseColorInput(e.target.value, "hex")}
              />
              <CopyButton className="ml-2" text={color} />
            </div>
          </div>
          <div>
            <Label htmlFor="rgb">RGB</Label>
            <div className="flex">
              <Input
                id="rgb"
                value={`${rgb.r}, ${rgb.g}, ${rgb.b}`}
                onChange={(e) => parseColorInput(e.target.value, "rgb")}
              />
              <CopyButton
                className="ml-2"
                text={`${rgb.r}, ${rgb.g}, ${rgb.b}`}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="hsl">HSL</Label>
            <div className="flex">
              <Input
                id="hsl"
                value={`${hsl.h}, ${hsl.s}%, ${hsl.l}%`}
                onChange={(e) => parseColorInput(e.target.value, "hsl")}
              />
              <CopyButton
                className="ml-2"
                text={`${hsl.h}, ${hsl.s}%, ${hsl.l}%`}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
