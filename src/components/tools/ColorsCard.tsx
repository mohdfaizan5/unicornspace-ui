"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
type ColorsCardType = {
  title?: string;
  description?: string;
  image?: string;
  colors: string[];
};

function ColorsCard(props: ColorsCardType) {
  const { title, description, colors } = props;
  return (
    <Card className="w-96 h-72 md:mt-[50px] md:shadow-md rounded-none">
      <CardHeader className="p-0 flex">
        <div className="flex">
          {colors.map((color, i) => {
            const finalColor = `bg-[${color}]`.toLowerCase();
            console.log(finalColor);
            return (
              <div key={i} className={`w-1/4 h-20 ${finalColor} border`}></div>
            );
          })}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-1 items-start">
        <h2 className="text-[16px] font-bold font-grotesk leading-6 mt-2 text-center">
          {title}
        </h2>
        <p>{description}</p>
        <div className="w-full flex items-center justify-between">
          <Button className="w-full" variant={"default"}>
            Copy
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ColorsCard;
