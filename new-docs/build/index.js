var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// ../node_modules/.pnpm/@remix-run+dev@2.3.0_@types+node@17.0.45_vite@2.9.15/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "../node_modules/.pnpm/@remix-run+dev@2.3.0_@types+node@17.0.45_vite@2.9.15/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "../node_modules/.pnpm/@remix-run+dev@2.3.0_@types+node@17.0.45_vite@2.9.15/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import { LiveReload } from "@remix-run/react";

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-M6CMZ25E.css";

// app/root.tsx
import {
  Links,
  Meta,
  Outlet,
  Scripts
} from "@remix-run/react";

// app/src/Components/HomePage.css.ts
var landingPage = "HomePage_landingPage__1b1gqby0", navbar = "HomePage_navbar__1b1gqby1", navigationContainer = "HomePage_navigationContainer__1b1gqby2", logo = "HomePage_logo__1b1gqby3", navLinks = "HomePage_navLinks__1b1gqby4", searchContainer = "HomePage_searchContainer__1b1gqby5", searchInput = "HomePage_searchInput__1b1gqby6", contentContainer = "HomePage_contentContainer__1b1gqby7", contentH1 = "HomePage_contentH1__1b1gqby8", contentPara = "HomePage_contentPara__1b1gqby9", exploreButton = "HomePage_exploreButton__1b1gqbya", exploreButtonInner = "HomePage_exploreButtonInner__1b1gqbyb";

// app/src/Logo/logo.png
var logo_default = "/build/_assets/logo-57SBAVRS.png";

// app/src/Components/HomePage.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var HomePage = () => /* @__PURE__ */ jsxDEV2("div", { className: landingPage, children: [
  /* @__PURE__ */ jsxDEV2("div", { className: navbar, children: /* @__PURE__ */ jsxDEV2("div", { className: navigationContainer, children: [
    /* @__PURE__ */ jsxDEV2("img", { className: logo, src: logo_default, alt: "Logo" }, void 0, !1, {
      fileName: "app/src/Components/HomePage.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV2("div", { className: navLinks, children: [
      /* @__PURE__ */ jsxDEV2("div", { children: "Docs" }, void 0, !1, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 11,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV2("div", { children: "Components" }, void 0, !1, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV2("div", { children: "Feedback" }, void 0, !1, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/src/Components/HomePage.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV2("div", { className: searchContainer, children: /* @__PURE__ */ jsxDEV2("input", { type: "text", placeholder: "Search..", className: searchInput }, void 0, !1, {
      fileName: "app/src/Components/HomePage.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/src/Components/HomePage.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/Components/HomePage.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/src/Components/HomePage.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV2("div", { className: contentContainer, children: [
    /* @__PURE__ */ jsxDEV2("div", { className: contentH1, children: [
      /* @__PURE__ */ jsxDEV2("h1", { children: "Elevate your project development" }, void 0, !1, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2("h1", { style: { display: "flex", justifyContent: "center", alignItems: "center" }, children: [
        "with\xA0",
        /* @__PURE__ */ jsxDEV2("span", { style: { color: "#308BDE" }, children: "Easy to use" }, void 0, !1, {
          fileName: "app/src/Components/HomePage.tsx",
          lineNumber: 24,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/src/Components/HomePage.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("p", { className: contentPara, children: "Don't waste any more time struggling with UI coding. Try out our library and" }, void 0, !1, {
      fileName: "app/src/Components/HomePage.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("p", { className: contentPara, children: "experience the power of fast, effective development for yourself." }, void 0, !1, {
      fileName: "app/src/Components/HomePage.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("div", { className: exploreButton, children: /* @__PURE__ */ jsxDEV2("button", { className: exploreButtonInner, children: "Explore" }, void 0, !1, {
      fileName: "app/src/Components/HomePage.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/src/Components/HomePage.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/Components/HomePage.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/src/Components/HomePage.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), HomePage_default = HomePage;

// app/src/index.tsx
import { Fragment, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var LandingPage = () => /* @__PURE__ */ jsxDEV3(Fragment, { children: /* @__PURE__ */ jsxDEV3(HomePage_default, {}, void 0, !1, {
  fileName: "app/src/index.tsx",
  lineNumber: 53,
  columnNumber: 6
}, this) }, void 0, !1, {
  fileName: "app/src/index.tsx",
  lineNumber: 52,
  columnNumber: 5
}, this), src_default = LandingPage;

// app/root.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links = () => [
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
  // ...
];
function App() {
  return /* @__PURE__ */ jsxDEV4("html", { children: [
    /* @__PURE__ */ jsxDEV4("head", { children: [
      /* @__PURE__ */ jsxDEV4(
        "link",
        {
          rel: "icon",
          href: "data:image/x-icon;base64,AA"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 24,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4("link", { rel: "stylesheet", href: "https://use.typekit.net/xwa0rlm.css" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("body", { children: [
      /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(src_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-U4THAKIC.js", imports: ["/build/_shared/chunk-O6H5X7FR.js", "/build/_shared/chunk-4LCR5BZL.js", "/build/_shared/chunk-UPLJBB24.js", "/build/_shared/chunk-2LWOUH52.js", "/build/_shared/chunk-PDVJRT3N.js", "/build/_shared/chunk-UFD3LBRE.js", "/build/_shared/chunk-BZC5MUAP.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-42GDXO3S.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "9199bec0", hmr: { runtime: "/build/_shared\\chunk-2LWOUH52.js", timestamp: 1702271321640 }, url: "/build/manifest-9199BEC0.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
