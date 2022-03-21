import { globalStyle } from "@vanilla-extract/css";

/* HTML5 display-role reset for older browsers */
globalStyle(
  "article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section",
  {
    display: "block",
  }
);
globalStyle("body", { lineHeight: 1 });
globalStyle("ol,ul", { listStyle: "none" });
globalStyle("blockquote,q", { quotes: "none" });
globalStyle("blockquote:before,blockquote:after,q:before,q:after", {
  content: "",
});
globalStyle("table", { borderCollapse: "collapse", borderSpacing: 0 });
globalStyle("button", { border: 0 });
globalStyle("*", { boxSizing: "border-box" });
