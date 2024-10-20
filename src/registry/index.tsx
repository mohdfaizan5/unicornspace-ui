import { RegistrySchema } from "@/types/registry";

// Hero Sections
import HeroSection1 from "./components/hero-sections/HeroSection1";
import HeroSection2 from "./components/hero-sections/HeroSection2";
import HeroSection3 from "./components/hero-sections/hero-section3";
import HeroSection4 from "./components/hero-sections/hero-section4";
import HeroSection6 from "./components/hero-sections/hero-section6";
import { HeroSectionCode } from "./component-code/HeroSections/HeroSectionCode";
import { HeroSection2Code } from "./component-code/HeroSections/HeroSection2Code";
import { HeroSection3Code } from "./component-code/HeroSections/hero-section3Code";
import { HeroSection4Code } from "./component-code/hero-sections/hero-section4Code";
import { HeroSection6Code } from "./component-code/hero-sections/hero-section6Code";

// Pricing Components
import Pricing2 from "./components/Pricing/pricing2";
import Pricing3 from "./components/Pricing/pricing3";
import Pricing4 from "./components/Pricing/pricing4";
import PricingSection1 from "./components/Pricing/pricing1";
import { Pricing2Code } from "./component-code/Pricing/pricing2Code";
import { Pricing3Code } from "./component-code/Pricing/pricing3Code";
import { Pricing4Code } from "./component-code/Pricing/pricing4Code";
import { PricingSectionCode } from "./component-code/Pricing/PricingSectionCode";

// Features Components
import Features3 from "./components/Features/features3";
import Features4 from "./components/Features/features4";
import Features5 from "./components/Features/features5";
import { Features1Code } from "./component-code/Features/Features1Code";
import { Features2Code } from "./component-code/Features/Features2Code";
import { Features3Code } from "./component-code/Features/features3Code";
import { Features4Code } from "./component-code/Features/features4Code";
import { Features5Code } from "./component-code/Features/features5Code";

// Testimonials and Reviews
import Testimonials1 from "./components/testimonials/testimonials1";
import Testimonials2 from "./components/testimonials/testimonials2";
import Testimonials3 from "./components/testimonials/testimonials3";
import Testimonials5 from "./components/testimonials/testimonials5";
import Testimonial4 from "./components/testimonials/testimonials4";
import CustomerReviews from "./components/testimonials/customer-reviews";
import SocialProof from "./components/Reviews/social-proof";
import { Testimonials1Code } from "./component-code/testimonials/Testimonials1Code";
import { Testimonials2Code } from "./component-code/testimonials/Testimonials2Code";
import { Testimonials3Code } from "./component-code/testimonials/Testimonials3Code";
import { CustomerReviewsCode } from "./component-code/testimonials/customer-reviewsCode";
import { SocialProofCode } from "./component-code/Reviews/social-proofCode";

// Navbar Components
import Navbar1 from "./components/navbars/navbar1";
import Navbar2 from "./components/navbars/navbar2";
import { Navbar1Code } from "./component-code/navbars/navbar1Code";
import { Navbar2Code } from "./component-code/navbars/navbar2Code";

// Footer Components
import BasicFooter from "./components/footer/basic-footer";
import Footer1 from "./components/footer/footer1";
import Footer2 from "./components/footer/footer2";
import Footer3 from "./components/footer/footer3";
import { BasicFooterCode } from "./component-code/footer/basic-footerCode";
import { Footer1Code } from "./component-code/footer/footer1Code";
import { Footer2Code } from "./component-code/footer/footer2Code";
import { Footer3Code } from "./component-code/footer/footer3Code";

// Callouts and Forms
import CallOutSection from "./components/others/call-out";
import TextAppearOnScroll from "./components/others/TextAppearOnScroll";
import NewsLettersForm from "./components/others/news-letter1";
import NewsLettersForm2 from "./components/others/news-letter2";
import Profile from "./components/others/profile";
import { CallOutCode } from "./component-code/others/call-outCode";
import { TextAppearOnScrollCode } from "./component-code/others/TextAppearOnScrollCode";
import { NewsLetter1Code } from "./component-code/others/news-letter1Code";
import { NewsLetter2Code } from "./component-code/others/news-letter2Code";
import { ProfileCode } from "./component-code/others/profileCode";

