import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeHighlight from "@/components/CodeHighlight";
import { ui } from '@/registry';

const ComponentPreview = ({ name }: { name: string }) => {


  const Preview = () => {
    const Component = ui[name]?.component;

    if (!Component) {
      console.error(`Component with name "${name}" not found in registry.`);
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }

  return <Tabs defaultValue="preview" className="">
    <TabsList>
      <TabsTrigger value="preview">Preview</TabsTrigger>
      <TabsTrigger value="code">Code</TabsTrigger>
    </TabsList>
    <TabsContent className="scale-75 border" value="preview">

    </TabsContent>
    <TabsContent
      value="code"
      className="w-96 md:w-[800px] ml-10 rounded-sm"
    >
      <CodeHighlight code={name} />
    </TabsContent>
  </Tabs>
}

export default ComponentPreview