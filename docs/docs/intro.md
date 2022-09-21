---
sidebar_position: 0
---

# Quickstart

Let's get started with running hover-design.

## Getting Started

Get started by creating any react based project. We recommend using vite as your tool for bundling as we keep vite as the primary focus of cosumption(in its early stages), however hover should work with any bundler without any issues

Or **try Hover immediately** with **[codesandbox](https://codesandbox.io/s/react-typescript-forked-zymhi4)**.

## Installation

Install the package using your favourite package manager

```shell
npm install @hover-design/react
```

## Usage

Before using any components, import the css for all components by adding this line on the entrypoint of your project

```jsx
import "@hover-design/react/dist/style.css";
```

## Using Components

using components are easy, they are typed so expect in-built documentation.

Usage Example

```jsx
import "@hover-design/react/dist/style.css";
import { Button } from "@hover-design/react";

export const Component = () => <Button>I am a Button</Button>;
```
