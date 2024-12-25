"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Resource } from "@/types";
import ResourceCard from "@/components/tools/resource-card";

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
      <h1 className="text-3xl font-bold mb-6">Resource Gallery</h1>

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
            {category}
          </Button>
        ))}
      </div>
      <main className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
