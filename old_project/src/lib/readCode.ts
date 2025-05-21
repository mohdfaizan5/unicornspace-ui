const fs = require("fs").promises;
import path from "path";

export async function readFileContent(componentName: string): Promise<string> {
  // console.log("path 🔥🔥🔥🔥");

  const fullPath = path.join(
    process.cwd(),
    "src",
    "registry",
    "components",
    componentName.endsWith(".tsx") ? componentName : `${componentName}.tsx`
  );
  try {
    return await fs.readFile(fullPath, "utf-8");
  } catch (error) {
    console.error(`Error reading file ${componentName}:`, error);
    return "";
  }
}
