import { NextRequest, NextResponse } from "next/server";
import { createCanvas, registerFont, loadImage } from "canvas";
import path from "path";

// Register a font to use in the image
registerFont(
  path.join(
    process.cwd(),
    "public",
    "fonts",
    "FontsFree-Net-Circular-Std-Book.ttf"
  ),
  { family: "Roboto" }
);

export async function GET(request: NextRequest) {
  // Get the text from the query parameter
  const searchParams = request.nextUrl.searchParams;
  const text = searchParams.get("text") || "Hello, World!";

  // Set up the canvas
  const width = 600;
  const height = 200;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Draw background
  ctx.fillStyle = "#fff"; // A nice blue color
  ctx.fillRect(0, 0, width, height);

  // Add some simple graphics
  ctx.beginPath();
  ctx.fillStyle = "#ffffff";
  ctx.arc(width / 2, height / 2, 100, 0, Math.PI * 2);
  ctx.fill();

  // Set up text
  ctx.font = "48px Roboto bold";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Draw text
  ctx.fillText(text, width / 2, height / 2);

  // Convert canvas to buffer
  const buffer = canvas.toBuffer("image/png");

  // Return the image
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Content-Length": buffer.length.toString(),
    },
  });
}
