"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
type ColorsCardType = {
  title?: string;
  description?: string;
  image: string;
  colors: string[];
  href:string
};

function ColorsCard(props: ColorsCardType) {
  const handleClick =()=>{
    navigator.clipboard.writeText(`${colors.map((color)=>color)}`)
  }
  const { title, description, colors } = props;
  return (
    <Card className="w-80 h-[400px] md:mt-[50px] md:shadow-md rounded-none ">
      <Link href={props.href}><Image  className="mb-2" src={props.image} alt="Website" height={400} width={400} ></Image></Link>
      <CardHeader className="p-0 flex">
        <div className="flex">
          {colors.map((color, i) => {
            // const finalColor = `bg-[${color}]`.toLowerCase();
            // console.log(finalColor);
            return (
              <div style={{backgroundColor:`${color}`}} key={i} className={`w-1/4 h-20 border`}></div>
            );
          })}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-1 items-start">
        <h2 className="text-[16px] font-bold font-grotesk leading-6 mt-2 text-center">
          {title}
        </h2>
        <p>{description}</p>
        <div className="w-full flex flex-col gap-3 items-center justify-between">
          <Button onClick={handleClick} className="w-full" variant={"default"}>
            Copy
          </Button>
          
        </div>
        <div>
          
        </div>
      </CardContent>
    </Card>
  );
}

export default ColorsCard;
