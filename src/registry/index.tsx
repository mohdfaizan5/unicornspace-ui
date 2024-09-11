import { Registry } from "./schema";

export const ui: Registry = {
  "animated-counter-text": {
    name: "Animated Counter Text",
    component: () => (import("@/registry/components/AnimatedCounter")),
  },
  "hero-section-video": {
    name: "Hero Section Video",

  },

}