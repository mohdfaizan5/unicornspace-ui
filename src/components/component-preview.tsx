"use client"

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeHighlight from "@/components/CodeHighlight";
import componentRegistry from '@/registry';

// Function to get the component source code
const getComponentSourceCode = (componentName: string): string => {
  try {
    // Assuming you have a method to fetch or map component source code
    // You might need to manually map or use a tool to fetch this dynamically
    const sourceCodeMap: { [key: string]: string } = {
      HeroSection: `
import React from 'react';

const HeroSection = () => (
  <div>
    {/* Your component implementation */}
  </div>
);

export default HeroSection;
      `,
      // Add other components here
    };

    return sourceCodeMap[componentName] || 'Source code not available';
  } catch (error) {
    console.error('Error fetching source code:', error);
    return 'Source code not available';
  }
};

const ComponentPreview = ({ name, code, ...props }: { name: string, code: string;[key: string]: any }) => {
  const ComponentToRender = componentRegistry[name];

  if (!ComponentToRender) {
    return <div>Component not found</div>;
  }

  // const code = getComponentSourceCode(name);

  return (
    <Tabs defaultValue="preview" className="">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent className="scale-75 border" value="preview">
        <ComponentToRender {...props} />
      </TabsContent>
      <TabsContent
        value="code"
        className="w-96 md:w-[800px] ml-10 rounded-sm"
      >
        <CodeHighlight code={code} />
      </TabsContent>
    </Tabs>
  );
}

export default ComponentPreview;
