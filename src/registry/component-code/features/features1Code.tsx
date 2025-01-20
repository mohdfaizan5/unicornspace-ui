export const Features1Code = 'import React from "react";\r\nimport { Card } from "@/components/ui/card";\r\nimport { BsSpeedometer } from "react-icons/bs";\r\nimport { IoCloudDownloadSharp } from "react-icons/io5";\r\nimport { AiTwotoneSafetyCertificate } from "react-icons/ai";\r\n\r\nconst featuresData = [\r\n  {\r\n    title: "Nextjs 13",\r\n    description: "App dir, Routing, Layouts, Loading UI and API routes.",\r\n    logo: <IoCloudDownloadSharp size={50} />,\r\n  },\r\n  {\r\n    title: "Nextjs 13",\r\n    description: "App dir, Routing, Layouts, Loading UI and API routes.",\r\n    logo: <BsSpeedometer size={50} />,\r\n  },\r\n  {\r\n    title: "Nextjs 13",\r\n    description: "App dir, Routing, Layouts, Loading UI and API routes.",\r\n    logo: <AiTwotoneSafetyCertificate size={50} />,\r\n  },\r\n  {\r\n    title: "Nextjs 13",\r\n    description: "App dir, Routing, Layouts, Loading UI and API routes.",\r\n    logo: <BsSpeedometer size={50} />,\r\n  },\r\n  {\r\n    title: "Nextjs 13",\r\n    description: "App dir, Routing, Layouts, Loading UI and API routes.",\r\n    logo: <BsSpeedometer size={50} />,\r\n  },\r\n  {\r\n    title: "Nextjs 13",\r\n    description: "App dir, Routing, Layouts, Loading UI and API routes.",\r\n    logo: <BsSpeedometer size={50} />,\r\n  },\r\n];\r\n\r\nconst Features1 = () => {\r\n  return (\r\n    <section className="flex items-center flex-col my-16">\r\n      <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">\r\n        Features\r\n      </h2>\r\n      <p className="text-center mt-2 mb-5 leading-normal text-muted-foreground sm:text-lg sm:leading-7">\r\n        Taxonomy also includes a blog and a full-featured documentation site\r\n        built.\r\n      </p>\r\n      <section className="grid grid-cols-1 xl:grid-cols-2 gap-2">\r\n        {featuresData.map((feature,i) => (\r\n          <Card className="p-7 py-8 w-96 md:w-80" key={i}>\r\n            <div className={"text-primary"}>{feature.logo}</div>\r\n            <h3 className="text-xl mt-3 mb-1 font-medium">{feature.title}</h3>\r\n            <p className="text-xs">{feature.description}</p>\r\n          </Card>\r\n        ))}\r\n      </section>\r\n    </section>\r\n  );\r\n};\r\n\r\nexport default Features1;\r\n';
