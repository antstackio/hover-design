# Contribution

Thank you for showing interest to make hover grow!

In this guide you will get an overview of the contribution workflow from cloning the project repository, creating a new component, creating reviewing, and merging your Pull Request.

## 1. Cloning the repository

First step is to fork the hover project from [Github](https://github.com/antstackio/hover-design)

_Note: We have a Playbook for the best practices read more [here](/docs/wiki/playbooks/git_playbook)_

## 2. Understanding the Project

The file structure of the project is as follows:

```
hover-design
┣ docs      // codebase for documentation
┣ examples  // has examples for usage
┗ packages/react       // react codebase of library
```

The project is a Monorepo making use of [Turborepo](https://turborepo.org/) for managing everything. With [PNPM](https://pnpm.io/) as the package manager

## 3. Locally building and installing

We use [PNPM](https://pnpm.io/) as the package manager. Refer [here](https://pnpm.io/installation) for installation instructions.

in the root of the project run the command

```
pnpm i
```

This installs all dependencies and gets you ready to run your project using

```
pnpm dev
```

this spins up the docs and the lib in watch mode. The docs is symlinked locally so all changes made in the `lib` folder will be reflected immediately.

## 4. Adding a new component

To add any new component we first make the spec, we add our plans and api makeup on the docs in `docs/docs/components` by creating a `.mdx` file.

Once the spec is created raise a PR and ask for either
[@pruthvi2103](https://github.com/pruthvi2103) or [@Raalzz](https://github.com/Raalzz) 's review.

We can proceed with development after that. The project uses the following tech stack

- react
- typescript
- [vanilla-extract](https://vanilla-extract.style/) for styling
- [Turborepo](https://turborepo.org/)

Raise a PR after contributing the code and replacing spec with actual documentation.

For our Ideas, methodology and reasonings refer to our [Wiki](/docs/wiki/home)

We also have a [Playbook](/docs/wiki/playbooks/git_playbook) where we document our best practices and 'what to dos'

refer [Prerequisites](/docs/wiki/getting_started) to look at what approach to follow.

Thank you for taking the time to read this doc. to suggest anything do not be afraid to [create an issue](https://github.com/antstackio/hover-design/issues/new) at the hover repo

## 5. Testing locally.

We use [Ladle](https://ladle.dev/) for writing stories. All you need to do is write a `.story.tsx` file and see the magic happen by running `pnpm ladle`.
