import { ComponentType } from 'react';

export interface ComponentEntry {
  component: ComponentType<any>;
  code: string;
}

export interface ComponentRegistry {
  [key: string]: ComponentEntry;
}