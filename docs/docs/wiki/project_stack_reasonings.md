---
sidebar_position: 3
description: Hover Wiki - Stack and Reasonings
---

# The Tech Stack of Hover Design

Hover Design leverages a lot of things for making lives of its Developers and its consumers (Also Developers) Easier, heres our analysis and Insight that went behind choosing these things to help us.

## Vanilla Extract

There's been multiple css-in-js solutions out there and they have been great for the most part. But we chose Vanilla Extract for its simplicity, its 0 runtime and brings together plain css and plain Typescript. Its Type-Checked nature what made it intresting, but in practice we thought of having a strict system of knowing what's at your disposal and what's not really helps out when writing CSS for big codebases.

Read More about Vanilla Extract [here](https://vanilla-extract.style/)

## Vite

When it comes to development, its never fun when the developer has to wait for a long time for the bundling to happen, Vite created by Evan You has seen an extremely warm adoption by multiple frameworks and libraries, we too are impressed by the speed and the seamless DX with its plugins and everything along with it, we decided to adopt vite as the bundler for our library

Read More about Vite [here](https://vitejs.dev/)

## Ladle

Ladle just works! when it comes to a component library such as this ladle is a no brainer for the showcase and writing stories, we also plan to expand this further by letting it go beyond just a dev-dependency but make it a part of the app so that we can easily import stories too but that's a later thing. Storybook gave us trouble so we switched to Ladle
