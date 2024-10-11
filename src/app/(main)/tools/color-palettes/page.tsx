import ColorsCard from "@/components/tools/colors-card";
import colorsData from "@/data/colorsPalettes.json";

const page = () => {
  return (
   <>
    <h1 className="text-3xl font-bold  text-center font-passion">Gradient Generator</h1>
    <div className="grid grid-cols-2 gap-x-20">
      
      {colorsData.map((color, i) => (
        <ColorsCard image={color.image} href={color.ref} key={i} colors={color.colors} />
      ))}
    </div>
   </>
  );
};

export default page;
