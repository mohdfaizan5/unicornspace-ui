import * as fs from 'fs';
import * as path from 'path';

const componentsDir = path.join(process.cwd(), 'src', 'registry', 'components');
const outputFile = path.join(process.cwd(), 'src', 'registry', 'index.ts');

function generateRegistry(dir: string, baseDir: string = dir): void {
  let registry = `import { RegistrySchema } from "./types";\n\n`;
  const components: string[] = [];

  fs.readdirSync(dir, { withFileTypes: true }).forEach((dirent: fs.Dirent) => {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      generateRegistry(fullPath, baseDir);
    } else if (dirent.isFile() && dirent.name.endsWith('.tsx')) {
      const componentName = path.parse(dirent.name).name;
      const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
      const importPath = `./${relativePath}`.replace('.tsx', '');
      
      registry += `import { default as ${componentName} } from "${importPath}";\n`;
      components.push(`  "${componentName}": {
    component: ${componentName},
    code: "/${relativePath}"
  }`);
    }
  });

  registry += `\nconst componentRegistry: RegistrySchema = {\n${components.join(',\n')}\n};\n\n`;
  registry += 'export default componentRegistry;\n';

  fs.writeFileSync(outputFile, registry);
}

generateRegistry(componentsDir);
console.log('Registry generated successfully!');