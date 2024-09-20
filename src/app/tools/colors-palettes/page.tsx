import ColorsCard from "@/components/tools/ColorsCard";
import colorsData from "@/data/colorsPalettes.json";

const page = () => {
  return (
   <>
    <h1 className="text-3xl font-bold  text-center font-passion">Gradient Generator</h1>
    <div className="grid md:grid-cols-2 mt-7 md:mt-0 justify-center  gap-20">
      
      {colorsData.map((color, i) => (
        <ColorsCard image={color.image} href={color.ref} key={i} colors={color.colors} />
      ))}
    </div>
   </>
  );
};

export default page;
