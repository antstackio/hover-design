---
sidebar_position: 2
description: Hover Wiki - Ideas
---

# Hover Concepts

Following are the concepts/philosophies/features hover is going to have throughout its development. Its strongly believed that to make anything work we should observe, absorb the information and guidelines and come up with our own interpretation of it. Simply implementing what we read simply puts someone else's ideas onto us and leads to confusion burnout and doubt.

## The Fluid System

- We use a set of pre-defined CSS configurations. We will call these the fluids (our components hover on the fluid)
- Fluids are divided into the following parts
  - Colors
  - Borders
  - Font Sizes
  - Spacing and Layout (Padding and Margins)
  - Opacity
  - Typography
- A pre defined fluid will be set until it is overridden by any other fluid. There are 6 Fluids set so a consumer may choose to override any 1 or all of them
- Theme Support is going to happen by giving multiple fluids
- Entry point for the Fluid will be the **provider**
- **Vanilla Extract Specific**
  - ~~Blocker - Making storybook work with Vite + VE is an issue~~ Resolved by using [Ladle](https://ladle.dev/)
  - Vanilla-Extract + vite is smooth but also Rollup + vite is also great
  - We need to use sprinkles as the overseeing configuration for our fluid system
  - Recipes for variant creation
