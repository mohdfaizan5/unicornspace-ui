// componentRegistry file is used to register all the components that are used in the project.
import { RegistrySchema } from "@/types/registry";
import { Faq1 } from "./components/FAQ/faq1";
import HeroSection3 from "./components/hero-sections/hero-section3";
import { Pricing2 } from "./components/pricing/pricing2";
import { Faq1Code } from "./component-code/Faq/faq1Code";
import { Pricing2Code } from "./component-code/Pricing/pricing2Code";
import { Cta1 } from "./components/CTA/cta1";
import { Cta1Code } from "./component-code/CTA/cta1Code";
import Features1 from "./components/features/Features1";
import { Features1Code } from "./component-code/Features/Features1Code";
import Features2 from "./components/features/Features2";
import { Features2Code } from "./component-code/Features/Features2Code";
import { Features3 } from "./components/features/features3";
import { Features3Code } from "./component-code/Features/features3Code";
import HeroSection1 from "./components/hero-sections/HeroSection1";
import { HeroSectionCode } from "./component-code/HeroSections/HeroSectionCode";
import HeroSection2 from "./components/hero-sections/HeroSection2";
import { HeroSection2Code } from "./component-code/HeroSections/HeroSection2Code";
import { HeroSection3Code } from "./component-code/HeroSections/hero-section3Code";
import PricingSection1 from "./components/pricing/pricing1";
import { Pricing3 } from "./components/pricing/pricing3";
import { Pricing3Code } from "./component-code/Pricing/pricing3Code";
import { Testimonials1Code } from "./component-code/testimonials/Testimonials1Code";
import { Testimonials2Code } from "./component-code/testimonials/Testimonials2Code";
import { Testimonials3Code } from "./component-code/testimonials/Testimonials3Code";
import Testimonials1 from "./components/testimonials/testimonials1";
import Testimonials2 from "./components/testimonials/testimonials2";
import { Testimonials3 } from "./components/testimonials/testimonials3";
import TextAppearOnScroll from "./components/others/TextAppearOnScroll";
import { PricingSectionCode } from "./component-code/Pricing/PricingSectionCode";
import { TextAppearOnScrollCode } from "./component-code/others/TextAppearOnScrollCode";
import CallOutSection from "./components/others/call-out";

const componentRegistry: RegistrySchema = {
  Faq1: {
    component: Faq1,
    code: Faq1Code,
  },

  CTA1: {
    component: Cta1,
    code: Cta1Code,
  },

  // Pricing

  Pricing1: {
    component: PricingSection1,
    code: PricingSectionCode, // cross check
  },
  Pricing2: {
    component: Pricing2,
    code: Pricing2Code,
  },
  Pricing3: {
    component: Pricing3,
    code: Pricing3Code,
  },

  // Features

  Features1: {
    component: Features1,
    code: Features1Code,
  },
  Features2: {
    component: Features2,
    code: Features2Code,
  },
  Features3: {
    component: Features3,
    code: Features3Code,
  },

  // Hero sections
  HeroSection1: {
    component: HeroSection1,
    code: HeroSectionCode, // may be its HeroSection1Code
  },
  HeroSection2: {
    component: HeroSection2,
    code: HeroSection2Code, // may be its HeroSection1Code
  },

  HeroSection3: {
    component: HeroSection3,
    code: HeroSection3Code,
  },

  // Testimonials

  Testimonials1: {
    component: Testimonials1,
    code: Testimonials1Code,
  },

  Testimonials2: {
    component: Testimonials2,
    code: Testimonials2Code,
  },

  Testimonials3: {
    component: Testimonials3,
    code: Testimonials3Code,
  },

  // Other

  CallOutSection: {
    component: CallOutSection,
    code: `CallOutSection`,
  },
  TextAppearOnScroll: {
    component: TextAppearOnScroll,
    code: TextAppearOnScrollCode,
  },
};

export default componentRegistry;
