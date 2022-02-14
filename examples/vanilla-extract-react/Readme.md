# Design System Guidelines:

## Styles

- All Styles that affect multiple components/pages stay in the `src/styles` folder
- Minimize/Avoid specifying any specific 'numbers' out of the styles folder as it gives rise to inconsistences
- Never use font sizes out of FontSizes exported in the index.css
- Never use colors out of the colors given by the themeVars

## Component Structure

- Components live in folders

  - Button
    - Button.tsx // Contains the export for the component
    - Button.styles.css.ts // Contains the styling
    - Button.hooks.tsx // Contains Hooks/Stateful logic
    - Button.types.ts // Contains Type Declarations

  Having components in this way helps seperate concerns and make everything modular.

## Themes

- if your app does not have a theme then we use a single theme config so that the app can accomodate themes in the future
- themes only contain variable things such as color
- Global Theme contain constant things such as fontSizes and Font Faces
- refer the Typography.css.ts file for seeing how fonts are configured

## Markup

- Use Semantic Tags wherever possible
- Pages should ideally have `<header>` `<footer>` (if the page has them) and a `<main>` for main content
- use `<section>` for page sections
- minimize use of `<div>` and `<span>`
- use `<button>` for clickable elements which acutally act as button.
- Automatically enhance acessibility by doing this and SEO

## React Components

- Seperate concerns by putting all logic of a component in a seperate hook.
- Seperate styles in a seperate file
- use Services to wrap around native apis like `fetch`
- Implement DRY
- Use Storybook if your codebase needs it and take advantage of snapshot testing using storyshots.
- vitest is a good package for starting out with testing.
