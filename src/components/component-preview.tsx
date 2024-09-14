"use client"

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeHighlight from "@/components/CodeHighlight";
import componentRegistry from '@/registry';
import ComponentWrapper from './component-wrapper2';
import { ImSpinner } from "react-icons/im";



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

  return <div className='relative my-4 flex flex-col space-y-2 lg:max-w-[120ch] overflow-auto'>
    <Tabs defaultValue="preview" className="">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="relative rounded-md h-[46rem]" >
        <ComponentWrapper >
          <React.Suspense
            fallback={
              <div className="flex items-center text-sm text-muted-foreground">
                <ImSpinner className="mr-2 size-4 animate-spin" />
                Loading...
              </div>
            }
          ><div className='scale-[60%] bg-background'>

              <ComponentToRender.component {...props} />
            </div>
          </React.Suspense>
        </ComponentWrapper>
      </TabsContent>

      <TabsContent
        value="code"
        className="w-96 md:w-[800px] ml-10 rounded-sm "
      >
        <CodeHighlight code={ComponentToRender.code} />
      </TabsContent>
    </Tabs>
  </div>
}

export default ComponentPreview