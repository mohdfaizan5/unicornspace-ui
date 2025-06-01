import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import ComponentPreview from './components/mdx/component-preview';
import * as Twoslash from 'fumadocs-twoslash/ui';
import { Mermaid } from '@/components/mdx/mermaid';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ...TabsComponents,
    Mermaid,
    Accordion,
    Accordions,
    ...Twoslash,

    ComponentPreview: ComponentPreview,

  };
}
