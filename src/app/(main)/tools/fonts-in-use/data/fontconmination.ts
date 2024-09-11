import {
  Inter,
  Rye,
  Lora,
  Sacramento,
  Crimson_Text,
  Fira_Sans,
  Arvo,
  Orbitron,
  Poppins,
} from "next/font/google";
import {
  DM_Sans,
  Roboto_Slab,
  Montserrat,
  Playfair_Display,
  Averia_Sans_Libre,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
const dm_Sans = DM_Sans({
  subsets: ["latin"],
});
const roboto = Roboto_Slab({
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
});
const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});
const rye = Rye({
  subsets: ["latin"],
  weight: "400",
});
const lora = Lora({
  subsets: ["latin"],
  weight: "400",
});
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});
const playfair_Display = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});
const firasans = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
});
const arvo = Arvo({
  subsets: ["latin"],
  weight: "400",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const averia = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: "400",
});

export const fontsCombinations = [
  {
    font1: {
      name: "Inter",
      weight: 400,
      font: inter,
    },
    font2: {
      name: "CalSans",
      weight: 700,
      font: dm_Sans,
    },
    example_website: "https://effect.website/docs/introduction",
  },
  // {
  //   font1: {
  //     name: "Circular Std Book",
  //     weight: 400,
  //     font : dm_Sans
  //   },
  //   font2: {
  //     name: "Circular Std Book",
  //     weight: 700,
  //     font: dm_Sans
  //   },
  //   example_website: "https://supabase.com/",
  // },
  {
    font1: {
      name: "Montserrat Bold",
      weight: 400,
      font: montserrat,
    },
    font2: {
      name: " Roboto Slab",
      weight: 700,
      font: roboto,
    },
    example_website: "https://typ.io/s/8dok",
  },
  {
    font1: {
      name: "Crimson Text ",
      weight: 700,
      font: crimson,
    },
    font2: {
      name: " Montserrat",
      weight: 700,
      font: montserrat,
    },
    example_website:
      "https://cdn.logojoy.com/wp-content/uploads/2018/07/18153035/serif-1024x596.png",
  },
  {
    font1: {
      name: "Rye ",
      weight: 700,
      font: rye,
    },
    font2: {
      name: " Lora",
      weight: 700,
      font: lora,
    },
    example_website:
      "https://cdn.logojoy.com/wp-content/uploads/2018/07/18153037/vintage-1024x596.png",
  },
  {
    font1: {
      name: " Sacramento",
      weight: 700,
      font: sacramento,
    },
    font2: {
      name: "Playfair_Display ",
      weight: 700,
      font: playfair_Display,
    },
    example_website:
      "https://cdn.logojoy.com/wp-content/uploads/2018/07/18153031/handwritten-1024x596.png",
  },
  {
    font1: {
      name: " Fira_sans ",
      weight: 700,
      font: firasans,
    },
    font2: {
      name: "Montserrat ",
      weight: 700,
      font: montserrat,
    },
    example_website:
      "https://cdn.logojoy.com/wp-content/uploads/2018/07/18153032/modern-1024x596.png",
  },
  {
    font1: {
      name: " Arvo",
      weight: 700,
      font: arvo,
    },
    font2: {
      name: "Montserrat ",
      weight: 700,
      font: montserrat,
    },
    example_website:
      "https://cdn.logojoy.com/wp-content/uploads/2018/07/18153036/slab-1024x596.png",
  },
  {
    font1: {
      name: " Orbitron",
      weight: 700,
      font: orbitron,
    },
    font2: {
      name: "Roboto Slab",
      weight: 700,
      font: roboto,
    },
    example_website:
      "https://cdn.logojoy.com/wp-content/uploads/2018/07/18153030/futuristic-1024x596.png",
  },
  {
    font1: {
      name: " Poppins",
      weight: 700,
      font: poppins,
    },
    font2: {
      name: "Avenir",
      weight: 700,
      font: averia,
    },
    example_website:
      "https://cdn.logojoy.com/wp-content/uploads/20230726161642/poppins-and-avenir-font-pair.jpg",
  },
];
