import React from "react";

const fontsCombinations = [
  {
    font1: {
      name: "Inter",
      weight: 400,
    },
    font2: {
      name: "CalSans",
      weight: 700,
    },
    example_website: "https://effect.website/docs/introduction",
  },
  {
    font1: {
      name: "Circular Std Book",
      weight: 400,
    },
    font2: {
      name: "Circular Std Book",
      weight: 700,
    },
    example_website: "https://supabase.com/",
  },
];

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center font-passion">Fonts in Use</h1>
      <section className="flex gap-3 flex-wrap">
        {fontsCombinations.map((fontCombination, i) => (
          <a key={i}
            href={fontCombination.example_website}
            className="flex flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10 w-96"
          >
            <p className="text-lg font-bold">{fontCombination.font1.name}</p>
            <p className="opacity-90 text-sm">{fontCombination.font2.name}</p>
          </a>
        ))}
      </section>
    </div>
  );
};

export default page;
