import { ComponentType } from 'react'

export interface ComponentEntry {
  component: ComponentType
  code: string
}

export type RegistrySchema = Record<string, ComponentEntry>