"use client";

import React from "react";
import componentRegistry from "@/registry";
import ComponentWrapper from "./component-wrapper";
import { ImSpinner } from "react-icons/im";
import { Tabs } from "fumadocs-ui/components/tabs";
import { TabsContent, TabsList, TabsTrigger } from "fumadocs-ui/components/ui/tabs";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { componentNameToRegistrySlug } from "@/registry/slug";

const ComponentPreview = ({
  name,
  className,
  height,
  scale,
  width,
  ...props
}: {
  name: string;
  className?: string;
  height?: string;
  scale?: number;
  width?: string;
  [key: string]: any;
}) => {
  const componentEntry = componentRegistry[name];

  if (!componentEntry) {
    return <div>Component not found</div>;
  }

  const ComponentToRender = componentEntry.component;
  const componentCode =
    componentEntry.code && componentEntry.code.trim().length > 0
      ? componentEntry.code
      : "// Code preview unavailable for this component.";

  const [origin, setOrigin] = React.useState("https://your-domain.com");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const itemSlug = componentNameToRegistrySlug(name);
  const componentRegistryUrl = `${origin}/r/${itemSlug}.json`;
  const fullRegistryUrl = `${origin}/r/unicornspace-ui.json`;

  const installCommands = {
    pnpm: {
      component: `pnpm dlx shadcn@latest add ${componentRegistryUrl}`,
      full: `pnpm dlx shadcn@latest add ${fullRegistryUrl}`,
    },
    npm: {
      component: `npx shadcn@latest add ${componentRegistryUrl}`,
      full: `npx shadcn@latest add ${fullRegistryUrl}`,
    },
    yarn: {
      component: `yarn dlx shadcn@latest add ${componentRegistryUrl}`,
      full: `yarn dlx shadcn@latest add ${fullRegistryUrl}`,
    },
    bun: {
      component: `bunx --bun shadcn@latest add ${componentRegistryUrl}`,
      full: `bunx --bun shadcn@latest add ${fullRegistryUrl}`,
    },
  };

  return (
    <div className="relative z-10 my-4 flex flex-col overflow-auto">
      <Tabs defaultValue="preview">
        <TabsList className="ml-2 h-auto justify-start gap-2 rounded-none border-b border-border bg-transparent px-0 py-1 text-foreground">
          <TabsTrigger
            value="preview"
            className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
          >
            Code
          </TabsTrigger>
          <TabsTrigger
            value="install"
            className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
          >
            Install
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <ComponentWrapper className={className} height={height} scale={scale} width={width}>
            <React.Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <ImSpinner className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              <div className=" bg-background/30">
                <ComponentToRender {...props} />
              </div>
            </React.Suspense>
          </ComponentWrapper>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock keepBackground lang="tsx">
            <Pre className="max-h-96 overflow-y-auto">{componentCode}</Pre>
          </CodeBlock>
        </TabsContent>
        <TabsContent value="install" className="space-y-4 pt-2">
          <Tabs defaultValue="pnpm">
            <TabsList className="h-auto justify-start gap-2 rounded-none border-b border-border bg-transparent px-0 py-1 text-foreground">
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
              <TabsTrigger value="bun">bun</TabsTrigger>
            </TabsList>

            <TabsContent value="pnpm" className="space-y-3">
              <CodeBlock keepBackground lang="bash">
                <Pre className="max-h-96 overflow-y-auto">{`# Install this component\n${installCommands.pnpm.component}\n\n# Install the full UnicornSpace registry\n${installCommands.pnpm.full}`}</Pre>
              </CodeBlock>
            </TabsContent>

            <TabsContent value="npm" className="space-y-3">
              <CodeBlock keepBackground lang="bash">
                <Pre className="max-h-96 overflow-y-auto">{`# Install this component\n${installCommands.npm.component}\n\n# Install the full UnicornSpace registry\n${installCommands.npm.full}`}</Pre>
              </CodeBlock>
            </TabsContent>

            <TabsContent value="yarn" className="space-y-3">
              <CodeBlock keepBackground lang="bash">
                <Pre className="max-h-96 overflow-y-auto">{`# Install this component\n${installCommands.yarn.component}\n\n# Install the full UnicornSpace registry\n${installCommands.yarn.full}`}</Pre>
              </CodeBlock>
            </TabsContent>

            <TabsContent value="bun" className="space-y-3">
              <CodeBlock keepBackground lang="bash">
                <Pre className="max-h-96 overflow-y-auto">{`# Install this component\n${installCommands.bun.component}\n\n# Install the full UnicornSpace registry\n${installCommands.bun.full}`}</Pre>
              </CodeBlock>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComponentPreview;
