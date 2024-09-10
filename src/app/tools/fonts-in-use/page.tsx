import React from "react";
import { fontsCombinations } from "src/app/tools/fonts-in-use/data/fontconmination";
import Link from "next/link";


const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center font-passion">Fonts in Use</h1>
      <section className="flex gap-3 flex-wrap">
        {fontsCombinations.map((fontCombination, i) => (
          <div key={i}
            className="flex flex-col  rounded-xl border bg-card text-card-foreground shadow transition-colors  p-5 w-[299px]"
          >
            <textarea className={`text-2xl h-12 w-auto  font-bold text-card-foreground resize-none  ${fontCombination.font1.font.className}`}>{fontCombination.font1.name}</textarea>
            <textarea className={`opacity-90 h-12 text-smtext-card-foreground resize-none  ${fontCombination.font1.font.className} ${fontCombination.font2.font.className} `}>{fontCombination.font2.name}</textarea>
            <Link href={fontCombination.example_website} className={`underline `} >Inspiration</Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
