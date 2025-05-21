type changelogType = {
  title: string,
  description?: string,
  features: {
    title: string,
    items: {
      tool_name: string,
      doneby: string
    }[]
  }[],
}




export const changelog: changelogType = {
  title: "Sept 2024 - V1",
  description:"",
  features: [
    {
      title: "Tools",
      items: [
        {
          tool_name: "Glass Morphism generator",
          doneby: "Akshy"
        },
        {
          tool_name: "Readme Generator",
          doneby: "Akshy"
        },
        {
          tool_name: "Shadcn Theme generator",
          doneby: ""
        },
        {
          tool_name: "Fonts in Use",
          doneby: "Likitha"
        },
        {
          tool_name: "Color palettes",
          doneby: "Likitha"
        },
        {
          tool_name: "HEX to RGB to RGBA to HLS",
          doneby: "Tahir"
        },
        {
          tool_name: "magicpattern.design/tools/gradient-generator",
          doneby: "Likitha"
        },
      ]
    },
    {
      title: "Components",
      items: [
        {
          tool_name: "Tailwind templates",
          doneby: ""
        },
        {
          tool_name: "Ecommerce application",
          doneby: ""
        },
        {
          tool_name: "Zulkifl Product",
          doneby: ""
        }
      ]
    },
    {
      title: "Guides",
      items: [
        {
          tool_name: "NextAuth",
          doneby: "Faizan"
        },
        {
          tool_name: "Razorpay",
          doneby: "Faizan"
        },
        {
          tool_name: "Framer motion basics",
          doneby: "Akshy"
        },
        {
          tool_name: "Prisma Basics",
          doneby: "Tahir"
        },
        {
          tool_name: "Upload Thing",
          doneby: "Tahir"
        },
        {
          tool_name: "Zustand",
          doneby: "Tahir"
        },
      ]
    }
  ]


}