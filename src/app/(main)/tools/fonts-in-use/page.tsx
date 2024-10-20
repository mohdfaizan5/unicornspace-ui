import React from "react";
import { fontsCombinations } from "./data/fontconmination";
import Link from "next/link";


const page = () => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold mb-8 text-center font-passion">Fonts in Use</h1> */}
      <h1 className="text-3xl font-bold font-passion ">Fonts in Use</h1>
      <p className="max-w-2xl text-md text-muted-foreground mb-8">
      Type in your text to see how it looks with various fonts. Get inspired by links to websites that feature these fonts in real-world use.
      </p>
      <section className="flex gap-3 flex-wrap">
        {fontsCombinations.map((fontCombination, i) => (
          <div key={i}
            className="flex flex-col  rounded-xl border bg-card text-card-foreground shadow transition-colors  p-5 w-[299px]"
          >
            <textarea className={`text-2xl h-12 w-auto  font-bold text-card-foreground resize-none  ${fontCombination.font1.font.className}`}>{fontCombination.font1.name}</textarea>
            <textarea className={`opacity-90 h-12 text-smtext-card-foreground resize-none  ${fontCombination.font1.font.className} ${fontCombination.font2.font.className} `}>{fontCombination.font2.name}</textarea>
            <Link href={fontCombination.example_website} className={`underline `} target="_blank" >Inspiration</Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
