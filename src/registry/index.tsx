// componentRegistry file is used to register all the components that are used in the project.
import HeroSection from "./components/HeroSections/HeroSection";

interface ComponentRegistry {
  [key: string]: React.ComponentType<any>;
}


const componentRegistry: ComponentRegistry = {
  HeroSection,
}


export default componentRegistry;
