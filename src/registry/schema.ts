import { ComponentType } from "react";

export interface ComponentEntry {
  component: ComponentType<any>;
  code: (a: string) => Promise<string>;
}

export interface ComponentRegistry {
  [key: string]: ComponentEntry;
}
