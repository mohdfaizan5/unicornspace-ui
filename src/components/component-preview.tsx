"use client"

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeHighlight from "@/components/CodeHighlight";
import componentRegistry from '@/registry';



const ComponentPreview = ({ name, ...props }: {
  name: string,
  [key: string]: any
}) => {
  console.log(name)
  console.log(componentRegistry[name])
  const ComponentToRender = componentRegistry[name];


  if (!ComponentToRender) {
    return <div>Component not found</div>;
  }

  // console.log(ComponentToRender)

  return <Tabs defaultValue="preview" className="">
    <TabsList>
      <TabsTrigger value="preview">Preview</TabsTrigger>
      <TabsTrigger value="code">Code</TabsTrigger>
    </TabsList>
    <TabsContent className="scale-75 border" value="preview">
      <ComponentToRender.component {...props} />
    </TabsContent>
    <TabsContent
      value="code"
      className="w-96 md:w-[800px] ml-10 rounded-sm"
    >
      <CodeHighlight code={ComponentToRender.code} />
    </TabsContent>
  </Tabs>
}

export default ComponentPreview