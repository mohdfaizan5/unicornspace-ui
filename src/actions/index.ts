"use server";

import fs from "fs/promises";
import path from "path";

export async function readFileContent(filePath: string): Promise<string> {
  const fullPath = path.join(
    process.cwd(),
    "src",
    "registry",
    "components",
    "Faq.tsx"
    // filePath
  );
  console.log("fullPath", fullPath);
  try {
    return await fs.readFile(fullPath, "utf-8");
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return "";
  }
}
