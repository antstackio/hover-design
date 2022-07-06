---
sidebar_position: 0
description: Hover Wiki Home
---

# Hover Design

<a href="https://github.com/antstackio/hover-design">
<img src="https://avatars.githubusercontent.com/t/5436523?s=280&v=4" align="left" hspace="10" vspace="6"></img>
</a>

## About

**Hover Design** is antstack's internal(for now) Design/Component System which aims to reduce the repetitive scaffolding/boilerplate which goes into making re-usable components. Its built using [vanilla-extract](https://vanilla-extract.style/) with [Vite](https://vitejs.dev/) as the bundler. This wiki acts as the documentation, roadmap and plan for the design system until a proper documentation site is made. The package is intended to be divided by framework. Focusing on being Platform Agnostic.

Currently the project is under development and need of devs to pitch in for Brainstorming and Developing Components

## Contents

- [Introduction](https://github.com/antstackio/hover-design/wiki#introduction)
- [What's Hover Exactly?](https://github.com/antstackio/hover-design/wiki#whats-hover-exactly)
- [How To Contribute](https://github.com/antstackio/hover-design/wiki#how-to-contribute)

## Introduction

At Antstack we often observe that a lot of engineering effort goes into setting up and scaffolding reusable components, and for a lot of times developers get a *Déjà vu*esque feeling of _'wait, I have done this before.'_ As the organisation grows and we have multiple clients and internal projects we see this problem getting worse where multiple developers may do the same things already done by someone from the org, or by themselves. We aim to save engineering time so that we may focus on fruitful things, instead of repetition we focus on refining our system. Since the field of software development always comes with deadlines, more often than not, teams which deliver features on time are held in high regard. With this we want our frontend teams to have an efficiency boost. Every company eventually faces this problem which calls for internal tools to be developed, and hover is one of the first tools that solves this very great problem to have for the org.

## What's Hover Exactly?

Its a library of components and styles! Take for example, we have a project which required a Button. To implement a button in a Framework say, React and make it re-usable throughout the project takes a good amount of engineering effort from teams, the effort which is almost repeated by all teams. How about we take a base button that serves almost all common purposes and _'enhance'_ it with respect to the project, like adding the specific styles of modifying the functionality? A 2 Day effort reduced to a matter of hours!

Hover aims to provide this convenience across all frameworks and stacks by being platform agnostic for intents and purposes for the initial release we want to cater to react mainly as most of our projects are in react, but eventual aim is to make it truly agnostic by dividing core styles and framework specific code into separate entities.

We use vanilla-extract which to put it in a very basic sense is like SASS but here, the compiler is TypeScript. It gives you the type check of Typescript without the ugly bits

## How To Contribute

If you are interested in contributing to development of Hover please read the Getting Started Portion!

**Note: This is a WIP**