// CTA Components
import Cta1 from "./components/CTA/cta1";
import Cta2 from "./components/CTA/cta2";
import { Cta1Code } from "./component-code/CTA/cta1Code";
import { Cta2Code } from "./component-code/CTA/cta2Code";

// Ecommerce Components
import ProductImageCarousel from "./components/ecommerce/product-image-carousel";
import ProductSection1 from "./components/ecommerce/product-section1";
import { ProductImageCarouselCode } from "./component-code/ecommerce/product-image-carouselCode";
import { ProductSection1Code } from "./component-code/ecommerce/product-section1Code";

// FAQ Components
import Faq1 from "./components/Faq/faq1";
import Faq2 from "./components/Faq/faq2";
import { Faq1Code } from "./component-code/Faq/faq1Code";
import { Faq2Code } from "./component-code/Faq/faq2Code";

// Dialogs and Cards
import SearchComponent from "./components/dialog/dialog1";
import BioCard from "./components/cards/card2";
// Newsletters
import NewsLetter1 from "./components/news-letters/news-letter1";
import Features1 from "./components/Features/features1";
import Features2 from "./components/Features/features2";

//
const componentRegistry: RegistrySchema = {
  Faq1: {
    component: Faq1,
    code: Faq1Code,
  },
  Faq2: {
    component: Faq2,
    code: Faq2Code,
  },

  CTA1: {
    component: Cta1,
    code: Cta1Code,
  },
  CTA2: {
    component: Cta2,
    code: Cta2Code,
  },

  Navbar1: {
    component: Navbar1,
    code: Navbar1Code,
  },
  Navbar2: {
    component: Navbar2,
    code: Navbar2Code,
  },

  // Ecommerce
  "product-image-carousel": {
    component: ProductImageCarousel,
    code: ProductImageCarouselCode,
  },
  ProductSection1: {
    component: ProductSection1,
    code: ProductSection1Code,
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
  Pricing4: {
    component: Pricing4,
    code: Pricing4Code,
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
  Features4: {
    component: Features4,
    code: Features4Code,
  },
  Features5: {
    component: Features5,
    code: Features5Code,
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

  HeroSection4: {
    component: HeroSection4,
    code: HeroSection4Code,
  },

  HeroSection6: {
    component: HeroSection6,
    code: HeroSection6Code,
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
  Testimonials4: {
    component: Testimonial4,
    code: Testimonials3Code,
  },

  Testimonial5: {
    component: Testimonials5,
    code: Testimonials3Code,
  },
  CustomerReviews: {
    component: CustomerReviews,
    code: CustomerReviewsCode,
  },
  CustomerReviews2: {
    component: SocialProof,
    code: SocialProofCode,
  },
  // CustomerReviews3: {
  //   component: StarRating,
  //   code: StarRatingCode,
  // },

  // Footer
  BasicFooter: {
    component: BasicFooter,
    code: BasicFooterCode,
  },
  Footer1: {
    component: Footer1,
    code: Footer1Code,
  },
  Footer2: {
    component: Footer2,
    code: Footer2Code,
  },
  Footer3: {
    component: Footer3,
    code: Footer3Code,
  },

  // Other

  CallOutSection: {
    component: CallOutSection,
    code: CallOutCode,
  },
  TextAppearOnScroll: {
    component: TextAppearOnScroll,
    code: TextAppearOnScrollCode,
  },

  NewsLettersForm: {
    component: NewsLettersForm,
    code: NewsLetter1Code,
  },
  NewsLettersForm2: {
    component: NewsLettersForm2,
    code: NewsLetter2Code,
  },
  Profile: {
    component: Profile,
    code: ProfileCode,
  },
  // dialog section

  SearchComponent: {
    component: SearchComponent,
    code: "WIP",
  },

  // Cards

  Card1: {
    component: BioCard,
    code: "WIP",
  },

  // News letter

  NewsLetter1: {
    component: NewsLetter1,
    code: "WIP",
  },
};

// Reviews
// SocialProof:{
//   component: SocialProof,
//   code: SocialProofCode,
// }
export default componentRegistry;
