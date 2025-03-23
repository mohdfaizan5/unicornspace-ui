import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page


// "use client";

// // TODO: this is wrong rendering and should be fixed

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";
// import { Copy } from "lucide-react";
// import React, { useState } from "react";
// import { HexColorInput, HexColorPicker } from "react-colorful";
// // import { CSSGlobalVariables } from 'css-global-variables';


// function GradientGenerator() {
//   // let cssVar = new CSSGlobalVariables();
//   // cssVar.carousel_theme_primary = 'newValue';
//   // cssVar.carousel_theme_primary = 'newValue';
//   // cssVar.carousel_theme_primary = 'newValue';

//   const [color1, setcolor1] = useState("#e66465");
//   const [color2, setcolor2] = useState("#9198e5");
//   const [direction, setdirection] = useState("90");
//   const [copied, setCopied] = useState(false)
//   const { toast } = useToast()
//   const cssCode = `background: linear-gradient(${direction}deg , ${color1}, ${color2})`
//   function gradientStyle() {
//     return {
//       background: `linear-gradient(${direction}deg,${color1},${color2} )`,
//     };
//   }

//   console.log(cssVar.carousel_theme_primary);

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(cssCode).then(() => {
//       setCopied(true)
//       toast({
//         title: "CSS Copied!",
//         description: "The CSS code has been copied to your clipboard.",
//       })
//       setTimeout(() => setCopied(false), 2000)
//     })
//   }
//   return (
//     <section className='flex flex-col gap-5  ' >
//       <div>
//         <h1 className="text-3xl font-bold font-passion">Gradient generator</h1>
//         <p className="max-w-2xl text-md text-muted-foreground mb-8">
//           This tool lets you create a colorful gradient background for your website, blog, or social media profile.
//         </p>

//       </div>
//       <div style={gradientStyle()} className='h-72 md:w-[680px] mx-auto   border ' > </div>

//       <div className=' border flex flex-col md:flex-row gap-5 items-center justify-center px-10 py-5' >
//         <div className='flex gap-x-5 flex-col items-center'>
//           <h2 className="text-xl font-bold mb-3 text-center font-passion">Color 1</h2>
//           <HexColorPicker className='' color={color1} onChange={setcolor1} ></HexColorPicker>
//           <HexColorInput className='border-2 border-black text-center w-20 mt-3 ' color={color1} onChange={setcolor1} ></HexColorInput>
//         </div>
//         <div className='flex  gap-x-5 flex-col items-center '>
//           <h2 className="text-xl font-bold mb-3 text-center font-passion ">Color 2</h2>
//           <HexColorPicker className='' color={color2} onChange={setcolor2} ></HexColorPicker>
//           <HexColorInput className='border-2 border-black text-center w-20 mt-3 ' color={color2} onChange={setcolor2} ></HexColorInput>
//         </div>
//         <div>
//           <input
//             value={direction}
//             onChange={(e) => setdirection(e.target.value)}
//             type="range"
//             min={0}
//             max={100}
//           />
//           <p>Direction: {direction}</p>
//         </div>
//       </div>
//       <div className="w-full">
//         <Card className="w-full max-w-2xl mx-auto">
//           <CardHeader>
//             <CardTitle>CSS Code:</CardTitle>
//           </CardHeader>
//           <CardContent className="flex flex-col space-y-4">
//             <pre className="bg-muted p-4 rounded-md overflow-x-auto">
//               <code className="text-sm">{cssCode}</code>
//             </pre>
//             <Button onClick={copyToClipboard} className="self-end">
//               <Copy className="mr-2 h-4 w-4" />
//               {copied ? "Copied!" : "Copy CSS"}
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//       {/* <p className="text-center">
//         {" "}
//         background: linear-gradient({direction}deg , {color1}, {color2});
//       </p> */}
//     </section>
//   );
// }

// export default GradientGenerator;
