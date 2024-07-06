import ColorsCard from "@/components/tools/ColorsCard";
import colorsData from "@/data/colorsPalettes.json";

const page = () => {
  return (
    <div>
      {colorsData.map((color, i) => (
        <ColorsCard key={i} colors={color.colors} />
      ))}
    </div>
  );
};

export default page;
