import fs from "fs";
import path from "path";

const registryDir = path.join(process.cwd(), "src", "registry", "components");
const outputDir = path.join(process.cwd(), "src", "registry", "component-code");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function extractComponentCode(componentName) {
  const componentPath = path.join(registryDir, componentName);
  if (!fs.existsSync(componentPath)) {
    console.error(`Component ${componentName} not found`);
    return;
  }

  const code = fs.readFileSync(componentPath, "utf-8");
  const outputPath = path.join(
    outputDir,
    `${String(componentName).replaceAll(".tsx", "")}.txt`
  );
  fs.writeFileSync(outputPath, code);
  console.log(`Extracted code for ${componentName}`);
}

function extractAllComponentCodes() {
  const components = fs.readdirSync(registryDir);
  components.forEach(extractComponentCode);
}

extractAllComponentCodes();
