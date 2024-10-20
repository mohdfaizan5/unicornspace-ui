import ColorsCard from "@/components/tools/colors-card";
import colorsData from "@/data/colorsPalettes.json";

const page = () => {
  return (
   <>
    <h1 className="text-3xl font-bold font-passion ">Color Palettes</h1>
      <p className="max-w-2xl text-md text-muted-foreground mb-8">
      Discover the newest hand-picked palettes for your websites. Get inspiration for your design and art projects. 
      </p>
    <div className="grid md:grid-cols-2 mt-7 md:mt-0 justify-center  gap-20">
      
      {colorsData.map((color, i) => (
        <ColorsCard image={color.image} href={color.ref} key={i} colors={color.colors} />
      ))}
    </div>
   </>
  );
};

export default page;
