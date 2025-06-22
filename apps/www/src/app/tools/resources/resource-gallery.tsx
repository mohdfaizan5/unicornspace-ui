"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import ResourceCard from "@/components/resource-card";
import { SlScreenDesktop } from "react-icons/sl";
import { AiOutlineFontSize } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { FaIcons } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { Resource } from "@/lib/types";

export default function ResourceGallery({ data }: { data: Resource[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    return Array.from(new Set(data.map((resource) => resource.category)));
  }, []);

  const filteredResources = useMemo(() => {
    if (!selectedCategory) return data;
    return data.filter((resource) => resource.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold ">Resource Gallery </h1>
        <p className="text-gray-500">
          {data.length}+ resources found.{" "}
        </p>
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-1 mb-6">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => setSelectedCategory(null)}
          size={"sm"}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            size={"sm"}
          >
            <span className="mr-1">
              {category == "UI" ? <SlScreenDesktop /> : category == "Typography" ? <AiOutlineFontSize /> : category == "assets" ? <AiOutlineFontSize /> : category == "icons" ? <FaIcons /> : category == "tools" ? <BsTools /> : category == "inspiration" ? <FcIdea /> : category == "resources" ? <GrResources /> : ""}
            </span>
            {category}
            <Badge variant={selectedCategory === category ? "default" : "outline"} className="px-1.5 ml-1">{data.filter((r) => r.category === category).length}</Badge>
          </Button>
        ))}
      </div>
      <main className="grid grid-cols-1 gap-2 max-w-[61rem]  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-4 ">
        {filteredResources.map((resource, i) => (
          <ResourceCard
            key={i}
            category={resource.category}
            description={resource.description}
            title={resource.title}
            link={resource.link}
            isFavorite={resource.isFavorite}
          />
        ))}
      </main>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {resource.title}
                {resource.isFavorite && <Star className="text-yellow-400" />}
              </CardTitle>
              <CardDescription>{resource.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{resource.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div> */}
    </div>
  );
}
