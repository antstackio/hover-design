import React from "react";
import { LiveReload } from "@remix-run/react";

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
import Index from "./src";
  
export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }]
    : []),
  // ...
];  
export default function App() {
    return (
      <html>
        <head>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <link rel="stylesheet" href="https://use.typekit.net/xwa0rlm.css" />
          <Meta />
          <Links />
        </head>
        <body>
          <LiveReload />
          <Index />
          <Outlet />
  
          <Scripts />
        </body>
      </html>
    );
  }
  