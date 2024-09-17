import { useState, useEffect } from 'react'
import { getComponentRegistry, ComponentMeta } from '../lib/registry'

export function useComponentRegistry() {
  const [registry, setRegistry] = useState<Record<string, ComponentMeta>>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadRegistry() {
      const loadedRegistry = await getComponentRegistry()
      setRegistry(loadedRegistry)
      setIsLoading(false)
    }

    loadRegistry()
  }, [])

  return { registry, isLoading }
}