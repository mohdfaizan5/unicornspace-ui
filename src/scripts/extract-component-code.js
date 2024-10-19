import * as fs from "fs";
import * as path from "path";

const registryDir = path.join(process.cwd(), "src", "registry", "components");
const outputDir = path.join(process.cwd(), "src", "registry", "component-code");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function escapeCode(code) {
  return code
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r");
}

function toPascalCaseName(str) {
  const string = str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function extractComponentCode(componentPath, relativePath = "") {
  const stats = fs.statSync(componentPath);

  if (stats.isDirectory()) {
    const subDir = path.join(outputDir, relativePath);
    if (!fs.existsSync(subDir)) {
      fs.mkdirSync(subDir, { recursive: true });
    }

    const files = fs.readdirSync(componentPath);
    files.forEach((file) => {
      const fullPath = path.join(componentPath, file);
      extractComponentCode(fullPath, path.join(relativePath, file));
    });
  } else if (path.extname(componentPath) === ".tsx") {
    const code = fs.readFileSync(componentPath, "utf-8");
    const componentName = path.basename(componentPath, ".tsx");
    const PascalCaseName = toPascalCaseName(componentName);
    const outputPath = path.join(
      outputDir,
      relativePath.replace(/\.tsx$/, "Code.tsx")
    );

    const escapedCode = escapeCode(code);
    const exportedCode = `export const ${PascalCaseName}Code = '${escapedCode}';\n`;
    // console.log(exportedCode);

    fs.writeFileSync(outputPath, exportedCode);
    console.log(`Extracted code for ${componentPath}`);
  }
}

function extractAllComponentCodes() {
  extractComponentCode(registryDir);
}

extractAllComponentCodes();
