# Contributing

Thanks for your interest in contributing to UnicornSpaceUI. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@mohdfaizan_5](https://twitter.com/mohdfaizan_5).

## About this repository

This repository is a

<!-- SFI -->
<!-- TODO -->


## Structure

This repository is structured as follows:

```


├── content   
|    ├── blogs
|    ├── components
|    └── guides
├── src             
|    ├── actions
|    ├── app
|    |    ├── (main)
|    |    |      ├── blogs
|    |    |      ├── components
|    |    |      ├── get-started
|    |    |      ├── guides
|    |    |      ├── tools
|    |    |      └── layout.tsx
|    |    ├── (other)
|    |    |      ├── changelog
|    |    |      ├── showcase
|    |    |      └── test
|    |    └── api
|    |         └── generate-banner
|    ├── components
|    ├── config
|    ├── data
|    ├── hooks
|    ├── lib
|    ├── registry
|    ├── script
|    ├── styles
|    └── types
├── contentlayer.config.js
└── package.json

```

| Path              | Description                              |
| ----------------- | ---------------------------------------- |
| `/src/app`        | The Next.js application for the website. |
| `/src/components` | The React components for the website.    |
| `/src/content`    | The content for the website.             |
| `/src/registry`   | The registry for the components.         |
<!-- TODO: Refer the above tree structure and add description to path -->

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/ui.git
```

### Navigate to project directory

```bash
cd ui
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm install
```

```bash
node .\src\scripts\extract-component-code.js
```

### Components
We use a registry system for developing components. You can find the source code for the components under ``/src/registry``. The components are organized by styles.

```
├── src
     └──registry
          ├──component-code
          ├──components
          ├──index.tsx
          └──schema.ts
```
After adding or modifying the components before commiting, please ensure that:

1. You run ``pnpm generate-registry`` to update the registry.


### Tools
Handy utilities to boost your development process. 
The Tools are organized by styles.
```
├── src
     └── app
          └── (main)
                └── tools
```


### Guides
Clear, step-by-step follow-along guides for every level. (Complex concepts made easy.)
The Tools are organized by styles.
```
├── content
     └── guides
```

### Blogs
Clear, step-by-step follow-along guides for every level. (Complex concepts made easy.)
The Tools are organized by styles.
```
├── content
     └── blogs
```

### Commit Convention
Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this repository.

## Requests for new components

If you have a request for a new component, please open a discussion on GitHub. We'll be happy to help you out.



<!--


### Run a workspace

You can use the `pnpm --filter=[WORKSPACE]` command to start the development process for a workspace.

#### Examples

1. To run the `ui.shadcn.com` website:

```bash
pnpm --filter=www dev
```

2. To run the `shadcn-ui` package:

```bash
pnpm --filter=shadcn-ui dev
```

## Documentation

The documentation for this project is located in the `www` workspace. You can run the documentation locally by running the following command:

```bash
pnpm --filter=www dev
```

Documentation is written using [MDX](https://mdxjs.com). You can find the documentation files in the `apps/www/content/docs` directory.

## Components

We use a registry system for developing components. You can find the source code for the components under `apps/www/registry`. The components are organized by styles.

```bash
apps
└── www
    └── registry
        ├── default
        │   ├── example
        │   └── ui
        └── new-york
            ├── example
            └── ui
```

When adding or modifying components, please ensure that:

1. You make the changes for every style.
2. You update the documentation.
3. You run `pnpm build:registry` to update the registry.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).


## CLI

The `shadcn-ui` package is a CLI for adding components to your project. You can find the documentation for the CLI [here](https://ui.shadcn.com/docs/cli).

Any changes to the CLI should be made in the `packages/cli` directory. If you can, it would be great if you could add tests for your changes.

## Testing

Tests are written using [Vitest](https://vitest.dev). You can run all the tests from the root of the repository.

```bash
pnpm test
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.
 -->
