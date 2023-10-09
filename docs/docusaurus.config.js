// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hover Design",
  tagline: "A component library created by bunch of ants from AntStack",
  url: "https://hover.style",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "antstackio", // Usually your GitHub org/user name.
  projectName: "hover-design", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/antstackio/hover-design/issues/new"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Hover Design",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg"
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation"
          },
          {
            type: "doc",
            docId: "wiki/home",
            position: "left",
            sidebarId: "wiki",
            label: "Wiki"
          },
          {
            href: "https://github.com/antstackio/hover-design",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro"
              },
              {
                label: "Wiki",
                to: "/docs/wiki/home"
              }
            ]
          },

          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/antstackio/hover-design"
              }
            ]
          }
        ]
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    }),
  plugins: ["docusaurus-plugin-vanilla-extract"]
};

module.exports = config;
