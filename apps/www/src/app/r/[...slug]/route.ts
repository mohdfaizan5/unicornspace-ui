import componentRegistry from '@/registry';
import { componentNameToRegistrySlug } from '@/registry/slug';

type ComponentEntry = {
  code?: string;
};

function getBaseUrl(request: Request): string {
  const url = new URL(request.url);
  return `${url.protocol}//${url.host}`;
}

function getRegistryComponents() {
  return Object.entries(componentRegistry as Record<string, ComponentEntry>).map(
    ([name, entry]) => ({
      name,
      slug: componentNameToRegistrySlug(name),
      code:
        entry.code && entry.code.trim().length > 0
          ? entry.code
          : `// ${name} code is currently unavailable in the registry.`,
    })
  );
}

function getComponentItem(name: string, code: string) {
  const slug = componentNameToRegistrySlug(name);

  return {
    $schema: 'https://ui.shadcn.com/schema/registry-item.json',
    name: slug,
    type: 'registry:component',
    title: name,
    description: `${name} component from UnicornSpace UI registry.`,
    files: [
      {
        path: `registry/unicornspace/${slug}.tsx`,
        type: 'registry:component',
        target: `components/unicornspace/${slug}.tsx`,
        content: code,
      },
    ],
  };
}

function getRegistryIndex(request: Request) {
  const baseUrl = getBaseUrl(request);
  const components = getRegistryComponents();

  return {
    $schema: 'https://ui.shadcn.com/schema/registry.json',
    name: 'unicornspace-ui',
    homepage: baseUrl,
    items: [
      {
        name: 'unicornspace-ui',
        type: 'registry:item',
        title: 'UnicornSpace UI Full Bundle',
        description: 'Install all UnicornSpace UI registry components.',
        registryDependencies: components.map(
          (component) => `${baseUrl}/r/${component.slug}.json`
        ),
      },
      ...components.map((component) => ({
        name: component.slug,
        type: 'registry:component',
        title: component.name,
        description: `${component.name} component from UnicornSpace UI registry.`,
        files: [
          {
            path: `registry/unicornspace/${component.slug}.tsx`,
            type: 'registry:component',
          },
        ],
      })),
    ],
  };
}

function getFullBundleItem(request: Request) {
  const baseUrl = getBaseUrl(request);
  const components = getRegistryComponents();

  return {
    $schema: 'https://ui.shadcn.com/schema/registry-item.json',
    name: 'unicornspace-ui',
    type: 'registry:item',
    title: 'UnicornSpace UI Full Bundle',
    description: 'Install all UnicornSpace UI registry components in one command.',
    registryDependencies: components.map(
      (component) => `${baseUrl}/r/${component.slug}.json`
    ),
  };
}

function jsonResponse(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload, null, 2), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  });
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const resolved = await params;
  const firstSegment = resolved.slug?.[0];

  if (!firstSegment) {
    return jsonResponse({ error: 'Missing registry item name.' }, 404);
  }

  const key = firstSegment.replace(/\.json$/i, '');

  if (key === 'registry') {
    return jsonResponse(getRegistryIndex(request));
  }

  if (key === 'unicornspace-ui') {
    return jsonResponse(getFullBundleItem(request));
  }

  const match = getRegistryComponents().find(
    (component) => component.slug === key || component.name.toLowerCase() === key.toLowerCase()
  );

  if (!match) {
    return jsonResponse({ error: `Registry item '${key}' not found.` }, 404);
  }

  return jsonResponse(getComponentItem(match.name, match.code));
}
