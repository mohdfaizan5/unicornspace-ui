import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import ComponentPreview from './components/mdx/component-preview';
import * as Twoslash from 'fumadocs-twoslash/ui';
import { Mermaid } from '@/components/mdx/mermaid';
import { TooltipMdx } from '@/components/mdx/tooltip';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Step, Steps } from 'fumadocs-ui/components/steps';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ...TabsComponents,
    Mermaid,
    Accordion,
    Accordions, Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Step,
    Steps,
    TooltipMdx,
    ComponentPreview: ComponentPreview,

  };
}
