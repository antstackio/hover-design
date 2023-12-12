import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4LCR5BZL.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts
} from "/build/_shared/chunk-UPLJBB24.js";
import {
  createHotContext
} from "/build/_shared/chunk-2LWOUH52.js";
import "/build/_shared/chunk-PDVJRT3N.js";
import "/build/_shared/chunk-UFD3LBRE.js";
import "/build/_shared/chunk-BZC5MUAP.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-M6CMZ25E.css";

// app/src/Components/HomePage.css.ts
var landingPage = "HomePage_landingPage__1b1gqby0";
var navbar = "HomePage_navbar__1b1gqby1";
var navigationContainer = "HomePage_navigationContainer__1b1gqby2";
var logo = "HomePage_logo__1b1gqby3";
var navLinks = "HomePage_navLinks__1b1gqby4";
var searchContainer = "HomePage_searchContainer__1b1gqby5";
var searchInput = "HomePage_searchInput__1b1gqby6";
var contentContainer = "HomePage_contentContainer__1b1gqby7";
var contentH1 = "HomePage_contentH1__1b1gqby8";
var contentPara = "HomePage_contentPara__1b1gqby9";
var exploreButton = "HomePage_exploreButton__1b1gqbya";
var exploreButtonInner = "HomePage_exploreButtonInner__1b1gqbyb";

// app/src/Logo/logo.png
var logo_default = "/build/_assets/logo-57SBAVRS.png";

// app/src/Components/HomePage.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\src\\\\Components\\\\HomePage.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\src\\Components\\HomePage.tsx"
  );
}
var HomePage = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: landingPage, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: navbar, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: navigationContainer, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: logo, src: logo_default, alt: "Logo" }, void 0, false, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: navLinks, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Docs" }, void 0, false, {
          fileName: "app/src/Components/HomePage.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Components" }, void 0, false, {
          fileName: "app/src/Components/HomePage.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Feedback" }, void 0, false, {
          fileName: "app/src/Components/HomePage.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: searchContainer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Search..", className: searchInput }, void 0, false, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/src/Components/HomePage.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/src/Components/HomePage.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: contentContainer, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: contentH1, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Elevate your project development" }, void 0, false, {
          fileName: "app/src/Components/HomePage.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }, children: [
          "with\xA0",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "#308BDE"
          }, children: "Easy to use" }, void 0, false, {
            fileName: "app/src/Components/HomePage.tsx",
            lineNumber: 45,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/src/Components/HomePage.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: contentPara, children: "Don't waste any more time struggling with UI coding. Try out our library and" }, void 0, false, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: contentPara, children: "experience the power of fast, effective development for yourself." }, void 0, false, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: exploreButton, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: exploreButtonInner, children: "Explore" }, void 0, false, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/src/Components/HomePage.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/src/Components/HomePage.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/src/Components/HomePage.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c = HomePage;
var HomePage_default = HomePage;
var _c;
$RefreshReg$(_c, "HomePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/src/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\src\\\\index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\src\\index.tsx"
  );
}
var LandingPage = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HomePage_default, {}, void 0, false, {
    fileName: "app/src/index.tsx",
    lineNumber: 68,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/src/index.tsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
};
_c2 = LandingPage;
var src_default = LandingPage;
var _c2;
$RefreshReg$(_c2, "LandingPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => [
  ...cssBundleHref ? [{
    rel: "stylesheet",
    href: cssBundleHref
  }] : []
  // ...
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "stylesheet", href: "https://use.typekit.net/xwa0rlm.css" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(src_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c3 = App;
var _c3;
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-42GDXO3S.js.map
