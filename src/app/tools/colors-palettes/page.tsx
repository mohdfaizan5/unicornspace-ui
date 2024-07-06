import ColorsCard from "@/components/tools/ColorsCard";
import colorsData from "@/data/colorsPalettes.json";

const page = () => {
  return (
    <div>
      {colorsData.map((color) => (
        <ColorsCard colors={color.colors} />
      ))}
    </div>
  );
};

export default page;
