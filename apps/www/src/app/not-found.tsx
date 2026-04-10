import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60svh] w-full max-w-3xl flex-col items-start justify-center px-4 py-12 md:px-6">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page you are looking for may have been moved, renamed, or no longer exists.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-md border border-border px-3 py-2 text-sm transition-colors hover:bg-foreground/5"
        >
          Go home
        </Link>
        <Link
          href="/components"
          className="rounded-md border border-border px-3 py-2 text-sm transition-colors hover:bg-foreground/5"
        >
          Browse components
        </Link>
        <Link
          href="/blocks"
          className="rounded-md border border-border px-3 py-2 text-sm transition-colors hover:bg-foreground/5"
        >
          Browse blocks
        </Link>
      </div>
    </main>
  );
}
