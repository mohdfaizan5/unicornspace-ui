"use client";

import React from "react";
import componentRegistry from "@/registry";
import ComponentWrapper from "./component-wrapper";
import { ImSpinner } from "react-icons/im";
import { Check, Copy } from "@phosphor-icons/react";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { componentNameToRegistrySlug } from "@/registry/slug";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import {
  Tabs,
  TabsContent as TabsPanel,
  TabsList,
  TabsTrigger as TabsTab,
} from "@/components/ui/tabs";

const REGISTRY_BASE_URL = "https://unicornspace-ui.vercel.app";

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

  const itemSlug = componentNameToRegistrySlug(name);
  const componentRegistryUrl = `${REGISTRY_BASE_URL}/r/${itemSlug}.json`;

  const installCommands = {
    bun: `bunx --bun shadcn@latest add ${componentRegistryUrl}`,
    npm: `npx shadcn@latest add ${componentRegistryUrl}`,
    pnpm: `pnpm dlx shadcn@latest add ${componentRegistryUrl}`,
    yarn: `yarn dlx shadcn@latest add ${componentRegistryUrl}`,
  } as const;

  const packageManagers: Array<keyof typeof installCommands> = ["bun", "npm", "pnpm", "yarn"];
  const [activePackageManager, setActivePackageManager] =
    React.useState<keyof typeof installCommands>("npm");
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const activeInstallCommand = installCommands[activePackageManager];

  return (
    <div className="relative z-10 my-4 flex flex-col overflow-auto">
      <Tabs defaultValue="preview">
        <TabsList className="ml-2 h-auto justify-start flex gap-2 rounded-none border-b border-border bg-transparent px-0 py-1 text-foreground">
          <TabsTab
            value="preview"
            className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
          >
            Preview
          </TabsTab>
          <TabsTab
            value="code"
            className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
          >
            Code
          </TabsTab>
        </TabsList>
        <TabsPanel value="preview">
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
        </TabsPanel>
        <TabsPanel value="code">
          <CodeBlock keepBackground lang="tsx">
            <Pre className="max-h-96 overflow-y-auto">{componentCode}</Pre>
          </CodeBlock>
        </TabsPanel>
      </Tabs>

      <h3 className="mt-6 text-lg font-semibold tracking-tight">Installation</h3>
      <div className="mt-3 overflow-hidden rounded-2xl border border-border/70 bg-card/40">
        <Tabs
          className="gap-0"
          value={activePackageManager}
          onValueChange={(value) =>
            setActivePackageManager(value as keyof typeof installCommands)
          }
        >
          <div className="flex items-center justify-between border-b border-border/70 px-3 py-2">
            <TabsList className="h-auto gap-1 rounded-lg bg-muted/50 p-1">
              {packageManagers.map((packageManager) => (
                <TabsTab
                  key={packageManager}
                  value={packageManager}
                  className="h-8 min-w-14 flex-none rounded-md px-3 text-sm capitalize data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  {packageManager}
                </TabsTab>
              ))}
            </TabsList>

            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={() => copyToClipboard(activeInstallCommand)}
              aria-label={`Copy ${activePackageManager} install command`}
              className="size-8 rounded-md text-muted-foreground hover:text-foreground"
            >
              {isCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
            </Button>
          </div>

          {packageManagers.map((packageManager) => (
            <TabsPanel
              key={packageManager}
              value={packageManager}
              className="overflow-x-auto px-4 py-4"
            >
              <pre className="font-mono text-sm leading-relaxed text-foreground">
                {installCommands[packageManager]}
              </pre>
            </TabsPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ComponentPreview;
