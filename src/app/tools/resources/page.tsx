import ResourceCard from "@/components/tools/ResourceCard";
import resourceData from "@/data/resources.json";
const page = () => {
  return (
    <div className="">
      <main className="grid grid-cols-1 md:grid-cols-3">
        {resourceData.map((resource, i) => (
          <ResourceCard
            key={i}
            category={resource.category}
            description={resource.description}
            image={resource.image}
            title={resource.title}
          />
        ))}
      </main>
    </div>
  );
};

export default page;
